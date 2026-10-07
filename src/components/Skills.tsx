import { motion } from "framer-motion";
import { skillCategories } from "../data";
import { SectionHeading } from "./About";

// Literal class strings (not built via template interpolation) so Tailwind's
// scanner can find them at build time — same pattern as STATUS_STYLES in
// Projects.tsx. Cycled by category index.
const CHIP_ACCENTS = [
  "hover:border-blue-dim/60 hover:text-blue",
  "hover:border-cyan/40 hover:text-cyan",
  "hover:border-green-dim/60 hover:text-green",
  "hover:border-purple/40 hover:text-purple",
  "hover:border-amber/40 hover:text-amber",
] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="$ ./skill-console --list"
          title="Skills"
          description="Tools and foundations I use in projects, coursework and controlled labs. These are areas of practice, not proficiency ratings."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.08 }}
              className="panel min-w-0 rounded-lg p-5 transition-colors hover:border-text-dim/50"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-text">
                  {category.label}
                </h3>
                <span className="shrink-0 rounded border border-border bg-bg-panel-2 px-2 py-0.5 font-mono text-[11px] text-text-dim">
                  {category.promptTag}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-flex max-w-full items-center gap-1 rounded-md border border-border bg-bg-panel-2 px-2.5 py-1 font-mono text-[12px] text-text-muted transition-colors ${CHIP_ACCENTS[i % CHIP_ACCENTS.length]}`}
                  >
                    <span className="text-text-dim">›</span>
                    <span className="min-w-0 break-words">{item}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
