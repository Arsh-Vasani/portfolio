"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { navigation, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/providers/theme-toggle";
import { Close, Menu } from "@/components/icons";

function Monogram() {
  return (
    <a
      href="#top"
      className="font-mono text-sm font-medium tracking-tight text-foreground"
      aria-label="Back to top"
    >
      AV<span className="text-accent">.</span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      firstLinkRef.current?.focus();
    } else if (wasOpen.current) {
      toggleRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-edge/70 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Monogram />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="underline-link text-sm text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-xs text-faint md:flex">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent"
            />
            {profile.location}
          </span>
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full border border-edge text-foreground transition-colors duration-300 hover:border-accent/60 md:hidden"
          >
            {open ? (
              <Close className="size-4.5" />
            ) : (
              <Menu className="size-4.5" />
            )}
          </button>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col border-t border-edge bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav
              aria-label="Mobile"
              className="container-page flex flex-1 flex-col justify-center gap-2 py-8"
            >
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-edge py-5 text-display font-semibold tracking-tight text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-page pb-8 font-mono text-xs text-muted">
              {profile.email} · {profile.location}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
