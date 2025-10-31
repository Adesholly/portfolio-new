"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

type RoundResult = "idle" | "correct" | "wrong" | "timeout";

const WORDS = [
  "developer",
  "typescript",
  "portfolio",
  "nextjs",
  "react",
  "cloud",
  "frontend",
  "backend",
  "security",
  "testing",
];

function caesarCipher(input: string, shift: number): string {
  const aCode = "a".charCodeAt(0);
  return input
    .toLowerCase()
    .replace(/[^a-z]/g, " ")
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= aCode && code < aCode + 26) {
        const normalized = code - aCode;
        const shifted = (normalized + shift + 26) % 26;
        return String.fromCharCode(aCode + shifted);
      }
      return ch;
    })
    .join("");
}

function getRandomWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function getRandomShift(): number {
  return Math.floor(Math.random() * 13) + 1;
}

export function CipherBreaker() {
  const [timeLeft, setTimeLeft] = React.useState<number>(90);
  const [score, setScore] = React.useState<number>(0);
  const [roundResult, setRoundResult] = React.useState<RoundResult>("idle");
  const [plain, setPlain] = React.useState<string>(getRandomWord());
  const [shift, setShift] = React.useState<number>(getRandomShift());
  const [cipher, setCipher] = React.useState<string>("");
  const [guess, setGuess] = React.useState<string>("");

  React.useEffect(() => {
    setCipher(caesarCipher(plain, shift));
  }, [plain, shift]);

  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const id = window.setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => window.clearInterval(id);
  }, [timeLeft]);

  const isGameOver = timeLeft <= 0;

  function nextRound(nextWasTimeout = false) {
    if (nextWasTimeout) setRoundResult("timeout");
    const nextWord = getRandomWord();
    const nextShift = getRandomShift();
    setPlain(nextWord);
    setShift(nextShift);
    setGuess("");
    setRoundResult("idle");
  }

  function submitGuess(e: React.FormEvent) {
    e.preventDefault();
    if (isGameOver) return;
    if (guess.trim().toLowerCase() === plain.toLowerCase()) {
      setScore((s) => s + 1);
      setRoundResult("correct");
      setTimeout(() => nextRound(), 600);
    } else {
      setRoundResult("wrong");
    }
  }

  function resetGame() {
    setTimeLeft(90);
    setScore(0);
    setRoundResult("idle");
    setPlain(getRandomWord());
    setShift(getRandomShift());
    setGuess("");
  }

  return (
    <div className="rounded-md border p-4">
      {!isGameOver ? (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Decode the Caesar cipher. Each round uses a hidden shift. Type the
            original word.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase text-muted-foreground">
                Cipher
              </div>
              <div className="rounded bg-accent px-3 py-2 font-mono text-lg tracking-wider">
                {cipher}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-muted-foreground">
                Hint
              </div>
              <div className="rounded bg-muted px-3 py-2 text-sm">
                Length: {plain.length} • Alphabet only
              </div>
            </div>
          </div>

          <form
            onSubmit={submitGuess}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your decoded word"
              aria-label="Decoded word"
              autoFocus
            />
            <Button type="submit" className="shrink-0">
              Submit
            </Button>
          </form>

          {roundResult !== "idle" && (
            <div
              className={
                roundResult === "correct"
                  ? "text-sm text-green-600"
                  : roundResult === "wrong"
                    ? "text-sm text-red-600"
                    : "text-sm text-yellow-700"
              }
              role="status"
            >
              {roundResult === "correct" && "Correct! New puzzle coming..."}
              {roundResult === "wrong" && "Not quite—try again!"}
              {roundResult === "timeout" && "Time's up for this round."}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4 text-center">
          <p className="text-lg">Time up!</p>
          <p className="text-muted-foreground">Your score: {score}</p>
          <div className="flex justify-center gap-2">
            <Button onClick={resetGame}>Play again</Button>
            <Button asChild variant="outline">
              <a href="/resume">Back to resume</a>
            </Button>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
        <span>Time: {Math.max(0, timeLeft)}s</span>
        <span>Score: {score}</span>
      </div>
    </div>
  );
}
