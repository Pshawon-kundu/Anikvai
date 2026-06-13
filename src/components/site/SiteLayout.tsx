import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

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

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary py-20 text-center md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <p className="mb-4 text-sm font-bold uppercase text-primary">
          Official Portfolio
        </p>
        <h1 className="font-heading text-4xl font-black text-foreground md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg leading-[1.8] text-muted-foreground">
            {subtitle}
          </p>
        )}
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
    <div className="mb-10 flex items-end justify-between gap-4 border-b border-border pb-5">
      <h2 className="font-heading text-3xl font-black text-foreground md:text-5xl">
        {title}
      </h2>
      {link && linkTo && (
        <Link
          to={linkTo}
          className="shrink-0 text-sm font-bold text-accent transition-colors hover:text-primary"
        >
          {link} -&gt;
        </Link>
      )}
    </div>
  );
}
