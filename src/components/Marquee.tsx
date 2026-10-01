import { useI18n } from "@/i18n/provider";

export function Marquee() {
  const { t } = useI18n();
  const phrase = `${t.role} • ${t.focus.items[1]} • ${t.focus.items[4]} • `;
  const line = phrase.repeat(4);

  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-border py-8 select-none">
      <div className="animate-marquee flex w-max whitespace-nowrap will-change-transform">
        <span className="serif-italic text-muted-foreground/70 pe-8 text-[clamp(2rem,7vw,5.5rem)] leading-none">
          {line}
        </span>
        <span className="serif-italic text-muted-foreground/70 pe-8 text-[clamp(2rem,7vw,5.5rem)] leading-none">
          {line}
        </span>
      </div>
    </div>
  );
}
