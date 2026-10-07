import { Fragment } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { aboutText, systemInfo, profile } from "../data";

export default function About() {
  return (
    <section id="about" className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Columna izquierda */}
          <div>
            <SectionHeading eyebrow="$ cat about.md" title="About me" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mt-10 space-y-5 sm:mt-12"
            >
              {aboutText.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-text-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="h-fit lg:mt-8"
          >
            <div className="panel overflow-hidden rounded-lg">
              <div className="flex items-center gap-2 border-b border-border bg-bg-panel-2 px-4 py-2.5">
                <Cpu className="h-3.5 w-3.5 text-purple" />

                <span className="font-mono text-xs text-text-dim">
                  neofetch
                </span>
              </div>

              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-3 p-5 font-mono text-[13px] sm:text-sm">
                <div className="col-span-2 mb-1 flex items-center gap-2">
                  <span className="text-lg font-semibold text-green">
                    {profile.name.split(" ")[0].toLowerCase()}
                  </span>

                  <span className="text-text-dim">@</span>
                  <span className="text-blue">udlap</span>
                </div>

                <div className="col-span-2 mb-1 h-px bg-border" />

                {systemInfo.map((row) => (
                  <Fragment key={row.key}>
                    <span className="text-cyan">{row.key}</span>
                    <span className="min-w-0 break-words text-text-muted">{row.value}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="mb-2.5 font-mono text-sm text-green">{eyebrow}</p>

      <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-text-muted">{description}</p>
      )}
    </div>
  );
}
