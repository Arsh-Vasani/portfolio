import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "@/components/icons";

type ButtonLinkProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  withIcon?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Anchor styled as a button. `primary` is the accent-filled CTA;
 * `ghost` is a quiet bordered alternative.
 */
export function ButtonLink({
  children,
  variant = "primary",
  withIcon = false,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 ease-out",
        variant === "primary" &&
          "bg-accent text-on-accent hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
        variant === "ghost" &&
          "border border-edge text-foreground hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent",
        className,
      )}
      {...props}
    >
      {children}
      {withIcon && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}
