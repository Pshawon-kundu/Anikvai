import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { featuredAwards, otherAwards } from "@/lib/site-data";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards — Anisur Rahman Khandoker Anik" },
      { name: "description", content: "Awards and honours received by Anisur Rahman Khandoker Anik." },
      { property: "og:title", content: "Awards — Anisur Rahman Khandoker Anik" },
      { property: "og:description", content: "Awards and honours." },
    ],
  }),
  component: AwardsPage,
});

function AwardsPage() {
  return (
    <SiteLayout>
      <PageHeader title="Awards" subtitle="Recognition for service and leadership." />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {featuredAwards.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-sm border border-border bg-card">
              <img src={a.image} alt={a.title} width={1024} height={768} loading="lazy" className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="font-heading text-2xl text-gold">{a.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mb-4 mt-16 text-sm uppercase tracking-[0.25em] text-gold">Other Awards</h2>
        <ul className="divide-y divide-border">
          {otherAwards.map((a) => (
            <li key={a.title}>
              <a href="#" className="flex items-center justify-between gap-4 py-4 text-foreground/90 transition-colors hover:text-gold">
                <span className="flex items-center gap-3"><span className="text-gold">◆</span>{a.title}</span>
                <span className="text-sm text-muted-foreground">{a.year}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SiteLayout>
  );
}