import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { credentialTopics, type Credential } from "../data";
import { SectionHeading } from "./About";
import CredlyBadge from "./CredlyBadge";

// Literal class strings (not built via template interpolation) so Tailwind's
// scanner can find them at build time — same pattern used in Skills.tsx and
// Projects.tsx. Cycled per topic, index 0-2, kept to cyan/green/blue per the
// portfolio's accent palette.
const TOPIC_ACCENTS = [
  {
    border: "hover:border-cyan/50",
    shadow: "hover:shadow-[0_0_28px_-14px_var(--color-cyan)]",
    icon: "text-cyan/60",
    link: "text-cyan",
  },
  {
    border: "hover:border-green-dim/70",
    shadow: "hover:shadow-[0_0_28px_-14px_var(--color-green)]",
    icon: "text-green/60",
    link: "text-green",
  },
  {
    border: "hover:border-blue-dim/70",
    shadow: "hover:shadow-[0_0_28px_-14px_var(--color-blue)]",
    icon: "text-blue/60",
    link: "text-blue",
  },
] as const;

export default function Badges() {
  return (
    <section id="badges" className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="$ ./credentials --group-by-topic"
          title="Certifications & Badges"
          description="Hands-on credentials earned through Google Cloud labs and learning paths."
        />

        <div className="mt-10 space-y-10 sm:mt-12">
          {credentialTopics.map((topicGroup, topicIndex) => {
            const accent = TOPIC_ACCENTS[topicIndex % TOPIC_ACCENTS.length];
            return (
              <div key={topicGroup.id}>
                <div className="mb-4 flex items-baseline gap-3">
                  <h3 className="font-display text-lg font-semibold text-text">
                    {topicGroup.topic}
                  </h3>
                  <span className="h-px flex-1 bg-border" />
                </div>
                {topicGroup.description && (
                  <p className="-mt-2 mb-4 text-sm text-text-muted">
                    {topicGroup.description}
                  </p>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {topicGroup.badges.map((badge, i) => (
                    <BadgeCard
                      key={badge.title}
                      badge={badge}
                      accent={accent}
                      delay={(i % 3) * 0.06}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BadgeCard({
  badge,
  accent,
  delay,
}: {
  badge: Credential;
  accent: (typeof TOPIC_ACCENTS)[number];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={`panel group flex min-w-0 flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 ${accent.border} ${accent.shadow}`}
    >
      <div className="flex items-center justify-center border-b border-border bg-bg-panel-2 p-5">
        <a href={badge.credentialUrl} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${badge.title} on Credly`} className="block aspect-square w-full max-w-[224px] overflow-hidden rounded-lg bg-white p-4 transition-transform hover:scale-[1.02]">
          <CredlyBadge imageFile={badge.imageFile} title={badge.title} />
        </a>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2 font-mono text-[11px] text-text-dim">
          <span>{badge.issuer}</span>
          <span aria-hidden="true">·</span>
          <span>{badge.type}</span>
        </div>

        <h4 className="font-display text-sm font-semibold leading-snug text-text">
          {badge.title}
        </h4>

        {badge.issueDate && (
          <p className="font-mono text-[11px] text-text-dim">
            Issued {badge.issueDate}
          </p>
        )}

        {badge.credentialUrl && (
          <a
            href={badge.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${badge.title} credential on Credly`}
            className={`mt-auto inline-flex min-h-11 w-fit items-center gap-1.5 pt-2 font-mono text-[12px] transition-colors hover:text-text ${accent.link}`}
          >
            View credential
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
