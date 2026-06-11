import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { label: "News", to: "/news" },
  { label: "Awards", to: "/awards" },
  { label: "Appreciations", to: "/appreciations" },
] as const;

const rightLinks = [
  { label: "About", to: "/about" },
  { label: "Contributions", to: "/contributions" },
  { label: "Gallery", to: "/gallery" },
] as const;

const allLinks = [...leftLinks, ...rightLinks];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinkClass =
    "text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Left nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {leftLinks.map((l) => (
            <Link key={l.to} to={l.to} className={navLinkClass} activeProps={{ className: "text-gold" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <Link to="/" className="flex flex-col items-center text-center md:px-8">
          <span className="font-heading text-xl tracking-[0.3em] text-gold">ANIK</span>
          <span className="mt-0.5 hidden text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground sm:block">
            Anisur Rahman Khandoker
          </span>
        </Link>

        {/* Right nav */}
        <nav className="hidden items-center justify-end gap-8 md:flex">
          {rightLinks.map((l) => (
            <Link key={l.to} to={l.to} className={navLinkClass} activeProps={{ className: "text-gold" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="justify-self-end text-foreground md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-lg md:hidden">
          <div className="flex h-20 items-center justify-between px-5">
            <span className="font-heading text-xl tracking-[0.3em] text-gold">ANIK</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-foreground">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {allLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-heading text-3xl text-foreground transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}