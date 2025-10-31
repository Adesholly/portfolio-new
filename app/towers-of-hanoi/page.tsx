import type { Metadata } from "next";
import { TowersOfHanoi } from "@/components/games/towers-of-hanoi";

export const metadata: Metadata = {
  title: "Towers of Hanoi",
  description: "Move all disks to the last peg using the fewest moves.",
};

export default function TowersOfHanoiPage() {
  return (
    <section className="px-4 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Towers of Hanoi</h1>
        </div>
        <TowersOfHanoi />
        <div className="text-center text-xs text-muted-foreground">
          Tip: Click a peg to pick up the top disk, then click another peg to
          drop.
        </div>
      </div>
    </section>
  );
}
