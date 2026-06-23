"use client";

import Link from "next/link";
import Logo from "./Logo";
import { instituteInfo } from "@/data/institute";
import { useLanguage } from "@/context/LanguageContext";
import { useHomeExtras } from "@/hooks/useHomeExtras";

export default function Footer() {
  const { t } = useLanguage();
  const extras = useHomeExtras();

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/courses", label: t.nav.courses },
    { href: "/placements", label: t.nav.placements },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="gradient-hero text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <p className="mt-4 text-sm text-white/70">{extras.footer.tagline}</p>
            <p className="mt-2 text-xs text-white/50 italic">{t.institute.affiliation}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">{extras.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/75 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">{extras.footer.help}</h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li><Link href="/contact" className="hover:text-accent">{extras.footer.about}</Link></li>
              <li><span>{extras.footer.privacy}</span></li>
              <li><span>{extras.footer.terms}</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">{t.common.getInTouch}</h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.06 6.06l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {instituteInfo.phone}
              </li>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {instituteInfo.email}
              </li>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {instituteInfo.address}
              </li>
            </ul>
            <div className="mt-5 border-t border-white/15 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">{instituteInfo.upDivision.name}</p>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {instituteInfo.upDivision.address}
                </li>
                <li className="flex items-start gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.06 6.06l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {instituteInfo.upDivision.phone}
                </li>
                <li className="flex items-start gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {instituteInfo.upDivision.email}
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/${instituteInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 inline-flex gap-2 text-sm"
            >
              {t.common.chatWhatsApp}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} {t.institute.name}. {t.common.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
