import { ExternalLink } from "lucide-react";
import type { NewsItem } from "@/lib/site-data";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group block w-[min(86vw,21rem)] flex-none overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={item.image}
          alt={item.title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/55 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
          <span className="rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold backdrop-blur-sm">
            {item.source}
          </span>
          <ExternalLink className="h-5 w-5 shrink-0 opacity-90" />
        </div>
      </div>

      <div className="space-y-4 p-5">
        <h3 className="line-clamp-3 text-[1.15rem] font-black leading-[1.45] text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </h3>
        <div className="flex items-center justify-between gap-4 border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
          <span>Read more</span>
          <span className="text-primary">Open article</span>
        </div>
      </div>
    </a>
  );
}
