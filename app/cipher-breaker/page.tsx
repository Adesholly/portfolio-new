import type { Metadata } from "next";
import { CipherBreaker } from "@/components/games/cipher-breaker";

export const metadata: Metadata = {
  title: "Cipher Breaker",
  description: "Timed cipher decoding challenge.",
};

export default function CipherBreakerPage() {
  return (
    <section className="px-4 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Cipher Breaker Challenge</h1>
        </div>
        <CipherBreaker />
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>More games:</span>
          <a
            className="underline hover:text-foreground"
            href="/towers-of-hanoi"
          >
            Towers of Hanoi
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
