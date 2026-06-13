import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { appreciations } from "@/lib/site-data";

export const Route = createFileRoute("/appreciations")({
  head: () => ({
    meta: [
      { title: "Appreciations - Anisur Rahman Khandoker Anik" },
      {
        name: "description",
        content:
          "Certificates and appreciations received by Anisur Rahman Khandoker Anik.",
      },
      {
        property: "og:title",
        content: "Appreciations - Anisur Rahman Khandoker Anik",
      },
      {
        property: "og:description",
        content: "Certificates and appreciations.",
      },
    ],
  }),
  component: AppreciationsPage,
});

function AppreciationsPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Appreciations"
        subtitle="Tokens of gratitude and recognition."
      />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appreciations.map((c, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {c.label}
                </p>
                <h2 className="mt-2 font-heading text-lg text-foreground">
                  {c.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
