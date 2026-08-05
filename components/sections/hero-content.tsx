"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { profile } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowDown, ArrowUpRight } from "@/components/icons";

type HeroLine = { text: string; emphasis?: string; suffix?: string };

const HERO_LINES: HeroLine[] = [
  { text: "Front-end developer" },
  { text: "crafting interfaces" },
  { text: "that feel", emphasis: "effortless", suffix: "." },
];

export function HeroContent() {
  const scope = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const scrollCue = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.15,
      )
        .fromTo(
          ".hero-line",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.05, stagger: 0.12, ease: "power4.out" },
          0.3,
        )
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 },
          "-=0.55",
        )
        .fromTo(
          scrollCue.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3",
        );

      gsap.to(scope.current, {
        yPercent: -6,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(grid.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      id="top"
      aria-label="Introduction"
      className="grain relative flex min-h-svh flex-col overflow-hidden"
    >
      <div
        ref={grid}
        className="hero-grid absolute inset-0"
        aria-hidden="true"
      />

      <div className="container-page relative flex flex-1 flex-col pt-36 pb-10 md:pt-44">
        <div className="flex flex-1 flex-col justify-center">
          <p className="hero-badge flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent"
            />
            {profile.role}
          </p>

          <h1 className="mt-8 text-hero font-semibold tracking-tight text-foreground">
            {HERO_LINES.slice(0, 2).map((line) => (
              <span key={line.text} className="block overflow-hidden">
                <span className="hero-line block will-change-transform">
                  {line.text}
                </span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <span className="hero-line block will-change-transform">
                {HERO_LINES[2].text}{" "}
                {HERO_LINES[2].emphasis && (
                  <em className="font-medium italic text-accent">
                    {HERO_LINES[2].emphasis}
                  </em>
                )}
                {HERO_LINES[2].suffix}
              </span>
            </span>
          </h1>

          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:items-end">
            <div className="hero-fade md:col-span-6">
              <p className="max-w-prose text-body text-muted">
                {profile.about[0]}
              </p>
            </div>
            <div className="hero-fade flex flex-wrap items-center gap-4 md:col-span-6 md:justify-end">
              <ButtonLink href="#projects" withIcon>
                View my work
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-edge pt-6 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="hero-fade flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="underline-link w-fit font-mono text-xs text-muted transition-colors duration-300 hover:text-foreground"
            >
              {profile.email}
            </a>
            <span className="font-mono text-xs text-faint">
              {profile.location}
            </span>
          </div>
          <div
            ref={scrollCue}
            className="flex items-center gap-3 font-mono text-xs text-faint"
          >
            <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
            Scroll to explore
          </div>
        </div>
      </div>

      <a
        href={profile.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="side-link"
      >
        bold.pro
        <ArrowUpRight className="size-3.5" />
      </a>
    </section>
  );
}
