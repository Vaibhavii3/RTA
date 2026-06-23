"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/i18n/translations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/courses", label: t.nav.courses },
    { href: "/placements", label: t.nav.placements },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  function switchLanguage(newLocale: Locale) {
    setLocale(newLocale);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-primary/8 bg-white/95 shadow-[0_1px_12px_rgba(15,40,71,0.06)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <Logo variant="header" />

        {/* Desktop nav — centered, spacious */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[15px] font-medium transition-colors ${
                  active ? "text-primary" : "text-warm-gray hover:text-primary"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <div className="flex items-center rounded-full bg-cream p-1">
            <button
              type="button"
              onClick={() => switchLanguage("en")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                locale === "en" ? "bg-primary text-white shadow-sm" : "text-primary hover:text-primary-light"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => switchLanguage("hi")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                locale === "hi" ? "bg-primary text-white shadow-sm" : "text-primary hover:text-primary-light"
              }`}
            >
              हि
            </button>
          </div>
          <Link href="/contact" className="btn-outline-accent whitespace-nowrap px-5 py-2.5 text-sm">
            {t.home.heroGetInfo}
          </Link>
          <Link href="/contact" className="btn-primary whitespace-nowrap px-5 py-2.5 text-sm">
            {t.nav.applyNextIntake}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-xl border border-primary/10 p-2.5 text-primary lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t.common.toggleMenu}
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-primary/8 bg-white px-5 py-5 lg:hidden">
          <div className="mb-4 flex justify-center gap-2">
            <button
              type="button"
              onClick={() => switchLanguage("en")}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${locale === "en" ? "bg-primary text-white" : "bg-cream text-primary"}`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => switchLanguage("hi")}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${locale === "hi" ? "bg-primary text-white" : "bg-cream text-primary"}`}
            >
              हिन्दी
            </button>
          </div>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                  pathname === link.href ? "bg-sky text-primary" : "text-warm-gray hover:bg-cream hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-outline-accent text-center text-sm">
              {t.home.heroGetInfo}
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary text-center text-sm">
              {t.nav.applyNextIntake}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
