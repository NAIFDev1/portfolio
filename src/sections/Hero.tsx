import { useEffect, useState } from "react";
import portraitAsset from "@/assets/hero-portrait.webp";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/context";
import { Arrow } from "@/components/ui-bits";
import { pillClass } from "@/lib/pill";
import { usePrefersReducedMotion } from "@/hooks/use-portfolio";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const { t, dir } = useI18n();
  const isRTL = dir === "rtl";
  const reduced = usePrefersReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.06, 60));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10"
    >
      <div
        aria-hidden="true"
        className="mesh-bg mesh-drift pointer-events-none absolute inset-[-20%] -z-10 opacity-90"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <p className="eyebrow reveal">{t.role}</p>
          <h1
            className={`reveal mt-6 text-[clamp(3rem,11vw,8.5rem)] font-semibold tracking-[-0.045em] ${
              isRTL ? "leading-[1.1]" : "leading-[0.86]"
            }`}
          >
            <span className="block">{t.firstName}</span>
            <span className="serif-italic text-muted-foreground block">{t.lastName}</span>
          </h1>
          <p
            className={`reveal max-w-lg text-[clamp(1.1rem,2.2vw,1.5rem)] leading-snug font-light tracking-tight ${isRTL ? "mt-10" : "mt-8"}`}
          >
            {t.hero.headline}
          </p>
          <p className="reveal mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {t.hero.sub}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo("work")} className={pillClass({ variant: "solid" })}>
              {t.ui.viewWork}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={pillClass({ variant: "outline" })}
            >
              {t.ui.letsTalk}
            </button>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className={pillClass({ variant: "ghost", className: "px-2" })}
            >
              {t.ui.downloadResume} <Arrow />
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="relative mx-auto max-w-sm md:max-w-none"
            style={{ transform: `translate3d(0, ${-offset}px, 0)`, willChange: "transform" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-4 top-10 bottom-0 rounded-full bg-muted/40 blur-3xl"
            />
            <img
              src={portraitAsset}
              alt={t.hero.portraitAlt}
              width={888}
              height={1124}
              fetchPriority="high"
              decoding="async"
              className="relative w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow">{t.ui.scroll}</span>
          <span
            aria-hidden="true"
            className="animate-scroll-line block h-10 w-px bg-border-strong"
          />
        </div>
      </div>
    </section>
  );
}
