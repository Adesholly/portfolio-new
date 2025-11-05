import { Intro } from "@/components/sections/intro";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { SectionDivider } from "@/components/ui/section-divider";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </div>
  );
}
