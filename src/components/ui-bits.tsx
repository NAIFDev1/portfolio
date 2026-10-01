import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 px-6 py-24 sm:px-10 md:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="reveal flex items-center gap-4">
      <span className="bg-muted-foreground/60 h-px w-8" aria-hidden="true" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function Heading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "reveal mt-8 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.03] font-light tracking-[-0.03em]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

type PillProps = {
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

export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        className,
      )}
    >
      ↗
    </span>
  );
}
