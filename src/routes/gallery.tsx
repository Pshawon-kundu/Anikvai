import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { gallery } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Anisur Rahman Khandoker Anik" },
      {
        name: "description",
        content:
          "Media gallery of Anisur Rahman Khandoker Anik's events and work.",
      },
      {
        property: "og:title",
        content: "Gallery - Anisur Rahman Khandoker Anik",
      },
      {
        property: "og:description",
        content: "Media gallery of events and work.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Media Gallery"
        subtitle="Moments from events, community work and milestones."
      />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {gallery.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-sm bg-cover bg-top"
              style={{ backgroundImage: `url(${g.image})` }}
            >
              <img
                src={g.image}
                alt={g.title}
                width={1024}
                height={768}
                loading="eager"
                decoding="sync"
                className="sr-only"
              />
              <div className="aspect-4/5 w-full sm:aspect-video" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                <h2 className="font-heading text-xl text-foreground">
                  {g.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
