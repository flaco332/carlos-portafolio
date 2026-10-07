import { useEffect, useState } from "react";
import { Menu, TerminalSquare, X } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { profile } from "../data";

const LINKS = [
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#learning", label: "learning" },
  { href: "#badges", label: "badges" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-text">
          <TerminalSquare className="h-4 w-4 text-green" />
          <span className="text-text-muted">~/</span>
          <span className="font-semibold">CR Dev</span>
        </a>

        <ul className="hidden items-center gap-4 font-mono text-[13px] text-text-muted lg:gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-green">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          {profile.github && <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-text-muted transition-colors hover:text-text"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>}
          <a
            href="#contact"
            className="rounded-md border border-blue-dim/50 bg-blue/10 px-3.5 py-1.5 font-mono text-[13px] text-blue transition-colors hover:bg-blue/20"
          >
            contact_me()
          </a>
        </div>

        <button
          className="text-text-muted lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-4 font-mono text-sm text-text-muted">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="hover:text-green">
                  {link.label}
                </a>
              </li>
            ))}
            {profile.github && <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text"
              >
                github ↗
              </a>
            </li>}
          </ul>
        </div>
      )}
    </header>
  );
}
