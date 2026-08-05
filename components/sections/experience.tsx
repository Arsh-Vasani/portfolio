import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceTimeline } from "./experience-timeline";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-edge"
    >
      <div className="container-page py-24 md:py-36">
        <SectionHeading
          index="03"
          eyebrow="Career"
          title="Experience"
          titleId="experience-title"
          lede="Two companies, one throughline: building interfaces that are fast, accessible, and easy to maintain."
        />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
