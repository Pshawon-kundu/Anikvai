import logoImage from "@/assests/ak7.jpg";

const footerLinks = [
  { label: "আমার অঙ্গীকার", href: "#commitment" },
  { label: "নিউজ", href: "#news" },
  { label: "ভিডিও", href: "#video" },
  { label: "ফটো-গ্যালারি", href: "#photo-gallery" },
  { label: "আর্টিক্যাল", href: "#article" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#006A4E] text-white">
      <div className="mx-auto flex min-h-105 max-w-350 flex-col justify-center px-5 py-14 sm:px-8 lg:px-10 lg:py-0">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr_0.8fr]">
          <section className="max-w-90">
            <div className="mb-8 h-px w-43.75 bg-white" />
            <h2 className="font-bengali text-[34px] font-extrabold leading-tight">
              আনিসুর রহমান
              <br />
              খন্দকার আনিক
            </h2>
            <p className="mt-7 font-bengali text-[18px] font-medium leading-[1.85] text-white/92">
              “দেশের মানুষ, গণতন্ত্র ও তরুণ প্রজন্মের অধিকার প্রতিষ্ঠাই আমার
              রাজনীতির প্রধান অঙ্গীকার।”
            </p>
          </section>

          <section className="flex justify-center">
            <div className="flex h-57.5 w-57.5 items-center justify-center rounded-full bg-white p-4 shadow-sm sm:h-67.5 sm:w-67.5">
              <img
                src={logoImage}
                alt="Anisur Rahman Khandoker Anik"
                className="h-full w-full rounded-full object-cover object-top"
              />
            </div>
          </section>

          <section className="justify-self-start lg:justify-self-end">
            <h3 className="font-bengali text-[24px] font-extrabold">মেনু</h3>
            <nav className="mt-7 flex flex-col gap-5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bengali text-[18px] font-semibold text-white/92 transition-opacity hover:opacity-75"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </section>
        </div>

        <div className="mt-14 h-px w-full bg-white/85" />
      </div>
    </footer>
  );
}
