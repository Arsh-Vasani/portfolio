import WorkCard, { type Work } from "@/components/WorkCard";
import Reveal from "@/components/Reveal";
import Wavy from "@/components/Wavy";
import { Separator } from "@/components/ui/separator";
import {
  AdminTemplateMockup,
  TemplatesMockup,
  ShadcnSpaceMockup,
  MockupStage,
} from "@/components/Mockups";
import { SITE } from "@/lib/site";

const works: Work[] = [
  {
    name: "GetNextJS Templates",
    tags: "Next.js · React · MongoDB · Authentication · Payments",
    year: "@2026",
    description:
      "Built the initial version of this Next.js template marketplace — producing the majority of the templates sold on the site, shaping its visual design, cataloguing products into the database, and wiring up user authentication plus a payment gateway for digital downloads.",
    note: "GetNextJS · Production",
    href: "https://getnextjstemplates.com/",
    media: (
      <MockupStage>
        <TemplatesMockup />
      </MockupStage>
    ),
  },
  {
    name: "TailwindAdmin",
    tags: "React · Next.js · Tailwind CSS · TypeScript",
    year: "@2025–2026",
    description:
      "Participated in the core creation of this open-source React admin dashboard template — building the dashboard layouts, crafting reusable components and Tailwind UI blocks, and shaping the landing experience across its React and Next.js versions.",
    note: "TailwindAdmin · Production",
    href: "https://tailwind-admin.com/",
    media: (
      <MockupStage>
        <AdminTemplateMockup />
      </MockupStage>
    ),
  },
  {
    name: "Shadcn Space",
    tags: "React · Next.js · shadcn/ui · Tailwind CSS · Base UI",
    year: "@2025–2026",
    description:
      "Participated in the core creation of this shadcn/ui block library — helping build the platform, maintaining code quality across the collection, and shipping new reusable blocks and components with Tailwind CSS, Base UI, and the latest React tooling.",
    note: "Shadcn Space · Production",
    href: "https://shadcnspace.com/",
    media: (
      <MockupStage>
        <ShadcnSpaceMockup />
      </MockupStage>
    ),
  },
];

export default function WorksSection() {
  return (
    <section id="works" className="relative scroll-mt-12 bg-paper">
      <div className="mx-auto max-w-site scroll-mt-16 px-6 py-24 sm:px-10 lg:px-30 lg:py-28">
        <Reveal>
          <div className="mb-14">
            <h2 className="font-display text-h3 font-normal lowercase text-ink">
              Works
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-20 lg:gap-28">
          {works.map((work, i) => (
            <Reveal key={work.name} variant="scale">
              <WorkCard work={work} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <Separator className="bg-ink/10" />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ash">
              More projects &amp; templates are released on WrapPixel.
            </p>
            <a
              href={SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 py-2 text-sm font-medium tracking-wide text-ink"
            >
              <span className="wave-hold">
                View my resume in the browser
                <Wavy />
              </span>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="size-auto transition-transform duration-500 group-hover:translate-x-1">
                <path d="M0 6h18M14 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}