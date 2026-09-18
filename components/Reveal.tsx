"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "scale" | "blur";

export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "p";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      io.disconnect();
      window.removeEventListener("scroll", onCheck);
      setInView(true);
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            return;
          }
          if (entry.boundingClientRect.top < 0) {
            reveal();
            return;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    const onCheck = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      if (r.top < 0) reveal();
    };
    io.observe(el);
    window.addEventListener("scroll", onCheck, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onCheck);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-variant={variant}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}