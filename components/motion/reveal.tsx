"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the reveal starts. */
  delay?: number;
  /** Vertical offset in px while hidden. */
  y?: number;
  /** Duration in seconds. */
  duration?: number;
};

/**
 * Reveals its children with a fade + rise the first time they enter the
 * viewport. Fully disabled when the user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.75,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Variant used inside a `RevealGroup` to coordinate a staggered cascade.
 * When used on its own (outside a group) the `whileInView` on the parent
 * drives the animation.
 */
export function RevealItem({ children, className }: RevealItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("origin-top", className)}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  /** Delay between each child's reveal. */
  stagger?: number;
};

/**
 * Wraps `RevealItem` children and staggers their entrance with Motion's
 * variant propagation.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: RevealGroupProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}
