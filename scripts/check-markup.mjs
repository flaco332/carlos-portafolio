import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';

// Integration smoke check of real rendered components, without a browser.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const markup = renderToStaticMarkup(createElement(App));
  const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Duplicate DOM IDs');
  const anchors = [...markup.matchAll(/<a\b[^>]*>/g)].map(match => match[0]);
  for (const anchor of anchors) {
    const href = anchor.match(/\bhref="([^"]+)"/)?.[1];
    assert.ok(href && href !== '#', 'Empty/placeholder link');
    if (href.startsWith('#')) assert.ok(ids.includes(href.slice(1)), `Missing section: ${href}`);
    if (/^https?:/.test(href)) {
      assert.match(anchor, /target="_blank"/, 'External link must open separately');
      assert.match(anchor, /rel="noopener noreferrer"/, 'External link must isolate opener');
    }
    assert.ok(!/^javascript:/i.test(href), 'Unsafe link protocol');
  }
  assert.match(markup, /href="#skills"[^>]*>View Skills/, 'Missing hero skills link');
  assert.match(markup, /href="#projects"[^>]*>View Projects/, 'Missing hero projects link');
  const badgeImages = [...markup.matchAll(/<img\b[^>]*src="[^"]*badges\/[^"]+"[^>]*>/g)].map(match => match[0]);
  assert.equal(badgeImages.length, 6, 'Expected six locally served official Credly artworks');
  assert.ok(!markup.includes('<iframe'), 'Credential presentation must stay controlled by local CSS');
  for (const badgeImage of badgeImages) {
    assert.ok(badgeImage.includes(`src="${server.config.base}badges/`), 'Badge must use the configured deployment subpath');
    assert.match(badgeImage, /alt="[^"]+official Google Cloud badge"/);
    assert.match(badgeImage, /loading="lazy"/);
    assert.match(badgeImage, /object-contain/);
    const file = badgeImage.match(/badges\/([^"]+)"/)?.[1];
    const png = readFileSync(new URL(`../public/badges/${file}`, import.meta.url));
    assert.equal(png.subarray(1, 4).toString(), 'PNG', 'Badge must be valid PNG artwork');
    assert.equal(png.readUInt32BE(16), png.readUInt32BE(20), 'Badge artwork must remain square');
  }
  const { credentialTopics } = await server.ssrLoadModule('/src/data.ts');
  for (const badge of credentialTopics.flatMap(topic => topic.badges)) {
    assert.ok(anchors.some(anchor => anchor.includes(`href="${badge.credentialUrl}"`)), 'Credential verification link missing');
  }
  assert.ok(anchors.some(anchor => anchor.includes('href="mailto:crdeveloper@proton.me"')), 'Professional email missing');
  assert.ok(anchors.some(anchor => anchor.includes('href="https://t.me/cr0dev"')), 'Telegram missing');
  assert.ok(!anchors.some(anchor => anchor.includes('href="tel:')), 'Phone must not be published');
  for (const repoUrl of ['https://github.com/flaco332/packet-tracer-security.git', 'https://github.com/flaco332/grep-c', 'https://github.com/flaco332/Onca']) {
    assert.ok(anchors.some(anchor => anchor.includes(`href="${repoUrl}"`)), 'Authorized project repository missing');
  }
  assert.equal((markup.match(/<details\b/g) ?? []).length, 5, 'Every project must offer details');
  assert.ok(markup.indexOf('id="about"') > markup.indexOf('id="badges"'));
  assert.ok(markup.indexOf('id="about"') < markup.indexOf('id="contact"'));
  assert.ok(!markup.includes('<script'), 'No script injected into rendered sections');
  const bjjButton = markup.match(/<button[^>]*aria-label="Toggle BJJ easter egg"[^>]*>/)?.[0];
  assert.ok(bjjButton, 'Terminal easter egg must be keyboard-accessible');
  assert.match(bjjButton, /aria-expanded="false"/, 'Easter egg must start collapsed');
  const bjjPanelId = bjjButton.match(/aria-controls="([^"]+)"/)?.[1];
  assert.ok(markup.includes(`id="${bjjPanelId}" hidden=""`), 'Easter egg panel must be hidden by default');
  console.log('Markup check passed: anchors, contacts, projects, six official badge artworks and safe verification links.');
} finally {
  await server.close();
}
