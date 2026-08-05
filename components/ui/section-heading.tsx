import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  /** id for the <h2>, used by the section's aria-labelledby. */
  titleId?: string;
};

/**
 * Standard section header: mono index + eyebrow, oversized title, and an
 * optional right-aligned lede on desktop.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  titleId,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-20 md:grid md:grid-cols-12 md:items-end md:gap-8">
      <Reveal className="md:col-span-8">
        <p className="flex items-center gap-3 font-mono text-overline uppercase text-accent">
          <span aria-hidden="true" className="text-faint">
            {index}
          </span>
          <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2
          id={titleId}
          className="mt-5 text-display font-semibold tracking-tight"
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal
          delay={0.1}
          className="mt-5 max-w-prose md:col-span-4 md:justify-self-end md:text-right"
        >
          <p className="text-body text-muted">{lede}</p>
        </Reveal>
      )}
    </div>
  );
}
