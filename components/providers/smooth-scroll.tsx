"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps the app in a Lenis smooth-scroll instance and drives its rAF loop
 * from the GSAP ticker so ScrollTrigger and Lenis stay in perfect sync.
 *
 * When the user prefers reduced motion, smooth scrolling is disabled and
 * anchor links fall back to native browser behaviour.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      ScrollTrigger.refresh();
      return;
    }

    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href^="#"]') as
        | HTMLAnchorElement
        | null;
      if (!anchor) return;

      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      const el = document.querySelector(id);
      if (!el) return;

      // Let the skip link behave natively so keyboard focus moves to <main>.
      if (anchor.classList.contains("skip-link")) return;

      event.preventDefault();
      lenisRef.current?.lenis?.scrollTo(el as HTMLElement, {
        offset: -72,
        duration: 1.1,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [reduce]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        smoothWheel: !reduce,
      }}
    >
      {children}
    </ReactLenis>
  );
}
