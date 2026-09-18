import Reveal from "@/components/Reveal";

type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
  result: string;
};

const jobs: Job[] = [
  {
    role: "Front End Developer",
    company: "WrapPixel",
    location: "Ahmedabad",
    period: "04/2024 — 08/2026",
    summary:
      "Owned front-end quality across a library of React and Next.js templates — fixing bugs that blocked releases, building responsive templates, and standardizing component architecture.",
    points: [
      "Fix number of bugs in React and Next.js templates while keeping releases stable.",
      "Develop responsive website templates using React, Next.js, and Tailwind CSS for consistent cross-device rendering.",
      "Collaborate with designers to build user-friendly interfaces that strengthen UX and visual hierarchy.",
      "Participate in code reviews to uphold best practices and maintain front-end quality standards.",
      "Create reusable components and component architecture to reduce effort across future projects.",
      "Integrate front-end code with server-side code, redesign navigation, and improve visual appeal for dynamic pages.",
    ],
    result:
      "Kept releases stable by hunting down React and Next.js bugs, shipped responsive templates, and cut future build effort with reusable components.",
  },
  {
    role: "Front End Developer",
    company: "CloseDigit LLP",
    location: "Ahmedabad",
    period: "07/2022 — 04/2024",
    summary:
      "Built responsive web applications and interfaces with HTML, CSS, and JavaScript — collaborating with designers and documenting specs so nothing got lost in handoff.",
    points: [
      "Developed responsive web applications using HTML, CSS, and JavaScript frameworks to improve accessibility across devices.",
      "Collaborated with designers to create intuitive interfaces, resulting in enhanced user engagement.",
      "Documented technical specifications to ensure project consistency and facilitate team collaboration.",
      "Ensured clean, valid HTML and CSS markup in accordance with industry standards.",
      "Wrote clear technical documentation for interface behavior, component usage, and project handoff details.",
      "Developed reusable front-end components to support consistent user experiences across product pages.",
    ],
    result:
      "Improved accessibility and engagement across devices, and started a reusable component library that sped up later projects.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-12 bg-paper">
      <div className="mx-auto max-w-site scroll-mt-16 px-6 pb-28 sm:px-10 lg:px-30 lg:pb-40">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-title font-normal lowercase text-ink">
              Experience
            </h2>
            <p className="text-15 text-ink/70 sm:text-base">
              +Selected Roles &amp; Impact
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-20 lg:gap-28">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className="group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal variant="up" className="relative lg:col-span-5">
                <p className="mb-3 font-display text-role text-ink">
                  {job.role}
                </p>
                <p className="text-15 text-ink/70">
                  {job.company} <span className="text-ink/55">—</span>{" "}
                  {job.location}
                </p>
                <p className="mt-1 text-15 tabular-nums text-ink/55">
                  {job.period}
                </p>
                <p className="mt-6 max-w-md border-l border-ink/30 pl-5 text-15 leading-relaxed text-ink/80 sm:text-base">
                  {job.summary}
                </p>

                <div className="mt-8 flex items-center gap-4 text-ink/55">
                  <span className="text-13 uppercase tracking-ultra">
                    0{i + 1}
                  </span>
                  <span className="inline-block h-6 w-6 rounded-full border border-ink/30 transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-cardinal group-hover:translate-x-1">
                    <svg viewBox="0 0 24 24" className="h-full w-full p-1.5" aria-hidden>
                      <path d="M5 12h14m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Reveal>

              <div className="lg:col-span-7">
                <ol className="flex flex-col gap-6">
                  {job.points.map((point, j) => (
                    <Reveal
                      key={j}
                      as="li"
                      delay={j * 60}
                      variant="up"
                      className="flex gap-5 border-t border-ink/20 pt-5"
                    >
                      <span className="font-display text-15 leading-loose text-ink/55">
                        0{j + 1}
                      </span>
                      <p className="max-w-xl text-15 leading-roomy text-ink/90 sm:text-base">
                        {point}
                      </p>
                    </Reveal>
                  ))}
                </ol>

                <Reveal
                  delay={150}
                  className="mt-8 max-w-xl rounded-xl border border-ink/25 bg-ink/5 p-5"
                >
                  <p className="text-13 font-medium uppercase tracking-hi text-ink/60">
                    As a result
                  </p>
                  <p className="mt-2 text-15 leading-relaxed text-ink sm:text-base">
                    {job.result}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}