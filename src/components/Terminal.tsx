import { useEffect, useRef, useState } from "react";
import BjjEasterEgg from "./BjjEasterEgg";

type Line = {
  command: string;
  output: string[];
  isEasterEgg?: boolean;
};
//
const LINES: Line[] = [
  {
    command: "whoami",
    output: ["carlos — systems engineering student, builder"],
  },
  {
    command: "ls projects/",
    output: [
      "onca/  packet-tracer-security/  mini-grep/  security-labs/  portfolio/",
    ],
  },
  {
    command: "cat skills.txt",
    output: ["linux · networking · python · cloud · react"],
  },
  {
    command: "sudo future",
    output: [
      "[sudo] password for carlos: ********",
      "Access granted.",
      "Compiling ambition ... done",
      "Deploying future.exe ... done",
    ],
    isEasterEgg: true,
  },
];

const TYPE_SPEED = 32; // ms per character
const LINE_PAUSE = 650; // pause after a command's output finishes
const LOOP_PAUSE = 2400; // pause before the terminal resets and loops

type Phase = "typing-command" | "typing-output" | "line-pause" | "loop-pause";

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [outputIndex, setOutputIndex] = useState(0);
  const [commandText, setCommandText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [completedLines, setCompletedLines] = useState<Line[]>([]);
  const [phase, setPhase] = useState<Phase>("typing-command");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = LINES[lineIndex];
    let timeout: number;

    if (phase === "typing-command") {
      if (commandText.length < current.command.length) {
        timeout = window.setTimeout(() => {
          setCommandText(current.command.slice(0, commandText.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = window.setTimeout(() => setPhase("typing-output"), 300);
      }
      return () => window.clearTimeout(timeout);
    }

    if (phase === "typing-output") {
      const targetLine = current.output[outputIndex] ?? "";
      if (outputText.length < targetLine.length) {
        timeout = window.setTimeout(() => {
          setOutputText(targetLine.slice(0, outputText.length + 1));
        }, TYPE_SPEED / 1.6);
      } else if (outputIndex < current.output.length - 1) {
        timeout = window.setTimeout(() => {
          setOutputIndex((i) => i + 1);
          setOutputText("");
        }, 220);
      } else {
        timeout = window.setTimeout(() => setPhase("line-pause"), LINE_PAUSE);
      }
      return () => window.clearTimeout(timeout);
    }

    if (phase === "line-pause") {
      timeout = window.setTimeout(() => {
        setCompletedLines((lines) => [...lines, current]);
        if (lineIndex < LINES.length - 1) {
          setLineIndex((i) => i + 1);
          setCommandText("");
          setOutputText("");
          setOutputIndex(0);
          setPhase("typing-command");
        } else {
          setPhase("loop-pause");
        }
      }, 80);
      return () => window.clearTimeout(timeout);
    }

    if (phase === "loop-pause") {
      timeout = window.setTimeout(() => {
        setCompletedLines([]);
        setLineIndex(0);
        setCommandText("");
        setOutputText("");
        setOutputIndex(0);
        setPhase("typing-command");
      }, LOOP_PAUSE);
      return () => window.clearTimeout(timeout);
    }
  }, [phase, commandText, outputText, lineIndex, outputIndex]);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight });
  }, [completedLines, commandText, outputText]);

  const current = LINES[lineIndex];
  const isTypingCommand = phase === "typing-command";
  const isEasterEgg = current.isEasterEgg;

  return (
    <div className="panel relative w-full min-w-0 max-w-xl overflow-hidden rounded-lg shadow-2xl shadow-black/40">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-bg-panel-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 min-w-0 truncate font-mono text-xs text-text-dim">
          carlos@udlap:~$
        </span>
        <BjjEasterEgg />
      </div>

      {/* body */}
      <div
        ref={containerRef}
        className="h-64 overflow-hidden px-4 py-3 font-mono text-[13px] leading-relaxed sm:text-sm"
      >
        {completedLines.map((line, idx) => (
          <div key={idx} className="mb-2.5">
            <p>
              <span className="text-green">➜</span>{" "}
              <span className="text-blue">~</span>{" "}
              <span className="text-text">{line.command}</span>
            </p>
            {line.output.map((out, i) => (
              <p
                key={i}
                className={
                  line.isEasterEgg
                    ? "pl-4 text-cyan"
                    : "pl-4 text-text-muted"
                }
              >
                {out}
              </p>
            ))}
          </div>
        ))}

        {phase !== "loop-pause" && (
  <div>
    <p>
      <span className="text-green">➜</span>{" "}
      <span className="text-blue">~</span>{" "}
      <span
        className={
          isEasterEgg && !isTypingCommand
            ? "text-amber"
            : "text-text"
        }
      >
        {commandText}
      </span>

      {isTypingCommand && <span className="caret" />}
    </p>

    {phase !== "typing-command" &&
      current.output.slice(0, outputIndex + 1).map((_, i) => {
        const isLast = i === outputIndex;
        const text = isLast ? outputText : current.output[i];

        return (
          <p
            key={i}
            className={
              isEasterEgg
                ? "pl-4 text-cyan"
                : "pl-4 text-text-muted"
            }
          >
            {text}
            {isLast && phase === "typing-output" && (
              <span className="caret" />
            )}
          </p>
        );
      })}
  </div>
)}
      </div>
    </div>
  );
}
