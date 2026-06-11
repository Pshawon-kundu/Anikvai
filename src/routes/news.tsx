import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { news } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Anisur Rahman Khandoker Anik" },
      { name: "description", content: "Latest news and updates from Anisur Rahman Khandoker Anik." },
      { property: "og:title", content: "News — Anisur Rahman Khandoker Anik" },
      { property: "og:description", content: "Latest news and updates." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <SiteLayout>
      <PageHeader title="News" subtitle="Latest updates, announcements and coverage." />
      <div className="mx-auto max-w-4xl px-5 py-16">
        <ul className="divide-y divide-border">
          {news.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="group flex items-center justify-between gap-6 py-5 text-foreground/90 transition-colors hover:text-gold"
              >
                <span className="group-hover:underline">{item}</span>
                <span className="shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SiteLayout>
  );
}