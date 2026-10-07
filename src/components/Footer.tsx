import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 font-mono text-xs text-text-dim sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. Built from scratch, with a terminal open.</p>
        <p>
          <span className="text-green">~$</span> exit 0
        </p>
      </div>
    </footer>
  );
}
