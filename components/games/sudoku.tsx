"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

type Grid = number[][]; // 9x9, 0 = empty
type Position = [number, number];

function emptyGrid(): Grid {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
}

function isValid(grid: Grid, row: number, col: number, num: number): boolean {
  // Check row
  for (let c = 0; c < 9; c++) if (grid[row][c] === num) return false;
  // Check column
  for (let r = 0; r < 9; r++) if (grid[r][col] === num) return false;
  // Check 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let r = boxRow; r < boxRow + 3; r++)
    for (let c = boxCol; c < boxCol + 3; c++)
      if (grid[r][c] === num) return false;
  return true;
}

function solveSudoku(grid: Grid): boolean {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (grid[r][c] === 0) {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(
          () => Math.random() - 0.5
        );
        for (const num of nums) {
          if (isValid(grid, r, c, num)) {
            grid[r][c] = num;
            if (solveSudoku(grid)) return true;
            grid[r][c] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function generateSudoku(difficulty: "easy" | "medium" | "hard"): Grid {
  const grid = emptyGrid();
  solveSudoku(grid);
  const clues = { easy: 40, medium: 30, hard: 25 }[difficulty];
  const cells: Position[] = [];
  for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) cells.push([r, c]);
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }
  const puzzle = grid.map((row) => [...row]);
  for (let i = 0; i < 81 - clues; i++) {
    const [r, c] = cells[i];
    puzzle[r][c] = 0;
  }
  return puzzle;
}

export function Sudoku() {
  const [puzzle, setPuzzle] = React.useState<Grid>(emptyGrid());
  const [solution, setSolution] = React.useState<Grid | null>(null);
  const [userGrid, setUserGrid] = React.useState<Grid>(emptyGrid());
  const [selected, setSelected] = React.useState<Position | null>(null);
  const [difficulty, setDifficulty] = React.useState<
    "easy" | "medium" | "hard"
  >("medium");
  const [solving, setSolving] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const touchStartRef = React.useRef<{ x: number; y: number } | null>(null);

  const initialCells = React.useMemo(() => {
    const set = new Set<string>();
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++) if (puzzle[r][c] !== 0) set.add(`${r}-${c}`);
    return set;
  }, [puzzle]);

  function isInitialCell(row: number, col: number): boolean {
    return initialCells.has(`${row}-${col}`);
  }

  function handleCellClick(row: number, col: number) {
    if (isInitialCell(row, col)) return;
    setSelected([row, col]);
  }

  function handleNumberInput(num: number) {
    if (!selected) return;
    const [r, c] = selected;
    if (isInitialCell(r, c)) return;
    const next = userGrid.map((row) => [...row]);
    next[r][c] = next[r][c] === num ? 0 : num;
    setUserGrid(next);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!selected) return;
    if (e.key >= "1" && e.key <= "9") {
      handleNumberInput(Number(e.key));
    } else if (e.key === "Delete" || e.key === "Backspace") {
      const [r, c] = selected;
      if (!isInitialCell(r, c)) {
        const next = userGrid.map((row) => [...row]);
        next[r][c] = 0;
        setUserGrid(next);
      }
    } else if (e.key.startsWith("Arrow")) {
      const [r, c] = selected;
      let nextR = r;
      let nextC = c;
      if (e.key === "ArrowUp" && r > 0) nextR--;
      if (e.key === "ArrowDown" && r < 8) nextR++;
      if (e.key === "ArrowLeft" && c > 0) nextC--;
      if (e.key === "ArrowRight" && c < 8) nextC++;
      setSelected([nextR, nextC]);
    }
  }

  const navigateCell = React.useCallback(
    (direction: "up" | "down" | "left" | "right") => {
      if (!selected) {
        // If no selection, select first empty cell or first cell
        for (let r = 0; r < 9; r++) {
          for (let c = 0; c < 9; c++) {
            if (!initialCells.has(`${r}-${c}`)) {
              setSelected([r, c]);
              return;
            }
          }
        }
        setSelected([0, 0]);
        return;
      }

      const [r, c] = selected;
      let nextR = r;
      let nextC = c;

      if (direction === "up" && r > 0) nextR--;
      else if (direction === "down" && r < 8) nextR++;
      else if (direction === "left" && c > 0) nextC--;
      else if (direction === "right" && c < 8) nextC++;

      setSelected([nextR, nextC]);
    },
    [selected, initialCells]
  );

  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
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
      const minSwipeDistance = 30;

      touchStartRef.current = null;

      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      if (absDeltaX < minSwipeDistance && absDeltaY < minSwipeDistance) return;

      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
          navigateCell("right");
        } else {
          navigateCell("left");
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          navigateCell("down");
        } else {
          navigateCell("up");
        }
      }
    },
    [navigateCell]
  );

  function newGame() {
    const newPuzzle = generateSudoku(difficulty);
    setPuzzle(newPuzzle);
    setUserGrid(newPuzzle.map((row) => [...row]));
    setSolution(null);
    setSelected(null);
  }

  function solve() {
    setSolving(true);
    const solved = puzzle.map((row) => [...row]);
    solveSudoku(solved);
    setSolution(solved);
    setUserGrid(solved.map((row) => [...row]));
    setSolving(false);
  }

  function checkSolution(): { valid: boolean; message: string } {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (userGrid[r][c] === 0) {
          return { valid: false, message: "Puzzle incomplete" };
        }
        const num = userGrid[r][c];
        const temp = userGrid[r][c];
        userGrid[r][c] = 0;
        if (!isValid(userGrid, r, c, num)) {
          userGrid[r][c] = temp;
          return { valid: false, message: "Invalid solution" };
        }
        userGrid[r][c] = temp;
      }
    }
    return { valid: true, message: "Congratulations! Puzzle solved!" };
  }

  const isComplete = userGrid.every((row) => row.every((cell) => cell !== 0));
  const checkResult = isComplete ? checkSolution() : null;

  // Initialize puzzle on client mount to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
    const newPuzzle = generateSudoku(difficulty);
    setPuzzle(newPuzzle);
    setUserGrid(newPuzzle.map((row) => [...row]));
  }, []);

  React.useEffect(() => {
    if (mounted) {
      newGame();
    }
  }, [difficulty, mounted]);

  return (
    <div className="rounded-md border p-4">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-muted-foreground">Difficulty:</span>
          <select
            className="rounded border bg-background px-2 py-1"
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value as "easy" | "medium" | "hard")
            }
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={newGame}>
            New Game
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={solve}
            disabled={solving}
          >
            {solving ? "Solving..." : "Auto-Solve"}
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="/towers-of-hanoi">Other Games</a>
          </Button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-md">
        <div
          className="grid touch-none select-none grid-cols-9 gap-px border-2 border-foreground bg-foreground"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
          role="grid"
          aria-label="Sudoku puzzle"
          style={{ touchAction: "none" }}
        >
          {userGrid.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              const isSelected =
                selected?.[0] === rIdx && selected?.[1] === cIdx;
              const isInitial = isInitialCell(rIdx, cIdx);
              const hasError =
                cell !== 0 && solution && solution[rIdx][cIdx] !== cell;

              return (
                <button
                  key={`${rIdx}-${cIdx}`}
                  onClick={() => handleCellClick(rIdx, cIdx)}
                  className={`flex h-10 min-h-[44px] touch-manipulation items-center justify-center border border-border bg-background text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring active:bg-accent sm:h-10 ${
                    isSelected
                      ? "bg-primary/20 ring-2 ring-primary"
                      : "hover:bg-accent"
                  } ${isInitial ? "font-bold text-foreground" : "text-muted-foreground"} ${
                    hasError
                      ? "bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-300"
                      : ""
                  }`}
                  disabled={isInitial}
                  style={{ touchAction: "manipulation" }}
                  aria-label={`Cell row ${rIdx + 1} column ${cIdx + 1}, value ${cell || "empty"}`}
                >
                  {cell !== 0 ? cell : ""}
                </button>
              );
            })
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex justify-center gap-1 sm:gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberInput(num)}
              className="flex h-12 min-h-[44px] w-12 min-w-[44px] touch-manipulation items-center justify-center rounded border bg-background text-base font-medium transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring active:bg-accent disabled:opacity-50 sm:h-10 sm:w-10 sm:text-sm"
              disabled={!selected}
              style={{ touchAction: "manipulation" }}
              aria-label={`Enter number ${num}`}
            >
              {num}
            </button>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground">
          <span className="hidden sm:inline">
            Click a cell, then enter a number. Use arrow keys or swipe to
            navigate.
          </span>
          <span className="sm:hidden">
            Tap a cell, then tap a number. Swipe on grid to navigate cells.
          </span>
        </p>
      </div>

      {checkResult && (
        <div
          className={`mt-4 rounded-md border p-3 text-sm ${
            checkResult.valid
              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300"
              : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300"
          }`}
        >
          {checkResult.message}
        </div>
      )}
    </div>
  );
}
