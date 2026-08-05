import Link from "next/link";
import { profile } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-svh flex-col items-start justify-center py-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-5 text-display font-semibold tracking-tight">
        This page wandered off.
      </h1>
      <p className="mt-5 max-w-prose text-body text-muted">
        The link you followed doesn&apos;t point anywhere on this site. Let&apos;s
        get you back to the work.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          Back home
        </Link>
        <Link
          href={`mailto:${profile.email}`}
          className="rounded-full border border-edge px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent/60 hover:text-accent"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
