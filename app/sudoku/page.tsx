import type { Metadata } from "next";
import { Sudoku } from "@/components/games/sudoku";

export const metadata: Metadata = {
  title: "Sudoku",
  description: "Solve Sudoku puzzles with auto-solver option.",
};

export default function SudokuPage() {
  return (
    <section className="px-4 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sudoku</h1>
        </div>
        <Sudoku />
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
          <a className="underline hover:text-foreground" href="/2048">
            2048
          </a>
        </div>
      </div>
    </section>
  );
}
