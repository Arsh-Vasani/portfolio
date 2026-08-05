import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-edge">
      <div className="container-page py-24 md:py-36">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="A focused toolbelt, grouped with intent."
          titleId="skills-title"
          lede="The stack is deliberately curated around the front end — what I reach for daily, what shapes the work, and where I can contribute on day one."
        />

        <RevealGroup className="grid gap-px overflow-hidden border border-edge bg-edge md:grid-cols-2">
          {skills.map((category) => (
            <RevealItem key={category.id}>
              <article className="group flex h-full flex-col gap-6 bg-background p-8 transition-colors duration-300 md:p-10">
                <header className="flex items-baseline justify-between gap-4">
                  <h3 className="text-title font-semibold tracking-tight">
                    {category.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-accent"
                  >
                    {category.index}
                  </span>
                </header>
                <p className="text-caption text-muted">{category.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-block rounded-full border border-edge px-3.5 py-1.5 font-mono text-xs text-muted transition-colors duration-300 hover:border-accent/60 hover:text-accent">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
