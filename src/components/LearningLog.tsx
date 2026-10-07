import { motion } from "framer-motion";
import { learningLog } from "../data";
import { SectionHeading } from "./About";

export default function LearningLog() {
  return (
    <section id="learning" className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="$ git log --oneline learning/" title="Technical learning" description="A learning log of coursework and hands-on practice, with more to explore." />
        <ol className="panel mt-10 space-y-6 rounded-lg p-5 sm:p-8">
          {learningLog.map((entry, index) => (
            <motion.li key={entry.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex gap-4">
              <span className="font-mono text-green" aria-hidden="true">*</span>
              <div>
                <h3 className="font-display font-semibold text-text">{entry.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{entry.note}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
