import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Terminal from "./Terminal";
import StatusBadge from "./StatusBadge";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88vh] items-center pt-28 pb-14 sm:min-h-[90vh] sm:pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StatusBadge label={profile.status} className="mb-6" />

          <p className="mb-3 font-mono text-sm text-blue">
            $ echo "whoami"
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]">
            Welcome, I'm{" "}
            <span className="text-green text-glow-green">Carlos</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted">
            Systems Engineering student exploring cybersecurity, cloud and Linux,
            with hands-on software, networking and low-level programming projects.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-green px-5 py-2.5 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#skills"
              className="group inline-flex items-center gap-2 rounded-md border border-green-dim/60 bg-green/10 px-5 py-2.5 font-mono text-sm font-medium text-green transition-transform hover:-translate-y-0.5"
            >
              View Skills
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-panel px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-blue-dim hover:text-blue"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            {profile.github && <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-panel px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-text-dim"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>}
          </div>

          <p className="mt-8 font-mono text-xs text-text-dim">
            {profile.university}{profile.location && ` · ${profile.location}`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotateX: 4 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
