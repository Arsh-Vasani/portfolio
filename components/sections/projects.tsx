import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectsPlaceholder() {
  const scaffold = [
    { label: "Problem", className: "col-span-12 md:col-span-6" },
    { label: "Solution", className: "col-span-12 md:col-span-6" },
    { label: "Role", className: "col-span-4" },
    { label: "Impact", className: "col-span-8" },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-10">
      <Reveal className="md:col-span-5">
        <div className="flex h-full flex-col justify-between border border-dashed border-edge p-8 md:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              00 / In progress
            </p>
            <h3 className="mt-5 text-title font-semibold tracking-tight">
              Case studies are coming.
            </h3>
            <p className="mt-4 max-w-xs text-body text-muted">
              New work ships here as it wraps up. Each case study will unpack
              the problem, the solution, my role, and the impact.
            </p>
          </div>
          <p className="mt-10 font-mono text-xs text-faint">
            Add entries to{" "}
            <code className="text-accent">lib/data.ts</code> to publish them.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="md:col-span-7">
        <div className="border border-dashed border-edge p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Case study scaffold
          </p>
          <div className="mt-8 grid grid-cols-12 gap-6">
            {scaffold.map((slot) => (
              <div
                key={slot.label}
                className={cn(
                  "flex items-center justify-between gap-4 border-b border-edge pb-4",
                  slot.className,
                )}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-faint">
                  {slot.label}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-edge"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-edge"
    >
      <div className="container-page py-24 md:py-36">
        <SectionHeading
          index="04"
          eyebrow="Selected work"
          title="Projects"
          titleId="projects-title"
          lede="Shipped case studies live here as they wrap. Until then, the structure below shows how each project will be presented."
        />

        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <ProjectsPlaceholder />
        )}
      </div>
    </section>
  );
}
