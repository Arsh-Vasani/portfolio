import NavBar from "@/components/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WorksSection from "@/components/sections/WorksSection";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Page() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <WorksSection />
      <ContactFooter />
    </>
  );
}