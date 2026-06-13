import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { NewsCard } from "@/components/site/NewsCard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { newsItems } from "@/lib/site-data";
import photoOne from "@/assests/ak.jpg";
import photoTwo from "@/assests/ak8.jpeg";
import photoThree from "@/assests/ak3.jpg";
import photoFour from "@/assests/ak8.jpeg";

const galleryImages = [
  { image: photoOne, position: "50% 32%" },
  { image: photoTwo, position: "50% 18%" },
  { image: photoThree, position: "50% 55%" },
  { image: photoFour, position: "50% 16%" },
] as const;

const marqueeNews = [...newsItems, ...newsItems];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anisur Rahman Khandoker Anik" },
      {
        name: "description",
        content:
          "Official website of Anisur Rahman Khandoker Anik with commitment, news, video, photo gallery and articles.",
      },
    ],
  }),
  component: Index,
});

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-28">
      <p className="font-bengali text-[18px] font-bold text-[#006A4E]">
        {title}
      </p>
      <h2 className="mt-2 font-bengali text-[36px] font-extrabold leading-tight text-[#1f2933] sm:text-[46px]">
        {title}
      </h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-bengali text-[#1f2933]">
      <Header />
      <main id="content">
        <section className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-black">
          <img
            src={photoThree}
            alt="Anisur Rahman Khandoker Anik"
            className="absolute inset-0 h-full w-full object-cover object-[50%_55%]"
          />
          <div className="absolute inset-0 bg-black/48" />
          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-black/10 to-black/88" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-[1400px] flex-col items-center justify-center px-5 text-center text-white sm:px-8 lg:px-10">
            <p className="mb-5 [font-family:Georgia,serif] text-[14px] font-semibold uppercase tracking-[0.55em] text-white/75">
              ANIK
            </p>
            <h1 className="[font-family:Georgia,serif] text-[44px] font-bold uppercase leading-[1.16] tracking-[0.08em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] sm:text-[68px] md:text-[86px] lg:text-[96px]">
              ANISUR RAHMAN
              <br />
              KHANDOKER ANIK
            </h1>
            <a
              href="#commitment"
              className="mt-10 border border-[#D8B756] px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.5em] text-[#D8B756] transition-colors hover:bg-[#D8B756] hover:text-black sm:px-10 sm:text-[15px]"
            >
              VISION FOR A BETTER TOMORROW
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading id="commitment" title="আমার অঙ্গীকার" />
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {[
              "গণতান্ত্রিক মূল্যবোধ রক্ষা এবং মানুষের অধিকার প্রতিষ্ঠায় দৃঢ় ভূমিকা রাখা।",
              "তরুণ প্রজন্মের শিক্ষা, কর্মসংস্থান ও নেতৃত্ব বিকাশে কার্যকর উদ্যোগ নেওয়া।",
              "দেশ, সমাজ ও মানুষের পাশে থেকে সেবা, জবাবদিহি ও ন্যায়ভিত্তিক রাজনীতি এগিয়ে নেওয়া।",
            ].map((item) => (
              <article
                key={item}
                className="border-l-4 border-[#006A4E] bg-white p-7 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
              >
                <p className="text-[20px] font-semibold leading-[1.85] text-[#2f3a42]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeading id="news" title="নিউজ" />
            <div className="mt-9 overflow-hidden rounded-[2rem] bg-[#eef5f2] py-6">
              <div className="news-marquee-track flex w-max gap-6 px-6">
                {marqueeNews.map((item, index) => (
                  <NewsCard key={`${item.url}-${index}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading id="video" title="ভিডিও" />
          <div className="mt-9 grid min-h-[340px] place-items-center bg-[#111] text-center text-white">
            <div>
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/35">
                <Play className="ml-1 h-8 w-8" />
              </span>
              <p className="mt-6 text-[24px] font-extrabold">ভিডিও</p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeading id="photo-gallery" title="ফটো-গ্যালারি" />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((photo, index) => (
                <figure
                  key={photo.image}
                  className="overflow-hidden rounded-sm bg-[#F5F5F5] shadow-[0_10px_24px_rgba(0,0,0,0.07)]"
                >
                  <img
                    src={photo.image}
                    alt={`Anik gallery ${index + 1}`}
                    className="aspect-[4/5] w-full object-cover"
                    style={{ objectPosition: photo.position }}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading id="article" title="আর্টিক্যাল" />
          <article className="mt-9 max-w-4xl border-t border-[#006A4E] pt-8">
            <h3 className="font-bengali text-[30px] font-extrabold leading-tight text-[#1f2933]">
              তারুণ্য, গণতন্ত্র ও দায়িত্বশীল নেতৃত্ব
            </h3>
            <p className="mt-5 text-[19px] font-medium leading-[1.9] text-[#4A4A4A]">
              জনসম্পৃক্ত রাজনীতির মূল শক্তি হলো মানুষের প্রতি দায়বদ্ধতা। শিক্ষা,
              অধিকার, কর্মসংস্থান ও গণতান্ত্রিক চর্চাকে সামনে রেখে এগিয়ে যাওয়াই
              একটি শক্তিশালী সমাজ নির্মাণের প্রধান পথ।
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
