"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "ja" | "en";

const LocaleContext = createContext<Locale>("ja");

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ja");

  useEffect(() => {
    // ブラウザの言語設定から判定
    const browserLang = navigator.language || navigator.languages?.[0] || "ja";
    setLocale(browserLang.startsWith("ja") ? "ja" : "en");
  }, []);

  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
}
