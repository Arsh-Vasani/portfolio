import Reveal from "@/components/Reveal";

const skills: [string, string][] = [
  ["Technical", "React, Next.js, HTML/CSS, JavaScript libraries, MongoDB, TypeScript"],
  ["Frontend Engineering", "Cross-browser testing, Component architecture, State management, Accessibility testing, Performance optimization"],
  ["Design Collaboration", "Design systems, Component libraries, Visual hierarchy, Figma, Design handoff"],
  ["Backend", "Node.js"],
  ["Full Stack", "API integration"],
  ["Security", "Authentication and authorization"],
  ["Reliability", "Error handling"],
  ["Architecture", "Server-side rendering"],
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-12 bg-paper">
      <div className="mx-auto max-w-site scroll-mt-16 px-6 py-24 sm:px-10 lg:px-30 lg:py-32">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-title font-normal lowercase text-ink">
              Skills
            </h2>
            <p className="text-15 text-ink/70 sm:text-base">
              +Everything I ship with
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(([label, items], i) => (
            <Reveal
              key={label}
              delay={(i % 4) * 90}
              className="border-t border-ink/25 py-6 lg:py-7"
            >
              <p className="flex items-baseline gap-3 text-xs uppercase tracking-ultra text-ink/55">
                <span>0{i + 1}</span>
                {label}
              </p>
              <p className="mt-3 text-15 leading-relaxed text-ink/85">
                {items}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}