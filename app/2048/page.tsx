import type { Metadata } from "next";
import { Game2048 } from "@/components/games/game-2048";

export const metadata: Metadata = {
  title: "2048",
  description: "Join tiles to reach 2048.",
};

export default function Game2048Page() {
  return (
    <section className="px-4 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">2048</h1>
        </div>
        <Game2048 />
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>More games:</span>
          <a
            className="underline hover:text-foreground"
            href="/towers-of-hanoi"
          >
            Towers of Hanoi
          </a>
          <span>·</span>
          <a className="underline hover:text-foreground" href="/cipher-breaker">
            Cipher Breaker
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
