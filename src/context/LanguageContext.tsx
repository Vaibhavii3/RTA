"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { translations, STORAGE_KEY, type Locale, type Translations } from "@/i18n/translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  showWelcome: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [showWelcome, setShowWelcome] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "hi") {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    } else {
      setShowWelcome(true);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    setShowWelcome(false);
    document.documentElement.lang = newLocale;
  }, []);

  const value: LanguageContextValue = {
    locale,
    t: translations[locale],
    setLocale,
    showWelcome: mounted && showWelcome,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
