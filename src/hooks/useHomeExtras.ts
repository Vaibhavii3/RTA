"use client";

import { useLanguage } from "@/context/LanguageContext";
import { homeExtras } from "@/i18n/homeExtras";

export function useHomeExtras() {
  const { locale } = useLanguage();
  return homeExtras[locale];
}
