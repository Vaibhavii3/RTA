"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { instituteInfo } from "@/data/institute";

export default function Logo({ variant = "default" }: { variant?: "default" | "header" | "footer" }) {
  const { t } = useLanguage();
  const isFooter = variant === "footer";
  const isHeader = variant === "header";

  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3">
      <div
        className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-dark shadow-md transition-transform group-hover:scale-[1.03] ${
          isFooter ? "h-14 w-14" : isHeader ? "h-12 w-12 sm:h-14 sm:w-14" : "h-16 w-16"
        }`}
      >
        <span className={`font-bold text-primary-dark ${isFooter || isHeader ? "text-lg sm:text-xl" : "text-2xl"}`}>
          {instituteInfo.shortName}
        </span>
      </div>
      <div className="min-w-0">
        <p
          className={`section-heading font-bold leading-snug ${
            isFooter
              ? "text-base text-white"
              : isHeader
                ? "text-sm text-primary sm:text-base"
                : "text-lg text-primary sm:text-xl"
          }`}
        >
          {t.institute.nameLine1}
        </p>
        <p
          className={`section-heading font-bold leading-snug ${
            isFooter
              ? "text-base text-accent"
              : isHeader
                ? "text-sm text-primary-light sm:text-base"
                : "text-lg text-primary sm:text-xl"
          }`}
        >
          {t.institute.nameLine2}
        </p>
        {!isFooter && !isHeader && (
          <>
            <p className="mt-1 text-xs text-warm-gray italic">{t.institute.affiliation}</p>
            <p className="text-xs font-medium text-primary-light">{instituteInfo.addressShort}</p>
          </>
        )}
      </div>
    </Link>
  );
}
