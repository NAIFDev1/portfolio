import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/context";
import { Arrow, Heading, Section, SectionLabel } from "@/components/ui-bits";
import { pillClass } from "@/lib/pill";

type Status = "idle" | "loading" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

const inputClass =
  "w-full rounded-xl border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-foreground/50";

export function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [note, setNote] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = t.contact.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t.contact.errEmail;
    if (message.length < 10) next.message = t.contact.errMessage;
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      setNote(t.contact.errFix);
      return;
    }

    // No backend configured: fall back to the visitor's email client.
    if (!site.contactEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("idle");
      setNote(t.contact.mailtoNote);
      return;
    }

    try {
      setStatus("loading");
      setNote("");
      const res = await fetch(site.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setNote(t.contact.successNote);
      form.reset();
    } catch {
      setStatus("error");
      setNote(t.contact.failNote);
    }
  }

  const socialLinks = [
    site.socials.linkedin && { label: "LinkedIn", href: site.socials.linkedin },
    site.socials.github && { label: "GitHub", href: site.socials.github },
    { label: t.contact.email, href: `mailto:${site.email}` },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <Section id="contact" className="border-t border-border">
      <SectionLabel>{t.contact.label}</SectionLabel>
      <Heading>{t.contact.heading}</Heading>
      <p className="reveal mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
        {t.contact.body}
      </p>

      <div className="mt-16 grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal space-y-8">
          <a href={`mailto:${site.email}`} className={pillClass({})}>
            {t.contact.getInTouch} <Arrow />
          </a>
          <div className="border-t border-border pt-5">
            <span className="eyebrow">{t.contact.email}</span>
            <p className="mt-2 text-sm break-all">{site.email}</p>
          </div>
          <div className="border-t border-border pt-5">
            <span className="eyebrow">{t.contact.elsewhere}</span>
            <ul className="mt-3 space-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border pt-5">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.ui.downloadResume} <Arrow />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="reveal space-y-6">
          <div>
            <label htmlFor="name" className="eyebrow block">
              {t.contact.name}
            </label>
            <input
              id="name"
              name="name"
              className={`${inputClass} mt-3`}
              placeholder={t.contact.namePlaceholder}
            />
            {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="eyebrow block">
              {t.contact.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              dir="ltr"
              className={`${inputClass} mt-3`}
              placeholder={t.contact.emailPlaceholder}
            />
            {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="eyebrow block">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`${inputClass} mt-3 resize-none`}
              placeholder={t.contact.messagePlaceholder}
            />
            {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={pillClass({ className: "disabled:opacity-60" })}
          >
            {status === "loading" ? t.contact.sending : t.contact.send} <Arrow />
          </button>

          {note && (
            <p
              role="status"
              className={
                status === "error" ? "text-xs text-destructive" : "text-xs text-muted-foreground"
              }
            >
              {note}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  const { t } = useI18n();
  const links = [
    site.socials.linkedin && { label: "LinkedIn", href: site.socials.linkedin },
    site.socials.github && { label: "GitHub", href: site.socials.github },
    { label: t.contact.email, href: `mailto:${site.email}` },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="border-t border-border px-6 py-12 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="eyebrow">{t.availability}</span>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {site.year} {t.name}
          </p>
          <ul className="flex flex-wrap gap-6">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">{t.role}</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.ui.backToTop} ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
