import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Preview of my resume.",
};

export default function ResumePage() {
  return (
    <section className="px-4 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <h1 className="text-2xl font-bold">Resume</h1>
        <div className="h-[85vh] w-full overflow-hidden rounded-md border">
          <iframe
            src="/resume.pdf#view=FitH"
            title="Resume PDF Preview"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
