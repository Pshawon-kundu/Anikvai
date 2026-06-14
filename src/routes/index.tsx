import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { NewsCard } from "@/components/site/NewsCard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { newsItems } from "@/lib/site-data";
import photoOne from "@/assests/ak.jpg";
import photoTwo from "@/assests/ak8.jpeg";
import photoThree from "@/assests/ak3.jpg";
import photoFour from "@/assests/ak5.jpeg";
import photoFive from "@/assests/ak6.jpeg";
import photoSix from "@/assests/ak7.jpg";
import photoSeven from "@/assests/ak8.jpeg";
import photoEight from "@/assests/ak9.jpg";
import photoNine from "@/assests/download.jpg";
import photoTen from "@/assests/WhatsApp Image 2026-06-14 at 2.20.22 AM.jpeg";
import photoEleven from "@/assests/WhatsApp Image 2026-06-14 at 2.21.51 AM.jpeg";
import videoThumbOne from "@/assests/ak.jpg";
import videoThumbTwo from "@/assests/ak3.jpg";
import videoThumbThree from "@/assests/ak5.jpeg";
import videoThumbFour from "@/assests/ak8.jpeg";
import videoThumbFive from "@/assests/download.jpg";

const galleryImages = [
  photoOne,
  photoTwo,
  photoThree,
  photoFour,
  photoFive,
  photoSix,
  photoSeven,
  photoEight,
  photoNine,
  photoTen,
  photoEleven,
] as const;

const marqueeNews = [...newsItems, ...newsItems];

const videoLinks = [
  {
    url: "https://www.facebook.com/share/v/1GwXU5i6ZL/?mibextid=wwXIfr",
    thumb: videoThumbOne,
    title: "ভিডিও 1",
  },
  {
    url: "https://www.facebook.com/share/v/18StAY1swG/?mibextid=wwXIfr",
    thumb: videoThumbTwo,
    title: "ভিডিও 2",
  },
  {
    url: "https://www.facebook.com/share/v/1KXgC6A5xo/?mibextid=wwXIfr",
    thumb: videoThumbThree,
    title: "ভিডিও 3",
  },
  {
    url: "https://www.facebook.com/share/r/192cySnQMQ/?mibextid=wwXIfr",
    thumb: videoThumbFour,
    title: "ভিডিও 4",
  },
  {
    url: "https://www.facebook.com/share/r/18xyY5eQHx/?mibextid=wwXIfr",
    thumb: videoThumbFive,
    title: "ভিডিও 5",
  },
] as const;

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

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-350 flex-col items-center justify-center px-5 pb-12 text-center text-white sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
            <h1 className="font-[Georgia,serif] text-[44px] font-bold uppercase leading-[1.16] tracking-[0.08em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] sm:text-[68px] md:text-[86px] lg:text-[96px]">
              ANISUR RAHMAN
              <br />
              KHANDOKER ANIK
            </h1>
            <a
              href="#commitment"
              className="mt-8 inline-flex items-center justify-center border border-[#d11f3a] bg-linear-to-r from-[#d11f3a] to-[#0a7a43] px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.5em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.28)] sm:px-10 sm:text-[15px]"
            >
              VISION FOR A BETTER TOMORROW
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
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
          <div className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
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

        <section className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading id="video" title="ভিডিও" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {videoLinks.map((video) => (
              <a
                key={video.url}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[1.5rem] border border-[#dbe7e2] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.1)]"
              >
                <div className="relative">
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#006A4E] shadow-sm">
                    <Play className="ml-0.5 h-5 w-5" />
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-bengali text-[18px] font-bold text-white drop-shadow">
                      {video.title}
                    </p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="break-all text-[13px] leading-[1.6] text-[#4A4A4A]">
                    {video.url}
                  </p>
                  <span className="mt-3 inline-flex items-center text-[14px] font-semibold text-[#006A4E]">
                    Facebook এ খুলুন
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeading id="photo-gallery" title="ফটো-গ্যালারি" />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryImages.map((photo, index) => (
                <figure
                  key={`${photo}-${index}`}
                  className="h-72 overflow-hidden rounded-sm bg-[#F5F5F5] bg-cover bg-center shadow-[0_10px_24px_rgba(0,0,0,0.07)] sm:h-80 lg:h-72 xl:h-80"
                  style={{ backgroundImage: `url(${photo})` }}
                >
                  <img
                    src={photo}
                    alt={`Anik gallery ${index + 1}`}
                    className="sr-only"
                    loading="eager"
                    decoding="sync"
                    fetchPriority={index < 4 ? "high" : "auto"}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-350 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
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
