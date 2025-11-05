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
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>More games:</span>
          <a className="underline hover:text-foreground" href="/cipher-breaker">
            Cipher Breaker
          </a>
          <span>·</span>
          <a className="underline hover:text-foreground" href="/2048">
            2048
          </a>
          <span>·</span>
          <a className="underline hover:text-foreground" href="/sudoku">
            Sudoku
          </a>
        </div>
      </div>
    </section>
  );
}
