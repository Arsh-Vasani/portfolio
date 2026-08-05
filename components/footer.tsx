import { navigation, profile } from "@/lib/data";
import { ArrowUp } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge">
      <div className="container-page flex flex-col gap-8 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm">
              {profile.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-body text-muted">
              Front-end developer crafting responsive interfaces with React
              and Next.js.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="underline-link text-sm text-muted transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-edge pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-faint">
            © {year} {profile.name}. Built with Next.js, Motion, GSAP & Lenis.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="underline-link font-mono text-xs text-muted transition-colors duration-300 hover:text-foreground"
            >
              {profile.email}
            </a>
            <a
              href="#top"
              className="flex size-10 items-center justify-center rounded-full border border-edge text-muted transition-all duration-300 hover:border-accent/60 hover:text-accent"
              aria-label="Back to top"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
