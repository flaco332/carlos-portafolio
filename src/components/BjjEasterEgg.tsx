import { useId, useState } from "react";

const BANNER = `████    ███   ███
█   █    █     █
████     █     █
█   █ █  █  █  █
████   ██    ██`;

export default function BjjEasterEgg() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="ml-auto shrink-0" onKeyDown={(event) => {
      if (event.key === "Escape") setOpen(false);
    }}>
      <button
        type="button"
        aria-label="Toggle BJJ easter egg"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="min-h-9 rounded border border-transparent px-2 font-mono text-xs text-text-muted transition-colors hover:border-green/40 hover:text-green"
      >
        bjj()
      </button>
      <div id={panelId} hidden={!open} className="absolute right-4 bottom-4 z-10 max-w-[calc(100%_-_2rem)] rounded-lg border border-green/40 bg-bg-panel-2 p-4 shadow-xl">
        <pre role="img" aria-label="BJJ ASCII banner" className="font-mono text-xs leading-tight text-green">{BANNER}</pre>
        <p className="mt-3 font-mono text-[11px] text-text-muted">Tap. Debug. Repeat.</p>
        <p className="mt-1 font-mono text-[10px] text-text-muted">Brazilian Jiu-Jitsu × programming</p>
      </div>
    </div>
  );
}
