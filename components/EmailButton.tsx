"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EMAIL = "arshvasani9@gmail.com";

const fallbackCopy = () => {
  const ta = document.createElement("textarea");
  ta.value = EMAIL;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  ta.remove();
};

export default function EmailButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = () => {
    try {
      Promise.race([
        navigator.clipboard.writeText(EMAIL),
        new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 300)),
      ]).then((wrote) => {
        if (!wrote) fallbackCopy();
      });
    } catch {
      fallbackCopy();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group-email flex flex-col items-center gap-5">
      <p className="text-xs uppercase tracking-max text-mist/60">
        {copied ? "Copied to clipboard" : "Say hello"}
      </p>
      <Button
        type="button"
        onClick={copy}
        variant="outline"
        size="icon"
        aria-label={copied ? "Email copied" : `Copy email ${EMAIL}`}
        className={cn(
          "email-copy relative h-32 w-32 rounded-full border-mist/80 bg-charcoal font-medium text-mist sm:h-36 sm:w-36",
          copied && "email-copied border-leaf bg-leaf"
        )}
      >
        <span className="relative z-10 text-17 transition-opacity duration-300">
          {copied ? "Copied" : "Email"}
        </span>
        <span
          aria-hidden
          className="email-ring absolute inset-0 rounded-full border border-dashed border-mist/30 opacity-60"
          style={{ transform: copied ? "scale(1.18)" : "scale(0.82)" }}
        />
      </Button>
    </div>
  );
}