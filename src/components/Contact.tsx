import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, TELEGRAM_URL, LINKEDIN_URL } from "../data";
import { SectionHeading } from "./About";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied to clipboard.");
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopyStatus(""), 2500);
    } catch {
      setCopyStatus("Copy unavailable. You can select the address or open the email link.");
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="$ ./contact --reach-out" title="Let's talk" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="panel mt-10 min-w-0 rounded-xl p-5 sm:mt-12 sm:p-10"
        >
          <p className="max-w-xl text-lg leading-relaxed text-text">
            Open to{" "}
            <span className="text-green">freelance projects</span>,{" "}
            <span className="text-blue">junior roles</span>,{" "}
            <span className="text-purple">internships</span> and
            collaboration.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            {profile.email && <>
            <a href={`mailto:${profile.email}`} aria-label="Email CR Dev" className="inline-flex min-h-11 max-w-full items-center gap-2.5 rounded-md border border-border bg-bg-panel-2 px-4 py-3 font-mono text-sm hover:border-blue-dim">
              <Mail className="h-4 w-4 shrink-0 text-blue" /> <span className="min-w-0 break-all">{profile.email}</span>
            </a>
            <button
              onClick={copyEmail}
              aria-label={`Copy email address: ${profile.email}`}
              type="button"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-md border border-border bg-bg-panel-2 px-4 py-3 font-mono text-sm text-text transition-colors hover:border-blue-dim"
            >
              Copy email
              {copyStatus === "Email copied to clipboard." ? (
                <Check className="h-4 w-4 text-green" />
              ) : (
                <Copy className="h-4 w-4 text-text-dim" />
              )}
            </button>
            </>}

            {profile.github && <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md border border-border bg-bg-panel-2 px-4 py-3 font-mono text-sm text-text transition-colors hover:border-text-dim"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>}
            {LINKEDIN_URL && (
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-md border border-border bg-bg-panel-2 px-4 py-3 font-mono text-sm hover:border-blue-dim">
                <LinkedinIcon /> LinkedIn
              </a>
            )}
            {TELEGRAM_URL && (
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact CR Dev on Telegram" className="inline-flex min-h-11 items-center gap-2.5 rounded-md border border-border bg-bg-panel-2 px-4 py-3 font-mono text-sm hover:border-cyan">
                <Send className="h-4 w-4 shrink-0" /> Telegram · @cr0dev
              </a>
            )}
          </div>

          {!profile.email && !profile.github && !LINKEDIN_URL && !TELEGRAM_URL && (
            <p className="mt-4 text-sm text-text-muted">Public contact channels coming soon.</p>
          )}

          <p role="status" aria-live="polite" className="mt-3 min-h-4 font-mono text-xs text-green">{copyStatus}</p>
        </motion.div>
      </div>
    </section>
  );
}
