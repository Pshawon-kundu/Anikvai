import { Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { FACEBOOK_URL, FULL_NAME } from "@/lib/site-data";

const socials = [
  { label: "Facebook", href: FACEBOOK_URL, Icon: Facebook },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "X", href: "#", Icon: Twitter },
  { label: "YouTube", href: "#", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-popover py-14 text-center">
      <div className="mx-auto max-w-5xl px-5">
        <p className="font-heading text-2xl tracking-[0.25em] text-gold">ANIK</p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{FULL_NAME}</p>

        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-gold">Follow</p>
        <div className="mt-4 flex items-center justify-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-all hover:border-gold hover:text-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Copyright © 2025 {FULL_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}