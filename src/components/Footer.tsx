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
            <ul className="space-y-2 text-sm text-white/75">
              <li>📞 {instituteInfo.phone}</li>
              <li>✉️ {instituteInfo.email}</li>
              <li>📍 {instituteInfo.address}</li>
            </ul>
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
