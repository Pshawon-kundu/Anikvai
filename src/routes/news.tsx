import { createFileRoute } from "@tanstack/react-router";
import { NewsCard } from "@/components/site/NewsCard";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { newsItems } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News - Anisur Rahman Khandoker Anik" },
      {
        name: "description",
        content: "Latest news and updates from Anisur Rahman Khandoker Anik.",
      },
      { property: "og:title", content: "News - Anisur Rahman Khandoker Anik" },
      { property: "og:description", content: "Latest news and updates." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="News"
        subtitle="Latest updates, announcements and coverage."
      />
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.url} item={item} />
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
