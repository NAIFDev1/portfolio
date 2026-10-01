import { createContext, useContext } from "react";
import type { Content } from "./content";

export type Lang = "en" | "ar";

export type I18nContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Content;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
