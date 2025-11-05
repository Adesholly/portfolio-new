import { AllProjects } from "@/components/sections/all-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Adesholly's complete portfolio of web applications and projects.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <AllProjects />
    </div>
  );
}
