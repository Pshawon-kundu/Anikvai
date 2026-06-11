import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-data";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <h1 className="max-w-5xl font-heading text-4xl font-bold uppercase leading-tight tracking-[0.08em] text-foreground sm:text-6xl md:text-7xl">
          {heroSlides[active].title}
        </h1>
        <span className="mt-6 inline-block border border-gold px-6 py-2 text-xs uppercase tracking-[0.3em] text-gold">
          {heroSlides[active].subtitle}
        </span>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-gold" : "w-2 bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}