import { Experience } from "@/components/sections/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Adesholly's professional experience and career timeline as a full-stack developer.",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col">
      <Experience />
    </div>
  );
}
