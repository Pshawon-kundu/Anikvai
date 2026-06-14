import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoImage from "@/assests/bnp c.jpeg";
import rightImage from "@/assests/download.jpg";

const navItems = [
  { label: "আমার অঙ্গীকার", href: "#commitment" },
  { label: "নিউজ", href: "#news" },
  { label: "ভিডিও", href: "#video" },
  { label: "ফটো-গ্যালারি", href: "#photo-gallery" },
  { label: "আর্টিক্যাল", href: "#article" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#006A4E] text-white">
      <div className="mx-auto flex h-[100px] max-w-[1400px] items-center justify-between px-5 sm:px-8 xl:px-10">
        <Link to="/" className="flex shrink-0 items-center">
          <span className="flex h-[62px] w-[62px] overflow-hidden rounded-full bg-white p-1 shadow-sm">
            <img
              src={logoImage}
              alt="বিএনপি লোগো"
              className="h-full w-full rounded-full object-contain object-center"
            />
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-bengali text-[17px] font-bold leading-none text-white transition-opacity hover:opacity-80"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <span className="flex h-[46px] w-[46px] overflow-hidden rounded-full bg-white p-1 shadow-[0_7px_18px_rgba(0,0,0,0.16)]">
            <img
              src={rightImage}
              alt="Header accent"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </span>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#006A4E] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#006A4E] px-5 py-7 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <span className="flex h-12 w-12 overflow-hidden rounded-full bg-white p-1 shadow-sm">
              <img
                src={logoImage}
                alt="বিএনপি লোগো"
                className="h-full w-full rounded-full object-contain object-center"
              />
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#006A4E]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/20 py-4 font-bengali text-2xl font-bold"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
