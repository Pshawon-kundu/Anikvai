import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { socialWork } from "@/lib/site-data";

export const Route = createFileRoute("/contributions")({
  head: () => ({
    meta: [
      { title: "Contributions — Anisur Rahman Khandoker Anik" },
      { name: "description", content: "Social work and community contributions by Anisur Rahman Khandoker Anik." },
      { property: "og:title", content: "Contributions — Anisur Rahman Khandoker Anik" },
      { property: "og:description", content: "Social work and community contributions." },
    ],
  }),
  component: ContributionsPage,
});

function ContributionsPage() {
  return (
    <SiteLayout>
      <PageHeader title="Contributions" subtitle="Building stronger communities, one initiative at a time." />
      <div className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {socialWork.map((s) => (
            <article key={s.title} className="rounded-sm border border-border bg-card p-6 transition-colors hover:border-gold">
              <h2 className="font-heading text-xl text-gold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}