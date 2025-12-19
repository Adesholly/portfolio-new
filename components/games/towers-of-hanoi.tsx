"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

type PegIndex = 0 | 1 | 2;

function createInitialState(disks: number): number[][] {
  const startPeg = Array.from({ length: disks }, (_, i) => disks - i);
  return [startPeg, [], []];
}

function isLegalMove(from: number[], to: number[]): boolean {
  if (from.length === 0) return false;
  if (to.length === 0) return true;
  return from[from.length - 1] < to[to.length - 1];
}

export function TowersOfHanoi() {
  const [numDisks, setNumDisks] = React.useState<number>(4);
  const [pegs, setPegs] = React.useState<number[][]>(createInitialState(4));
  const [selectedPeg, setSelectedPeg] = React.useState<PegIndex | null>(null);
  const [moves, setMoves] = React.useState<number>(0);

  const isSolved = pegs[2].length === numDisks;
  const optimalMoves = Math.pow(2, numDisks) - 1;

  React.useEffect(() => {
    setPegs(createInitialState(numDisks));
    setMoves(0);
    setSelectedPeg(null);
  }, [numDisks]);

  function handlePegClick(idx: PegIndex) {
    if (isSolved) return;
    if (selectedPeg === null) {
      if (pegs[idx].length === 0) return; // cannot pick empty
      setSelectedPeg(idx);
      return;
    }

    if (selectedPeg === idx) {
      setSelectedPeg(null);
      return;
    }

    // attempt move
    const from = pegs[selectedPeg];
    const to = pegs[idx];
    if (!isLegalMove(from, to)) {
      // illegal, just deselect
      setSelectedPeg(null);
      return;
    }

    const next = pegs.map((p) => [...p]);
    const disk = next[selectedPeg].pop() as number;
    next[idx].push(disk);
    setPegs(next);
    setMoves((m) => m + 1);
    setSelectedPeg(null);
  }

  function reset() {
    setPegs(createInitialState(numDisks));
    setMoves(0);
    setSelectedPeg(null);
  }

  return (
    <div className="rounded-md border p-4">
      <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="text-sm text-muted-foreground">
          <span className="mr-3">Disks:</span>
          <select
            className="rounded border bg-background px-2 py-1"
            value={numDisks}
            onChange={(e) => setNumDisks(Number(e.target.value))}
          >
            {[3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>Moves: {moves}</span>
          <span>Optimal: {optimalMoves}</span>
          <Button size="sm" variant="outline" onClick={reset}>
            Reset
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="/cipher-breaker">Play Cipher Breaker</a>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {pegs.map((peg, idx) => (
          <button
            key={idx}
            onClick={() => handlePegClick(idx as PegIndex)}
            onTouchStart={(e) => {
              e.currentTarget.classList.add("active:bg-accent");
            }}
            className={
              "relative flex h-64 min-h-[44px] touch-manipulation items-end justify-center rounded-md border p-2 transition-all sm:h-72 " +
              (selectedPeg === (idx as PegIndex)
                ? "border-primary bg-primary/5 ring-2 ring-primary/40"
                : "hover:bg-accent active:bg-accent")
            }
            aria-label={`Peg ${idx + 1}`}
            style={{ touchAction: "manipulation" }}
          >
            {/* Peg pole */}
            <div className="absolute inset-x-1/2 bottom-2 h-48 w-1 -translate-x-1/2 bg-muted sm:h-56" />
            {/* Base */}
            <div className="absolute bottom-1 h-1 w-10/12 rounded bg-muted" />
            {/* Disks */}
            <div className="z-10 flex w-full flex-col items-center gap-1">
              {peg.map((size, i) => {
                const widthPercent = 20 + (size / numDisks) * 70; // 20%..90%
                const hues = [
                  "from-blue-500 to-blue-600",
                  "from-violet-500 to-violet-600",
                  "from-emerald-500 to-emerald-600",
                  "from-amber-500 to-amber-600",
                  "from-rose-500 to-rose-600",
                  "from-cyan-500 to-cyan-600",
                ];
                const gradient = hues[(size - 1) % hues.length];
                return (
                  <div
                    key={`${size}-${i}`}
                    className={`h-6 rounded bg-gradient-to-r text-center text-xs font-medium text-white shadow-sm ${gradient}`}
                    style={{ width: `${widthPercent}%` }}
                    aria-hidden
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </button>
        ))}
      </div>

      {isSolved && (
        <div className="mt-4 rounded-md border bg-green-50 p-3 text-sm text-green-700">
          Solved in {moves} moves! Optimal is {optimalMoves}. Try with more
          disks.
        </div>
      )}
    </div>
  );
}
