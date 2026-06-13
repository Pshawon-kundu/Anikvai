import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import logoImage from "@/assests/Khaleda Ziya, Tarek Ziya, Ziaur Rahman Logo HD Photo PNG - বিএনপি লগো ফটো Top 20 pngTom - BNP Logo Photo -4.png";

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
        <Link to="/" className="flex shrink-0 items-center gap-4 lg:flex-row-reverse lg:gap-5">
          <span className="flex h-[62px] w-[62px] overflow-hidden rounded-full bg-white p-1 shadow-sm">
            <img
              src={logoImage}
              alt="বিএনপি লোগো"
              className="h-full w-full rounded-full object-contain object-center"
            />
          </span>
          <span className="hidden text-left leading-tight sm:block lg:text-right">
            <span className="block font-bengali text-[18px] font-extrabold tracking-[0.01em] sm:text-[20px] lg:text-[22px]">
              আনিসুর রহমান
            </span>
            <span className="block font-bengali text-[18px] font-extrabold tracking-[0.01em] sm:text-[20px] lg:text-[22px]">
              খন্দকার আনিক
            </span>
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

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            className="inline-flex h-[46px] items-center gap-2 rounded-full bg-white px-5 font-bengali text-[15px] font-bold text-[#006A4E] shadow-[0_7px_18px_rgba(0,0,0,0.16)]"
          >
            <Globe2 className="h-4 w-4" />
            বাংলা
            <ChevronDown className="h-4 w-4" />
          </button>
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
            <span className="font-bengali text-2xl font-extrabold">আনিক</span>
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
