import { Projects } from "@/components/sections/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Adesholly's featured projects and portfolio of web applications.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <Projects />
    </div>
  );
}
