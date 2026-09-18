import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

export type Work = {
  name: string;
  tags: string;
  year: string;
  description: string;
  media: ReactNode;
  note: string;
  href?: string;
};

export default function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <article className="work-card group relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      <span
        aria-hidden
        className="absolute -top-2 left-0 hidden select-none text-avatar-sm font-display text-cardinal/15 lg:block"
      >
        0{index + 1}
      </span>

      <div className="work-media work-glass relative aspect-4/3 overflow-hidden rounded-2xl border border-ink/10 bg-fog shadow-card">
        {work.media}
        <Badge className="absolute bottom-3 left-3 z-10 rounded-full bg-charcoal/85 px-3 py-1 text-11 font-medium tracking-wide text-mist backdrop-blur-sm">
          {work.note}
        </Badge>
      </div>

      <div className="flex flex-col justify-center pt-4 lg:pt-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-ink/10 pb-5">
          <h3 className="text-17 font-medium tracking-wide text-ink sm:text-xl">
            {work.name}
          </h3>
          <span className="flex-1" />
          <span className="wave-hold cursor-default text-15 text-ash sm:text-base">
            {work.tags}
            <WavyLine />
          </span>
          <span className="text-15 tabular-nums text-ash sm:text-base">
            {work.year}
          </span>
        </div>
        <p className="mt-5 max-w-xl text-15 leading-relaxed text-ash sm:text-base">
          {work.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-13 uppercase tracking-hi text-ash transition-colors duration-300 group-hover:text-ink">
          {work.href ? (
            <a
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2"
            >
              <span className="wave-hold">
                View live site
                <WavyLine />
              </span>
              <svg
                width="26"
                height="12"
                viewBox="0 0 26 12"
                fill="none"
                className="size-auto transition-transform duration-500 group-hover:translate-x-1.5"
              >
                <path
                  d="M0 6h24M20 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <>
              Case study coming soon
              <svg
                width="26"
                height="12"
                viewBox="0 0 26 12"
                fill="none"
                className="size-auto transition-transform duration-500 group-hover:translate-x-1.5"
              >
                <path
                  d="M0 6h24M20 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

function WavyLine() {
  return (
    <svg viewBox="0 0 120 12" aria-hidden>
      <path d="M0 8 C10 3 18 12 26 7 C34 3 42 11 50 7 C58 3 66 11 74 7 C82 3 90 11 98 7 C106 3 114 11 120 6" />
    </svg>
  );
}