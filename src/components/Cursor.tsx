import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-portfolio";

export function Cursor() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduced) return;
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let active = false;
    let raf = 0;
    let running = false;

    const render = () => {
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${active ? 2.4 : 1})`;
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      render();
      // Stop the loop once the pointer has caught up — resume on the next move.
      if (Math.abs(target.x - pos.x) > 0.1 || Math.abs(target.y - pos.y) > 0.1) {
        raf = requestAnimationFrame(loop);
      } else {
        pos.x = target.x;
        pos.y = target.y;
        render();
        running = false;
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const next = Boolean(
        (e.target as HTMLElement | null)?.closest("a,button,input,textarea,[data-cursor]"),
      );
      if (next !== active) active = next;
      start();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    render();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden h-3 w-3 rounded-full border border-border-strong bg-foreground/70 mix-blend-difference md:block"
      style={{ willChange: "transform" }}
    />
  );
}
