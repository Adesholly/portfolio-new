import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      className={cn("mx-auto my-24 h-16 w-1 rounded-full bg-muted", className)}
    />
  );
}
