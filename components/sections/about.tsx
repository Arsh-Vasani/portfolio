import { Reveal } from "@/components/motion/reveal";
import { profile } from "@/lib/data";

const facts = [
  { label: "Based in", value: "Ahmedabad, India" },
  { label: "Experience", value: "4+ years, since 2022" },
  { label: "Currently", value: "Front-End Developer @ WrapPixel" },
  { label: "Focus", value: "React · Next.js · Responsive Design" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-edge">
      <div className="container-page grid gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-36">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-overline uppercase text-accent">
              01 / About
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              id="about-title"
              className="mt-6 max-w-xl text-display font-semibold tracking-tight"
            >
              I build interfaces that feel{" "}
              <span className="italic text-accent">considered</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 space-y-5">
              <p className="max-w-prose text-body text-muted">
                {profile.about[0]}
              </p>
              <p className="max-w-prose text-body text-muted">
                {profile.about[1]}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal delay={0.18}>
            <dl className="divide-y divide-edge border-y border-edge">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 py-5"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-foreground md:text-right">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
