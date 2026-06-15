import { Mail, MapPin, Phone, Youtube } from "lucide-react";
import { EMAIL_URL, FACEBOOK_URL } from "@/lib/site-data";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "My Commitment", href: "/#commitment" },
  { label: "Photos", href: "/#photo-gallery" },
  { label: "Videos", href: "/#video" },
  { label: "News", href: "/#news" },
  { label: "Contact", href: EMAIL_URL },
] as const;

const contactItems = [
  { icon: Phone, label: "+880 1700-000000", href: "tel:+8801700000000" },
  { icon: Mail, label: "Send email", href: EMAIL_URL },
  { icon: MapPin, label: "ঢাকা, বাংলাদেশ", href: null },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#d7e2d8] bg-[#f7f1e7] text-[#0b4f3c]">
      <span className="absolute left-[7%] top-16 h-1.5 w-1.5 rounded-full bg-[#7fc6b1]/45" />
      <span className="absolute left-[22%] top-28 h-1 w-1 rounded-full bg-[#d9b85e]/55" />
      <span className="absolute right-[27%] top-24 h-1.5 w-1.5 rounded-full bg-[#7fc6b1]/55" />
      <span className="absolute right-[10%] top-20 h-1 w-1 rounded-full bg-[#d9b85e]/50" />
      <span className="absolute bottom-14 left-[18%] h-1.5 w-1.5 rounded-full bg-[#7fc6b1]/50" />
      <span className="absolute bottom-8 right-[9%] h-1 w-1 rounded-full bg-[#7fc6b1]/55" />

      <div className="relative mx-auto max-w-350 px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-11 md:grid-cols-[1.15fr_0.8fr_1fr] lg:gap-18">
          <section>
            <h2 className="max-w-110 font-bengali text-[34px] font-extrabold leading-[1.2] text-[#064735] sm:text-[42px]">
              মো. আনিসুর রহমান খন্দকার
              <br />
              অনিক
            </h2>
            <p className="mt-7 max-w-125 font-bengali text-[17px] font-medium leading-[1.85] text-[#5b7d70] sm:text-[18px]">
              মানুষের জন্য কাজ, উন্নয়নের জন্য অঙ্গীকার। একটি আধুনিক, স্বচ্ছ
              এবং মানবিক নেতৃত্বের গতিশীল প্রত্যয়ে নিরলস কাজ করে যাচ্ছি।
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bfd4cb] bg-[#e7f0eb] text-[24px] font-bold text-[#0b6049] transition-colors hover:bg-[#d7e8df]"
              >
                f
              </a>
              <a
                href="/#video"
                aria-label="Videos"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bfd4cb] bg-[#e7f0eb] text-[#0b6049] transition-colors hover:bg-[#d7e8df]"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </section>

          <section>
            <h3 className="font-heading text-[18px] font-extrabold uppercase tracking-[0.08em] text-[#d7aa45]">
              Quick Links
            </h3>
            <nav className="mt-7 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 text-[17px] font-semibold text-[#55786b] transition-colors hover:text-[#0b6049]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d7aa45] transition-transform group-hover:scale-125" />
                  {link.label}
                </a>
              ))}
            </nav>
          </section>

          <section>
            <h3 className="font-bengali text-[20px] font-extrabold text-[#d7aa45]">
              যোগাযোগ
            </h3>
            <div className="mt-7 flex flex-col gap-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e2ebe5] text-[#0b6049]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[17px] font-medium text-[#55786b]">
                      {item.label}
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 transition-opacity hover:opacity-75"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4">
                    {content}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-[#d7e2d8] pt-8">
          <div className="flex flex-col gap-5 text-[15px] font-medium text-[#87a69a] sm:flex-row sm:items-center sm:justify-between">
            <p className="font-bengali">
              © ২০২৬ মো. আনিসুর রহমান খন্দকার অনিক। সর্বস্ব সংরক্ষিত।
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#064735]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#d7aa45]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#15935f]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
