import { useI18n } from "@/i18n/provider";
import { Heading, Section, SectionLabel } from "@/components/ui-bits";

export function Statement() {
  const { t } = useI18n();
  return (
    <Section className="border-t border-border">
      <p className="reveal serif-italic max-w-4xl text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.12] text-foreground">
        {t.statement.line}
      </p>
      <p className="reveal mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {t.statement.body}
      </p>
    </Section>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <Section id="about" className="border-t border-border">
      <SectionLabel>{t.about.label}</SectionLabel>
      <Heading>{t.about.heading}</Heading>
      <div className="mt-14 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <p className="reveal max-w-xl text-base leading-relaxed text-muted-foreground">
          {t.about.body}
        </p>
        <dl className="reveal space-y-6">
          <div className="border-t border-border pt-4">
            <dt className="eyebrow">{t.about.basedIn}</dt>
            <dd className="mt-2 text-sm">{t.location}</dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="eyebrow">{t.about.education}</dt>
            <dd className="mt-2 text-sm">{t.education.items[0]?.degree}</dd>
          </div>
          <div className="border-t border-border pt-4">
            <dt className="eyebrow">{t.about.focus}</dt>
            <dd className="mt-2 text-sm">{t.role}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}

export function Skills() {
  const { t } = useI18n();
  return (
    <Section id="skills" className="border-t border-border">
      <SectionLabel>{t.skills.label}</SectionLabel>
      <Heading>{t.skills.heading}</Heading>
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div key={group.title} className="reveal border-t border-border pt-6">
            <h3 className="eyebrow">{group.title}</h3>
            <ul className="mt-6 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight font-light tracking-tight"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  const { t } = useI18n();
  return (
    <Section id="experience" className="border-t border-border">
      <SectionLabel>{t.experience.label}</SectionLabel>
      <Heading>{t.experience.heading}</Heading>
      <div className="mt-16">
        {t.experience.items.map((item) => (
          <article
            key={item.role}
            className="reveal grid gap-6 border-t border-border py-10 md:grid-cols-[240px_1fr]"
          >
            <span className="eyebrow">{item.kind}</span>
            <div>
              <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-light tracking-tight">
                {item.role}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  const { t } = useI18n();
  return (
    <Section className="border-t border-border">
      <SectionLabel>{t.education.label}</SectionLabel>
      <div className="mt-14">
        {t.education.items.map((e) => (
          <div
            key={e.degree}
            className="reveal grid gap-4 border-t border-border py-10 md:grid-cols-[240px_1fr]"
          >
            <span className="eyebrow">{t.education.badge}</span>
            <div>
              <h3 className="text-[clamp(1.4rem,3vw,2rem)] leading-tight font-light tracking-tight">
                {e.degree}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{e.school}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Certificates() {
  const { t } = useI18n();
  return (
    <Section id="certificates" className="border-t border-border">
      <SectionLabel>{t.certificates.label}</SectionLabel>
      <Heading>{t.certificates.heading}</Heading>
      <ul className="mt-14">
        {t.certificates.items.map((c) => (
          <li
            key={c.name}
            className="reveal group grid gap-3 border-t border-border py-8 md:grid-cols-[1fr_auto] md:items-end"
          >
            <div>
              <h3 className="text-[clamp(1.25rem,2.6vw,1.9rem)] leading-tight font-light tracking-tight">
                {c.name}
              </h3>
              {c.issuer && <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Focus() {
  const { t } = useI18n();
  return (
    <Section className="border-t border-border">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <SectionLabel>{t.focus.label}</SectionLabel>
          <ul className="reveal mt-8 space-y-3">
            {t.focus.items.map((f) => (
              <li key={f} className="text-lg font-light tracking-tight text-muted-foreground">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>{t.focus.servicesLabel}</SectionLabel>
          <ul className="reveal mt-8 space-y-3">
            {t.focus.services.map((s) => (
              <li key={s} className="text-lg font-light tracking-tight text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Process() {
  const { t } = useI18n();
  return (
    <Section className="border-t border-border">
      <SectionLabel>{t.process.label}</SectionLabel>
      <Heading>{t.process.heading}</Heading>
      <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((p) => (
          <div key={p.step} className="reveal border-t border-border pt-6">
            <span className="serif-italic text-4xl text-muted-foreground/60">{p.step}</span>
            <h3 className="mt-4 text-xl font-light tracking-tight">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
