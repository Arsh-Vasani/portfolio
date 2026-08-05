import type { Project } from "@/types/content";
import { ArrowUpRight } from "@/components/icons";

type ProjectCardProps = {
  project: Project;
  index: number;
};

/**
 * Rich, editorial project card. Renders every field of a `Project`
 * (problem, solution, role, impact, technologies, links) so each case
 * study carries enough depth to stand on its own without a detail page.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group flex flex-col border border-edge bg-surface transition-colors duration-300 hover:border-accent/50">
      <div className="flex items-start justify-between border-b border-edge p-6 md:p-8">
        <span className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs text-faint">{project.year}</span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-title font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-body text-muted">{project.description}</p>

        <dl className="mt-8 space-y-5 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-faint">
              Problem
            </dt>
            <dd className="mt-1.5 text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-faint">
              Solution
            </dt>
            <dd className="mt-1.5 text-muted">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-faint">
              Role
            </dt>
            <dd className="mt-1.5 text-muted">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-faint">
              Impact
            </dt>
            <dd className="mt-1.5 text-foreground">{project.impact}</dd>
          </div>
        </dl>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-edge px-3 py-1 font-mono text-xs text-faint"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-6 border-t border-edge pt-6">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-link inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-300 hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
