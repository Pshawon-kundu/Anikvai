import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "@tanstack/react-router";

export function SiteLayout({
  children,
  pad = true,
}: {
  children: ReactNode;
  pad?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className={pad ? "pt-20" : ""}>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b border-border py-20 text-center md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="font-heading text-4xl uppercase tracking-[0.15em] text-foreground md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  link,
  linkTo,
}: {
  title: string;
  link?: string;
  linkTo?: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 border-b border-border pb-4">
      <h2 className="font-heading text-2xl uppercase tracking-[0.15em] text-foreground md:text-4xl">
        {title}
      </h2>
      {link && linkTo && (
        <Link
          to={linkTo}
          className="shrink-0 text-xs uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-70"
        >
          {link} →
        </Link>
      )}
    </div>
  );
}