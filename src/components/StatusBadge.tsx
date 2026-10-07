type Props = {
  label: string;
  className?: string;
};

export default function StatusBadge({ label, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-green-dim/40 bg-green/10 px-3 py-1.5 font-mono text-xs text-green ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
      </span>
      {label}
    </div>
  );
}
