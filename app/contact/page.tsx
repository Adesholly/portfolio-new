import { Contact } from "@/components/sections/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Adesholly for collaboration opportunities and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Contact />
    </div>
  );
}
