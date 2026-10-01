import { useEffect, useState } from "react";
import khabirPreview from "@/assets/khabir-screenshot.webp";
import novaPreview from "@/assets/nova.webp";
import forgePreview from "@/assets/forge.webp";
import { useI18n } from "@/i18n/context";
import type { Content } from "@/i18n/content";
import { Arrow, Heading, Section, SectionLabel } from "@/components/ui-bits";
import { pillClass } from "@/lib/pill";

type Project = Content["projects"][number];

const images: Record<string, { src: string; width: number; height: number }> = {
  khabir: { src: khabirPreview, width: 1400, height: 692 },
  nova: { src: novaPreview, width: 1440, height: 900 },
  forge: { src: forgePreview, width: 1440, height: 900 },
};

/** Optional external links per project id. Leave empty to hide the buttons. */
const links: Record<string, { live?: string; repo?: string }> = {
  // Khabir is a full-stack app (Express + MySQL + OpenAI), so it cannot be
  // published as a static site. Source only until a hosted instance exists.
  khabir: {
    repo: "https://github.com/NAIFDev1/resume-expert-ai",
  },
  nova: {
    live: "https://naifdev1.github.io/nova-landing-page/",
    repo: "https://github.com/NAIFDev1/nova-landing-page",
  },
  forge: {},
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useI18n();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const cs = project.caseStudy as Record<string, string | string[]> | null;
  const s = t.work.sections;
  const image = images[project.id];
  const link = links[project.id] ?? {};

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — ${t.work.caseStudyLabel}`}
      className="bg-background/90 fixed inset-0 z-[80] overflow-y-auto backdrop-blur-xl"
    >
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="eyebrow">
              {t.work.caseStudyLabel} / {project.number}
            </span>
            <h2 className="mt-4 text-[clamp(2.2rem,6vw,4rem)] leading-none font-semibold tracking-[-0.03em]">
              {project.title}
            </h2>
            <p className="serif-italic mt-2 text-xl text-muted-foreground">{project.tagline}</p>
          </div>
          <button onClick={onClose} className={pillClass({ variant: "outline" })}>
            {t.ui.close}
          </button>
        </div>

        {image && (
          <img
            src={image.src}
            alt={project.title}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="mt-10 w-full rounded-2xl border border-border"
          />
        )}

        {cs && (
          <div className="mt-12 space-y-10">
            {(
              [
                [s.overview, cs["overview"]],
                [s.problem, cs["problem"]],
                [s.solution, cs["solution"]],
                [s.myRole, cs["myRole"]],
                [s.challenges, cs["challenges"]],
                [s.outcome, cs["outcome"]],
              ] as [string, string][]
            ).map(([label, body]) => (
              <div
                key={label}
                className="grid gap-2 border-t border-border pt-6 sm:grid-cols-[180px_1fr]"
              >
                <span className="eyebrow">{label}</span>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}

            <div className="grid gap-2 border-t border-border pt-6 sm:grid-cols-[180px_1fr]">
              <span className="eyebrow">{s.features}</span>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {((cs["features"] as string[]) ?? []).map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
            </div>

            <div className="grid gap-2 border-t border-border pt-6 sm:grid-cols-[180px_1fr]">
              <span className="eyebrow">{s.tech}</span>
              <p className="text-sm text-muted-foreground">{project.tech.join(", ")}</p>
            </div>

            {(link.live || link.repo) && (
              <div className="flex flex-wrap gap-3 border-t border-border pt-8">
                {link.live && (
                  <a href={link.live} target="_blank" rel="noreferrer" className={pillClass({})}>
                    {t.ui.viewProject} <Arrow />
                  </a>
                )}
                {link.repo && (
                  <a
                    href={link.repo}
                    target="_blank"
                    rel="noreferrer"
                    className={pillClass({ variant: "outline" })}
                  >
                    {t.ui.github} <Arrow />
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Work() {
  const { t } = useI18n();
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <Section id="work">
      <SectionLabel>{t.work.label}</SectionLabel>
      <Heading>{t.work.heading}</Heading>
      <p className="reveal mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
        {t.work.body}
      </p>

      <div className="mt-20 space-y-24">
        {t.projects.map((p) => {
          const image = images[p.id];
          const link = links[p.id] ?? {};
          return (
            <article
              key={p.id}
              className="reveal grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center"
            >
              <div className="order-2 md:order-1">
                <span className="eyebrow tabular-nums">{p.number}</span>
                <h3 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-none font-semibold tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="serif-italic mt-2 text-lg text-muted-foreground">{p.tagline}</p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                {p.tech.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {p.tech.map((tech) => (
                      <li key={tech} className="eyebrow">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
                {p.caseStudy && (
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {link.live && (
                      <a
                        href={link.live}
                        target="_blank"
                        rel="noreferrer"
                        className={pillClass({})}
                      >
                        {t.ui.viewProject} <Arrow />
                      </a>
                    )}
                    {link.repo && (
                      <a
                        href={link.repo}
                        target="_blank"
                        rel="noreferrer"
                        className={pillClass({ variant: "outline" })}
                      >
                        {t.ui.github} <Arrow />
                      </a>
                    )}
                    <button
                      onClick={() => setOpen(p)}
                      className={pillClass({ variant: link.live ? "outline" : "solid" })}
                    >
                      {t.ui.caseStudy} <Arrow />
                    </button>
                  </div>
                )}
              </div>

              <div className="order-1 md:order-2">
                {image ? (
                  <button
                    onClick={() => setOpen(p)}
                    className="group block w-full overflow-hidden rounded-2xl border border-border"
                    aria-label={`${p.title} — ${t.ui.caseStudy}`}
                  >
                    <img
                      src={image.src}
                      alt={p.title}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </button>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-border">
                    <span className="eyebrow">{t.ui.inDevelopment}</span>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}
