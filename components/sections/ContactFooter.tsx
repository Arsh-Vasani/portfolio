import Reveal from "@/components/Reveal";
import EmailButton from "@/components/EmailButton";
import Wavy from "@/components/Wavy";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-noise relative scroll-mt-12 overflow-hidden bg-charcoal text-mist"
    >
      <div className="relative z-10 mx-auto flex max-w-site flex-col px-6 py-20 sm:px-10 lg:min-h-screen lg:justify-between lg:px-30 lg:py-24">
        <Reveal variant="blur">
          <p className="text-xs uppercase tracking-mega text-mist/60">
            Contact
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-end gap-12 lg:mt-auto lg:grid-cols-2">
          <div>
            <p className="font-display text-footer text-mist lowercase">
              <a href="#about" className="wave-hold block">
                Arsh
                <Wavy />
              </a>
              <a href="#about" className="wave-hold block">
                Vasani
                <Wavy />
              </a>
            </p>
            <p className="mt-6 text-base text-mist/60">
              Clean · Consistent · Modern
            </p>
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-mist/60">
              Based in Ahmedabad 380059, India. Available for front-end and
              full-stack opportunities.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <EmailButton />
          </div>
        </div>

        <Reveal className="mt-16 flex flex-col gap-6 lg:mt-10">
          <Separator className="bg-white/10" />
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-x-1 gap-y-2">
              {[
                ["Email", "mailto:arshvasani9@gmail.com"],
                ["Phone", "tel:+919409273874"],
                ["Resume", "/Arsh_Vasani_Resume.pdf"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group/link mx-3 inline-flex items-center gap-2 text-13 uppercase tracking-ultra text-mist/70 transition-colors duration-300 hover:text-mist"
                >
                  <span className="h-1 w-1 rounded-full bg-mist/30 transition-colors duration-300 group-hover/link:bg-leaf" />
                  {label}
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <a href="/Arsh_Vasani_Resume.pdf" download="Arsh_Vasani_Resume.pdf" />
              }
              className="group/button rounded-full border-mist/30 bg-transparent px-5 py-2.5 text-13 uppercase tracking-ultra text-mist hover:border-mist hover:bg-mist hover:text-charcoal"
            >
              Download CV
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                className="size-auto transition-transform duration-500 group-hover/button:translate-y-0.5"
              >
                <path d="M1 6h14M12 2l3 4-3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 1v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </Button>
          </div>

          <p className="text-xs tracking-wide text-mist/60">
            © {new Date().getFullYear()} Arsh Vasani — Designed &amp; built
            with React, Next.js &amp; TypeScript.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}