"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

type Board = number[][]; // 4x4

const SIZE = 4;

function emptyBoard(): Board {
  return Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => 0)
  );
}

function getEmptyCells(board: Board): Array<[number, number]> {
  const cells: Array<[number, number]> = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === 0) cells.push([r, c]);
    }
  }
  return cells;
}

function addRandomTile(board: Board): Board {
  const empties = getEmptyCells(board);
  if (empties.length === 0) return board;
  const [r, c] = empties[Math.floor(Math.random() * empties.length)];
  board[r][c] = Math.random() < 0.9 ? 2 : 4;
  return board;
}

function clone(board: Board): Board {
  return board.map((row) => [...row]);
}

function compressAndMerge(line: number[]): { line: number[]; gained: number } {
  const nonZero = line.filter((v) => v !== 0);
  const merged: number[] = [];
  let scoreGain = 0;
  for (let i = 0; i < nonZero.length; i++) {
    if (i + 1 < nonZero.length && nonZero[i] === nonZero[i + 1]) {
      const val = nonZero[i] * 2;
      merged.push(val);
      scoreGain += val;
      i++;
    } else {
      merged.push(nonZero[i]);
    }
  }
  while (merged.length < SIZE) merged.push(0);
  return { line: merged, gained: scoreGain };
}

function rotateRight(board: Board): Board {
  const res = emptyBoard();
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++) res[c][SIZE - 1 - r] = board[r][c];
  return res;
}

function rotateLeft(board: Board): Board {
  const res = emptyBoard();
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++) res[SIZE - 1 - c][r] = board[r][c];
  return res;
}

function moveLeft(board: Board): {
  board: Board;
  moved: boolean;
  gained: number;
} {
  let moved = false;
  let gained = 0;
  const next = board.map((row) => {
    const { line, gained: g } = compressAndMerge(row);
    if (!moved && line.some((v, i) => v !== row[i])) moved = true;
    gained += g;
    return line;
  });
  return { board: next, moved, gained };
}

function moveRight(board: Board): {
  board: Board;
  moved: boolean;
  gained: number;
} {
  const reversed = board.map((row) => [...row].reverse());
  const { board: movedBoard, moved, gained } = moveLeft(reversed);
  return { board: movedBoard.map((row) => row.reverse()), moved, gained };
}

function moveUp(board: Board): {
  board: Board;
  moved: boolean;
  gained: number;
} {
  const rotated = rotateLeft(board);
  const { board: movedBoard, moved, gained } = moveLeft(rotated);
  return { board: rotateRight(movedBoard), moved, gained };
}

function moveDown(board: Board): {
  board: Board;
  moved: boolean;
  gained: number;
} {
  const rotated = rotateLeft(board);
  const { board: movedBoard, moved, gained } = moveRight(rotated);
  return { board: rotateRight(movedBoard), moved, gained };
}

function anyMovesAvailable(board: Board): boolean {
  if (getEmptyCells(board).length > 0) return true;
  // check merges horizontally
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE - 1; c++)
      if (board[r][c] === board[r][c + 1]) return true;
  // vertically
  for (let c = 0; c < SIZE; c++)
    for (let r = 0; r < SIZE - 1; r++)
      if (board[r][c] === board[r + 1][c]) return true;
  return false;
}

export function Game2048() {
  const [board, setBoard] = React.useState<Board>(emptyBoard());
  const [score, setScore] = React.useState<number>(0);
  const [gameOver, setGameOver] = React.useState<boolean>(false);
  const touchStartRef = React.useRef<{
    x: number;
    y: number;
    time: number;
  } | null>(null);
  const boardRef = React.useRef<HTMLDivElement>(null);

  // Initialize board with random tiles only on client after mount to avoid hydration mismatch
  React.useEffect(() => {
    setBoard(addRandomTile(addRandomTile(emptyBoard())));
  }, []);

  const handleMove = React.useCallback(
    (dir: "left" | "right" | "up" | "down") => {
      if (gameOver) return;
      const current = clone(board);
      let result;
      if (dir === "left") result = moveLeft(current);
      else if (dir === "right") result = moveRight(current);
      else if (dir === "up") result = moveUp(current);
      else result = moveDown(current);

      if (!result.moved) return;
      const next = addRandomTile(result.board);
      setScore((s) => s + result.gained);
      setBoard(next);
      if (!anyMovesAvailable(next)) setGameOver(true);
    },
    [board, gameOver]
  );

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") handleMove("left");
      else if (e.key === "ArrowRight") handleMove("right");
      else if (e.key === "ArrowUp") handleMove("up");
      else if (e.key === "ArrowDown") handleMove("down");
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleMove]);

  // Swipe gesture handlers
  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  }, []);

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    if (touchStartRef.current) {
      e.preventDefault(); // Prevent scrolling during swipe
    }
  }, []);

  const handleTouchEnd = React.useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;
      const minSwipeDistance = 30;
      const maxSwipeTime = 500;

      // Reset touch start
      touchStartRef.current = null;

      // Check if swipe is valid (minimum distance and maximum time)
      if (deltaTime > maxSwipeTime) return;

      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      if (absDeltaX < minSwipeDistance && absDeltaY < minSwipeDistance) return;

      // Determine swipe direction
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
          handleMove("right");
        } else {
          handleMove("left");
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          handleMove("down");
        } else {
          handleMove("up");
        }
      }
    },
    [handleMove]
  );

  function reset() {
    setBoard(addRandomTile(addRandomTile(emptyBoard())));
    setScore(0);
    setGameOver(false);
  }

  function tileClass(val: number): string {
    const map: Record<number, string> = {
      0: "bg-muted text-transparent",
      2: "bg-amber-50 text-amber-900",
      4: "bg-amber-100 text-amber-900",
      8: "bg-orange-200 text-orange-900",
      16: "bg-orange-300 text-orange-900",
      32: "bg-orange-400 text-white",
      64: "bg-orange-500 text-white",
      128: "bg-emerald-400 text-white",
      256: "bg-emerald-500 text-white",
      512: "bg-emerald-600 text-white",
      1024: "bg-violet-500 text-white",
      2048: "bg-violet-600 text-white",
    };
    return map[val] || "bg-slate-700 text-white";
  }

  return (
    <div className="rounded-md border p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="hidden sm:inline">Use arrow keys or </span>
          <span className="sm:hidden">Swipe or </span>
          <span className="hidden sm:inline">swipe to move tiles</span>
          <span className="sm:hidden">use arrow buttons</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>Score: {score}</span>
          <Button size="sm" variant="outline" onClick={reset}>
            New Game
          </Button>
        </div>
      </div>

      <div
        ref={boardRef}
        className="mx-auto grid w-full max-w-md touch-none select-none grid-cols-4 gap-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "none" }}
      >
        {board.map((row, rIdx) =>
          row.map((val, cIdx) => (
            <div
              key={`${rIdx}-${cIdx}`}
              className={`flex h-20 items-center justify-center rounded ${tileClass(val)} text-xl font-bold`}
              aria-label={`cell-${rIdx}-${cIdx}-${val}`}
            >
              {val !== 0 ? val : ""}
            </div>
          ))
        )}
      </div>

      {/* Mobile arrow buttons */}
      <div className="mt-4 flex justify-center sm:hidden">
        <div className="grid grid-cols-3 gap-2">
          <div></div>
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-12"
            onClick={() => handleMove("up")}
            aria-label="Move up"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          <div></div>
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-12"
            onClick={() => handleMove("left")}
            aria-label="Move left"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div></div>
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-12"
            onClick={() => handleMove("right")}
            aria-label="Move right"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
          <div></div>
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-12"
            onClick={() => handleMove("down")}
            aria-label="Move down"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
          <div></div>
        </div>
      </div>

      {gameOver && (
        <div className="mt-4 rounded-md border bg-red-50 p-3 text-sm text-red-700">
          Game over! Final score: {score}
        </div>
      )}
    </div>
  );
}
