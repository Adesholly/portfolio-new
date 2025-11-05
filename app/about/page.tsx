import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { SectionDivider } from "@/components/ui/section-divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Adesholly's background, skills, and experience as a full-stack developer.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <About />
      <SectionDivider />
      <Skills />
    </div>
  );
}
