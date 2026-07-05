import Image from "next/image";
import type { PortfolioItem } from "@/lib/data/portfolio";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      {item.image ? (
        <div className="group relative aspect-[4/3]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-float absolute bottom-3 left-1/2 flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-ink shadow-lg backdrop-blur transition-colors group-hover:bg-brand-ink group-hover:text-white"
            >
              כניסה לאתר
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {item.mobileImage && (
            <div className="absolute bottom-3 left-3 w-16 overflow-hidden rounded-lg border-2 border-white shadow-lg md:w-20">
              <div className="relative aspect-[9/19.5]">
                <Image
                  src={item.mobileImage}
                  alt={`${item.name} — תצוגה במובייל`}
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-yellow/40 via-brand-blue/30 to-brand-teal/30">
          <span className="text-sm font-medium text-brand-muted">
            {item.placeholder ? "בקרוב" : item.name}
          </span>
        </div>
      )}
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
          {item.category}
        </span>
        <h3 className="mt-1 text-lg font-bold">{item.name}</h3>
        <p className="mt-2 text-sm text-brand-muted">{item.summary}</p>
      </div>
    </div>
  );
}
