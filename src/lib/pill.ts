import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PillProps = {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

const pillBase =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm tracking-tight transition-all duration-500 hover:-translate-y-0.5";

const pillVariants = {
  solid: "bg-foreground text-background hover:bg-foreground/90",
  outline: "border border-border-strong text-foreground hover:border-foreground/60 hover:bg-muted",
  ghost: "text-muted-foreground hover:text-foreground",
} as const;

export function pillClass({ variant = "solid", className }: Omit<PillProps, "children">) {
  return cn(pillBase, pillVariants[variant], className);
}
