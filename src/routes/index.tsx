import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SiteLayout";
import {
  aboutBio,
  appreciations,
  featuredAwards,
  gallery,
  news,
  otherAwards,
  socialWork,
} from "@/lib/site-data";
import aboutImg from "@/assests/ak4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anisur Rahman Khandoker Anik — Leader & Community Builder" },
      {
        name: "description",
        content:
          "Anisur Rahman Khandoker Anik — leader, philanthropist and community builder. News, awards, appreciations and social work.",
      },
      { property: "og:title", content: "Anisur Rahman Khandoker Anik" },
      {
        property: "og:description",
        content: "Leader, philanthropist and community builder.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      <div className="mx-auto max-w-7xl space-y-28 px-5 py-24">
        {/* News */}
        <section>
          <SectionHeading title="News" link="All News" linkTo="/news" />
          <ul className="divide-y divide-border">
            {news.map((item) => (
              <li key={item}>
                <Link
                  to="/news"
                  className="group flex items-center justify-between gap-6 py-4 text-foreground/90 transition-colors hover:text-gold"
                >
                  <span className="truncate group-hover:underline">{item}</span>
                  <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Awards */}
        <section>
          <SectionHeading title="Awards" link="All Awards" linkTo="/awards" />
          <div className="grid gap-8 md:grid-cols-2">
            {featuredAwards.map((a) => (
              <article
                key={a.title}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <img
                  src={a.image}
                  alt={a.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl text-gold">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <h3 className="mb-4 mt-12 text-sm uppercase tracking-[0.25em] text-gold">
            Other Awards
          </h3>
          <ul className="divide-y divide-border">
            {otherAwards.map((a) => (
              <li key={a.title}>
                <Link
                  to="/awards"
                  className="flex items-center justify-between gap-4 py-3 text-foreground/90 transition-colors hover:text-gold"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-gold">◆</span>
                    {a.title}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {a.year}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Appreciations */}
        <section>
          <SectionHeading
            title="Appreciations"
            link="Explore More"
            linkTo="/appreciations"
          />
          <div className="no-scrollbar -mx-5 flex gap-6 overflow-x-auto px-5 pb-2">
            {appreciations.map((c, i) => (
              <article
                key={i}
                className="group w-72 shrink-0 overflow-hidden rounded-sm border border-border bg-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </p>
                  <h3 className="mt-2 font-heading text-lg text-foreground">
                    {c.title}
                  </h3>
                  <Link
                    to="/appreciations"
                    className="mt-4 inline-block border border-gold px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                  >
                    View
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="grid items-center gap-12 md:grid-cols-2">
          <img
            src={aboutImg}
            alt="Anisur Rahman Khandoker Anik"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-4/5 w-full rounded-sm object-cover"
          />
          <div>
            <h2 className="font-heading text-3xl uppercase tracking-[0.12em] text-foreground md:text-4xl">
              About
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {aboutBio}
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-gold hover:opacity-70"
            >
              Read more →
            </Link>
          </div>
        </section>

        {/* Social Work */}
        <section>
          <SectionHeading
            title="Social Work"
            link="Explore More"
            linkTo="/contributions"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {socialWork.map((s) => (
              <Link
                key={s.title}
                to="/contributions"
                className="group rounded-sm border border-border bg-card p-6 transition-colors hover:border-gold"
              >
                <h3 className="font-heading text-xl text-gold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <span className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-foreground/70 group-hover:text-gold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Media Gallery */}
        <section>
          <SectionHeading
            title="Media Gallery"
            link="Explore More"
            linkTo="/gallery"
          />
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {gallery.map((g) => (
              <Link
                key={g.title}
                to="/gallery"
                className="group relative overflow-hidden rounded-sm"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-background/90 to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="font-heading text-lg text-foreground">
                    {g.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
