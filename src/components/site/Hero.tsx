import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroPortrait from "@/assests/ak8.jpeg";

export function Hero() {
  return (
    <section className="campaign-pattern relative min-h-screen overflow-hidden bg-background pt-24">
      <div className="absolute left-[6%] top-28 h-14 w-14 rounded-2xl border-2 border-primary/20" />
      <div className="absolute bottom-24 right-[8%] h-10 w-10 rounded-full border-2 border-accent/25" />
      <div className="absolute right-[42%] top-36 h-3 w-20 rounded-full bg-accent/80" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1400px] items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm">
            <CheckCircle2 className="h-4 w-4" />
            Youth-focused democratic leadership
          </p>
          <h1 className="font-heading text-4xl font-black leading-[1.08] text-foreground sm:text-5xl lg:text-[72px]">
            Leadership Through Service
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.8] text-muted-foreground">
            Building a Stronger Bangladesh Through Youth Empowerment, Education,
            and Democratic Values
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#vision"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Explore Vision
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-primary bg-white px-7 py-4 text-base font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
            >
              About Anik
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["12+", "Years of Service"],
              ["80+", "Social Programs"],
              ["35+", "Youth Projects"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-white/90 p-4 shadow-sm"
              >
                <p className="text-2xl font-black text-accent">{value}</p>
                <p className="mt-1 text-xs font-semibold leading-snug text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] border border-primary/10 bg-primary/5" />
          <img
            src={heroPortrait}
            alt="Anisur Rahman Khandoker Anik"
            width={1536}
            height={2048}
            loading="eager"
            className="relative aspect-4/5 w-full rounded-2xl object-cover object-top shadow-2xl shadow-slate-900/15"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
            <p className="text-sm font-bold uppercase text-primary">
              Future-ready leadership
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Service, accountability and opportunity for the next generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
