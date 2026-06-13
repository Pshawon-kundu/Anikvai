import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/SiteLayout";
import { aboutBioLong } from "@/lib/site-data";
import aboutImg from "@/assests/ak8.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Anisur Rahman Khandoker Anik" },
      {
        name: "description",
        content:
          "Biography of Anisur Rahman Khandoker Anik, leader and community builder.",
      },
      { property: "og:title", content: "About - Anisur Rahman Khandoker Anik" },
      {
        property: "og:description",
        content: "Biography of a leader and community builder.",
      },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader title="About" />
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:grid-cols-2">
        <img
          src={aboutImg}
          alt="Anisur Rahman Khandoker Anik"
          width={1024}
          height={1280}
          loading="lazy"
          className="aspect-4/5 w-full rounded-sm object-cover object-top"
        />
        <div className="space-y-5">
          {aboutBioLong.map((p, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
