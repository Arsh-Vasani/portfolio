"use client";

import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const probe = window.innerHeight * 0.42;
        let current = ITEMS[0].id;
        for (const item of ITEMS) {
          const el = document.getElementById(item.id);
          if (!el) continue;
          const r = el.getBoundingClientRect();
          if (r.top <= probe && r.bottom >= probe) {
            current = item.id;
          }
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-12 w-full max-w-site items-center justify-between gap-4 px-6 sm:px-10 lg:px-30">
        <a
          href="#about"
          onClick={() => setOpen(false)}
          className="font-display text-lg lowercase tracking-open text-ink transition-colors hover:text-cardinal"
        >
          Arsh<span className="hidden sm:inline"> Vasani</span>
        </a>

        <nav aria-label="Sections" className="hidden sm:block">
          <ul className="flex items-center gap-3 sm:gap-6">
            {ITEMS.map((item) => {
              const isActive = item.id === active;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative pb-1 text-2xs uppercase tracking-hi transition-colors duration-300 before:absolute before:inset-x-0 before:-top-3 before:-bottom-3 before:content-[''] sm:text-11 ${
                      isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-leaf transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="relative -my-2 -mr-1 py-2 pr-1 text-11 uppercase tracking-hi text-ink transition-colors duration-300 before:absolute before:-inset-y-3 before:-left-2 before:-right-1 before:content-[''] sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="site-menu"
          className="menu-panel border-t border-ink/10 bg-paper/95 backdrop-blur-md sm:hidden"
        >
          <ul className="mx-auto w-full max-w-site px-6 pb-4 pt-1 sm:px-10">
            {ITEMS.map((item, i) => {
              const isActive = item.id === active;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 border-b border-ink/10 py-3.5 text-13 uppercase tracking-hi transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    <span className="text-ink/40">0{i + 1}</span>
                    <span className="flex-1">{item.label}</span>
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 rounded-full bg-leaf transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
