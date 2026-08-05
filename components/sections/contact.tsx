import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { contact } from "@/lib/data";
import { ArrowUpRight } from "@/components/icons";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-edge"
    >
      <div className="container-page grid gap-14 py-24 md:grid-cols-12 md:gap-8 md:py-36">
        <div className="md:col-span-8">
          <Reveal>
            <p className="font-mono text-overline uppercase text-accent">
              05 / Contact
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              id="contact-title"
              className="mt-6 max-w-2xl text-display font-semibold tracking-tight"
            >
              Let&apos;s build something{" "}
              <span className="italic text-accent">worth shipping</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-prose text-body text-muted">
              I&apos;m open to front-end roles and freelance opportunities that
              care about the details. If you have a project, a role, or just an
              idea worth exploring, my inbox is open.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <ButtonLink href={`mailto:${contact.email}`} withIcon>
                Start a conversation
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:col-span-4">
          <dl className="divide-y divide-edge border-y border-edge">
            <div className="flex items-baseline justify-between gap-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                Email
              </dt>
              <dd className="text-right">
                <a
                  href={`mailto:${contact.email}`}
                  className="underline-link text-sm text-foreground transition-colors duration-300 hover:text-accent"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                Phone
              </dt>
              <dd className="text-sm text-foreground">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="underline-link transition-colors duration-300 hover:text-accent"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                Location
              </dt>
              <dd className="text-right text-sm text-foreground">
                {contact.location}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-widest text-faint">
                Profile
              </dt>
              <dd className="text-right">
                <a
                  href={contact.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-link inline-flex items-center gap-1 text-sm text-foreground transition-colors duration-300 hover:text-accent"
                >
                  bold.pro
                  <ArrowUpRight className="size-3.5" />
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
