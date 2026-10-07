# Carlos / CR Dev - Engineering Portfolio

A terminal-inspired personal portfolio for a Computer Systems Engineering student at UDLAP. The focus is practical learning in cybersecurity, networking, cloud, Linux, software engineering, low-level programming, DevSecOps and computer vision / machine learning. This is a static frontend, with no backend or application secrets required.

## Design and architecture

Vite 8, React 19, TypeScript 6, Tailwind CSS v4 through PostCSS, Framer Motion and Lucide React. The existing dark theme, animated terminal, neofetch panel, console-style skill groups, git-log learning section and native section anchors are preserved.

Section order: Home -> Skills -> Projects -> Technical learning -> Certifications & Badges -> About Me -> Contact. Both hero buttons reuse `#projects` and `#skills`. Responsive grids, wrapping cards and fixed-navigation scroll offsets are defined in the components and `src/index.css`.

## Run locally

Use Node.js 22.12+ (Node 24 is also supported) and npm.

```bash
npm ci
npm run dev
```

Available checks and production commands:

```bash
npm run lint
npm run check:markup
npm run build
npm run preview
```

`build` runs TypeScript (`tsc -b`) before Vite and writes `dist/`. There is no standalone `typecheck` or `test` npm script. The existing `check:markup` integration check renders actual components and checks section targets, unique IDs, contact and project links, external link safety, all six square badge artworks and verification links, and the collapsed accessible easter egg.

## Structure

```text
src/
  data.ts                     Public profile, skills, projects, learning, credentials
  App.tsx                     Section order
  main.tsx                    React StrictMode entry
  index.css                   Tailwind v4, theme tokens and base styles
  components/
    Hero.tsx / Terminal.tsx    Hero and animated console
    BjjEasterEgg.tsx           Small hidden terminal interaction
    Nav.tsx                   Desktop/mobile anchors
    Skills.tsx                Nine grouped areas of practice
    Projects.tsx              Project details, technologies and public links
    LearningLog.tsx           Coursework and practical learning
    Badges.tsx                Credential cards grouped by topic
    CredlyBadge.tsx            Locally served official badge image
    About.tsx                 About copy and neofetch panel
    Contact.tsx               Authorized contact links and email copying
public/badges/                 Six official Google Cloud badge artworks
public/favicon.svg            Terminal favicon
scripts/check-markup.mjs       Rendered-markup integration checks
.github/workflows/deploy-pages.yml  Official GitHub Pages build/deployment workflow
```

## Public identity and contact

Public identity is Carlos / CR Dev. Explicitly authorized contact channels are `crdeveloper@proton.me` and `https://t.me/cr0dev`, configured in `src/data.ts`. The email uses `mailto:`; copying reports success or an accessible fallback message. Telephone and profile location are not published. GitHub profile and LinkedIn remain unset; only the three authorized project repository links appear.

## Projects

- **Packet Tracer Security:** [repository](https://github.com/flaco332/packet-tracer-security.git). Experimental defensive analysis using Python, Scapy, traffic features and SWI-Prolog rules, with explanations and replayable evidence. It is an academic learning project, not a production IDS, and does not train ML models.
- **Grep-C / Mini Grep:** [repository](https://github.com/flaco332/grep-c). The current implementation is Python/Textual. It searches exact filenames in a directory snapshot using binary search, with a TUI and CLI; it does not search file contents or implement GNU grep semantics.
- **ONCA:** [repository](https://github.com/flaco332/Onca). Python/Tkinter/SQLite desktop management for students, payments, activities and certificate attachments. It grew from a real need at an MMA academy where I taught classes; the current source describes a release candidate. BJJ is a brief personal detail, not the professional focus.
- **Security Lab Evidence:** a collection being prepared; add a reviewed public Drive URL through `evidenceUrl` when ready.
- **Personal Portfolio:** the current React/TypeScript site; no repository or demo URL is invented.

Descriptions were checked against the three repository README files on 2026-10-06. External repository history and external credential pages are outside this portfolio's Git sanitization scope. The ONCA and Mini Grep documentation describe privacy considerations for their own histories; those repositories were read only and not imported, merged or rewritten here.

Each card offers expandable details and technology tags. Optional `repoUrl`, `demoUrl` and `evidenceUrl` fields control available links. Missing links are omitted instead of using fake `#` anchors.

## Skills

Nine groups distinguish languages, cybersecurity tools, networking foundations, cloud/infrastructure, relational databases, backend/cloud data services, DevOps tools, web frameworks and computer vision/ML foundations. These are areas of coursework and hands-on practice, without invented proficiency ratings.

The owner-authorized additions are PostgreSQL, Supabase, Google Cloud SQL, Google Cloud Spanner, Firestore, Google Cloud Bigtable, SciPy image processing and Pillow (PIL). They describe the owner's learning stack, not dependencies or backend services used by this static frontend. Spanner is grouped with relational databases; Firestore and Bigtable with cloud data services.

The correct SciPy import is:

```python
from scipy import ndimage as ndi
```

## Credly presentation

All six existing Credly IDs and public verification links are retained. Each card shows the official PNG artwork downloaded from the image URL served by its official Credly embed. A consistent white square mat accommodates both opaque white backgrounds and the transparent certificate artwork, with restrained padding, rounded corners and `object-contain`; the outer card keeps the dark terminal theme.

Images are served locally using Vite's base URL, load lazily, have alt text and explicit square dimensions, and link to the original credential. No iframe CSS override, external script, HTML injection or modification of Credly's external content is used. This removes the inconsistent embedded document background and duplicated title while preserving verification.

## BJJ easter egg

Click or keyboard-activate `bjj()` in the terminal chrome to reveal the supplied small ASCII banner and "Tap. Debug. Repeat." It is hidden initially, overlays the terminal without changing page layout, exposes its expanded state to assistive technology and closes with Escape or another activation. No new dependency or console output is added.

## Security, privacy and publication status

The earlier sanitized Git history is preserved. Author and Committer remain `CR Dev <cr-dev@example.invalid>`. No surname, personal mailbox, phone or precise location is reintroduced. Only the explicitly authorized contact and project URLs are exceptions to the existing local privacy verifier. Credly verification pages remain identifying external links with the owner's explicit authorization.

Private backup refs, old remote-tracking refs and local bundles are not part of these changes and must not be published or merged. The local pre-push hook remains active. The baseline sanitized publication bundle is intentionally unchanged and does not contain this newer release-review work; review and explicitly export the new HEAD when publication is approved. Never publish all refs or copy the entire working `.git` directory.

No environment variables are required. `.env`, `.env.*` (except `.env.example`), credentials, private keys, cloud account configuration, databases, logs and installed/build outputs are ignored. Any future `VITE_*` value is public frontend configuration, not a place for secrets. No Supabase credentials are configured.

GitHub Pages deployment is configured locally with Vite `base: '/carlos-portafolio/'` and the official Actions workflow. No push, force push, merge, remote hosting setup or deployment was performed. This version is for manual review before publication. The two earlier security/privacy Markdown reports were intentionally removed by the owner; local protection and recovery artifacts remain in `.git`.

Browser QA was attempted, but computer-use stopped because it could not verify Opera's current URL confidently enough to enforce its policy. Actual desktop/tablet/mobile visual rendering, clipboard/keyboard interaction and browser-console checks remain pending manual review; successful build and markup checks do not replace them.

## Live Portfolio

Expected URL: https://flaco332.github.io/carlos-portafolio/

Deployment configured; the site becomes available after enabling GitHub Pages and completing the first successful workflow. It is not confirmed online. The URL and Vite base were derived from the configured origin repository, not the npm package or local folder name.

The workflow uses Node 22, `npm ci`, lint, the markup check and `npm run build`, then uploads only `dist/` with the official GitHub Pages actions. Pushes to `main` trigger deployment; manual workflow dispatch can also deploy from `main`. Dispatching from another branch does not deploy. The previous deployment workflow was replaced to avoid duplicate runs. There is no SPA router: navigation uses anchors, so no HashRouter or 404 workaround is needed.

Local production preview:

```bash
npm run build
npm run preview
```

Open the preview server at `/carlos-portafolio/`. Badge paths already use `import.meta.env.BASE_URL`; the favicon uses Vite's `%BASE_URL%`. The built JS, CSS and favicon URLs use the repository subpath.

Manual setup after reviewing the sanitized branch:

1. Create the empty `carlos-portafolio` repository in the configured GitHub account. The owner confirmed it does not exist yet. Do not initialize it with a README, license or .gitignore; this preserves a normal first push from the reviewed sanitized history.
2. Open Settings -> Pages -> Build and deployment -> Source -> GitHub Actions. If Pages is unavailable for the private repository on the current plan, review the publication/plan choice manually.
3. Verify `git ls-remote --heads origin` succeeds and shows an empty remote, then explicitly push only the sanitized local branch to `main`. If `main` unexpectedly exists, stop and compare histories first; do not merge old private history or force-push by default.
4. Open Actions -> Deploy GitHub Pages and check both build and deploy jobs.
5. Open the expected site URL only after the workflow succeeds.

After review, for the newly created empty remote only:

```bash
git push origin refs/heads/feat/portfolio-content-security:refs/heads/main
```

This command is documented for the owner to execute; it was not run during setup.

The owner authorized adding only this exact expected Pages URL to the existing privacy verifier. The pre-push hook and backup artifacts remain unchanged; no hook bypass or private-backup publication is authorized.

## License

Personal project. You may reuse the structure, replacing the portfolio content with your own.
