import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "../data";
import { SectionHeading } from "./About";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Building: "text-amber border-amber/30 bg-amber/10",
  Stable: "text-green border-green-dim/40 bg-green/10",
  "Learning project": "text-cyan border-cyan/30 bg-cyan/10",
  "Release candidate": "text-purple border-purple/30 bg-purple/10",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="$ ls -la projects/"
          title="Projects"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 4) * 0.06 }}
      style={{ perspective: 800 }}
      className="min-w-0"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.25s ease-out",
        }}
        className="panel flex h-full min-w-0 flex-col rounded-lg p-5 hover:border-blue-dim/60 sm:p-6"
      >
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-text">
            {project.name}
          </h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${STATUS_STYLES[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-bg-panel-2 px-2 py-1 font-mono text-[11px] text-text-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <details className="mb-5 border-t border-border pt-4">
          <summary className="cursor-pointer font-mono text-sm text-green">View project details</summary>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{project.details}</p>
          {!project.stack.length && <p className="mt-2 font-mono text-xs text-text-muted">Stack awaiting confirmation.</p>}
        </details>
        <div className="flex flex-wrap gap-4">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} repository on GitHub`} className="inline-flex min-h-10 items-center gap-1.5 font-mono text-[13px] text-blue hover:text-cyan">
              View repo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[13px] text-blue hover:text-cyan">
              Live demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.evidenceUrl && (
            <a href={project.evidenceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[13px] text-blue hover:text-cyan">
              View lab evidence <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {!project.repoUrl && !project.demoUrl && !project.evidenceUrl && <p className="font-mono text-xs text-text-muted">Public links coming soon.</p>}
        </div>
      </div>
    </motion.div>
  );
}
