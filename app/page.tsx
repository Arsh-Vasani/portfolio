import { HeroContent } from "@/components/sections/hero-content";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroContent />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
