"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { experience } from "@/lib/data";

export function ExperienceTimeline() {
  const scope = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduce) return;

      gsap.set(progress.current, { scaleY: 0 });

      gsap.fromTo(
        progress.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 70%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".exp-entry").forEach((entry) => {
        gsap.fromTo(
          entry,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 84%",
              once: true,
            },
          },
        );
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[7px] top-0 w-px bg-edge"
      />
      <div
        ref={progress}
        aria-hidden="true"
        className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-accent"
      />

      <ol className="space-y-16 md:space-y-20">
        {experience.map((entry) => (
          <li key={entry.id} className="exp-entry relative pl-10 md:pl-16">
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 size-3.5 rounded-full border border-accent bg-background"
            />

            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {entry.start} — {entry.end}
            </p>
            <h3 className="mt-3 text-title font-semibold tracking-tight">
              {entry.company}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">
              {entry.role} · {entry.location}
            </p>
            <p className="mt-5 max-w-prose text-body text-muted">
              {entry.summary}
            </p>

            <ul className="mt-6 space-y-3">
              {entry.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-body text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-3 h-px w-4 shrink-0 bg-accent/70"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-edge px-3 py-1 font-mono text-xs text-faint"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
