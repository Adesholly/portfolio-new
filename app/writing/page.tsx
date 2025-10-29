import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes and posts.",
};

export default function WritingIndex() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Writing</h1>
        <p className="mt-2 text-muted-foreground">Coming soon.</p>
      </div>
    </div>
  );
}
