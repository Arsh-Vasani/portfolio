"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "@/components/icons";
import { getTheme, setTheme, subscribeTheme } from "@/lib/theme";

/**
 * Light/dark toggle. Dark is the default experience; the choice is
 * persisted to localStorage and mirrored by the inline head script.
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getTheme,
    () => "dark" as const,
  );
  const dark = theme === "dark";

  const toggle = () => setTheme(dark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex size-10 items-center justify-center rounded-full border border-edge text-muted transition-colors duration-300 hover:border-accent/60 hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex"
        >
          {dark ? <Moon className="size-4.5" /> : <Sun className="size-4.5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
