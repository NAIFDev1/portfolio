import { useMemo, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/provider";
import { useTheme } from "@/lib/theme";
import { useActiveSection, useScrollDirection } from "@/hooks/use-portfolio";
import { cn } from "@/lib/utils";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const { t, lang, toggleLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const ids = useMemo(() => t.nav.map((n) => n.id), [t]);
  const active = useActiveSection(ids);
  const hidden = useScrollDirection();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-transform duration-700 sm:top-6",
        hidden && !open && "-translate-y-[160%]",
      )}
    >
      <nav
        aria-label="Primary"
        className="bg-background/70 flex w-full max-w-4xl items-center gap-2 rounded-full border border-border px-2 py-2 backdrop-blur-xl sm:w-auto"
      >
        <button
          onClick={() => scrollTo("home")}
          className="ms-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-medium tracking-tight"
          aria-label={t.ui.backToTop}
        >
          NA
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[13px] tracking-tight transition-colors duration-400",
                  active === item.id
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="ms-auto flex items-center gap-1.5">
          <button
            onClick={toggleLang}
            aria-label={t.ui.languageAria}
            className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-border px-2.5 text-[11px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            {lang === "ar" ? "EN" : "ع"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={t.ui.theme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group hidden rounded-full bg-foreground px-4 py-1.5 text-[13px] text-background transition-opacity duration-400 hover:opacity-90 md:inline-flex md:items-center md:gap-1"
          >
            {t.ui.resume} <span aria-hidden="true">↗</span>
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="bg-background/95 fixed inset-x-4 top-20 rounded-3xl border border-border p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {t.nav.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setOpen(false);
                    scrollTo(item.id);
                  }}
                  className={cn(
                    "w-full border-b border-border px-2 py-3 text-start text-base tracking-tight last:border-0",
                    active === item.id ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center rounded-full bg-foreground px-4 py-3 text-sm text-background"
          >
            {t.ui.resume} ↗
          </a>
        </div>
      )}
    </header>
  );
}
