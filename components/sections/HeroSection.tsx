import Clock from "@/components/Clock";
import Reveal from "@/components/Reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="bg-noise relative flex min-h-screen flex-col scroll-mt-12 overflow-hidden bg-paper"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-end pt-14 pr-6 sm:pr-10 lg:pr-30">
        <Clock />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-site flex-1 flex-col px-6 pb-12 pt-24 sm:px-10 lg:px-30">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="sr-only">Arsh Vasani — Front-End Developer</h1>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
            <div className="order-2 flex flex-col lg:order-1 lg:min-w-[384px]">
              <span className="mask-line font-display text-hero font-normal lowercase text-ink">
                <span>Arsh</span>
              </span>
              <span className="mask-line mt-3 pl-hero-indent font-display text-hero font-normal lowercase text-ink">
                <span style={{ animationDelay: "150ms" }}>Vasani</span>
              </span>
            </div>

            <div className="order-1 flex flex-col items-start gap-4 lg:order-2 lg:items-end">
              <div className="animate-float flex flex-col items-start gap-4">
                <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-charcoal shadow-stage">
                  <Avatar className="h-56 w-48 rounded-2xl after:rounded-2xl after:border-transparent sm:h-64 sm:w-64">
                    <AvatarFallback className="flex size-full items-end justify-start bg-transparent p-5">
                      <span className="font-display text-avatar-sm text-mist sm:text-avatar">
                        AV
                      </span>
                    </AvatarFallback>
                  </Avatar>
                  <div className="dotted absolute inset-0 opacity-14 invert" />
                  <Badge className="absolute right-3 top-3 z-10 gap-1.5 rounded-full border-white/20 bg-white/10 px-2.5 py-1 text-2xs tracking-open text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-leaf" />
                    Front-End
                  </Badge>
                </div>
                <p className="inline-flex items-center gap-2 text-15 text-ink/80">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
                  </span>
                  Open to work
                </p>
              </div>

              <Reveal
                as="p"
                delay={350}
                className="max-w-sm text-base leading-relaxed text-ink/80 sm:text-17"
              >
                Front-End Developer building responsive web interfaces with{" "}
                <strong className="font-medium text-ink">React</strong>,{" "}
                <strong className="font-medium text-ink">Next.js</strong>, and{" "}
                <strong className="font-medium text-ink">HTML/CSS</strong> — clean
                layouts, reusable components, and modern web standards.
              </Reveal>

              <div className="flex flex-col items-start gap-3 lg:items-end">
                {["React", "Next.js", "Tailwind CSS"].map((s, i) => (
                  <Reveal
                    key={s}
                    delay={450 + i * 120}
                    className="inline-flex items-center gap-2 text-15 text-ink/75"
                  >
                    <span className="text-ink/55">0{i + 1}</span>
                    <span className="border-b border-ink/25 pb-0.5">{s}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-6 text-xs uppercase tracking-ultra text-ink/55">
          <span className="inline-block h-px w-10 bg-ink/40" />
          Scroll
        </div>
      </div>

      <div className="relative z-0 h-24 bg-gradient-to-b from-transparent to-black/5" />
    </section>
  );
}