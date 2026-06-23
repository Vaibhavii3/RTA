"use client";

import { useLanguage } from "@/context/LanguageContext";

function UKFlag() {
  return (
    <svg className="h-6 w-8 shrink-0 rounded shadow-sm" viewBox="0 0 60 30" aria-hidden>
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function IndiaFlag() {
  return (
    <svg className="h-6 w-8 shrink-0 rounded shadow-sm" viewBox="0 0 60 40" aria-hidden>
      <rect width="60" height="13.33" fill="#FF9933" />
      <rect y="13.33" width="60" height="13.34" fill="#fff" />
      <rect y="26.67" width="60" height="13.33" fill="#138808" />
      <circle cx="30" cy="20" r="5" fill="none" stroke="#000080" strokeWidth="0.8" />
      <circle cx="30" cy="20" r="4" fill="none" stroke="#000080" strokeWidth="0.4" />
    </svg>
  );
}

export default function LanguageWelcomeModal() {
  const { showWelcome, setLocale, t } = useLanguage();

  if (!showWelcome) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm" aria-hidden />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl sm:p-10"
      >
        <p className="mb-2 text-center text-sm font-medium text-warm-gray">Welcome / स्वागत है</p>

        <h2 id="welcome-title" className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          {t.welcome.title}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">{t.welcome.subtitle}</p>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={() => setLocale("en")}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#2563eb] px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-[#1d4ed8] hover:shadow-lg active:scale-[0.98]"
          >
            <UKFlag />
            {t.welcome.english}
          </button>

          <button
            type="button"
            onClick={() => setLocale("hi")}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-lg font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-100 active:scale-[0.98]"
          >
            <IndiaFlag />
            {t.welcome.hindi}
          </button>
        </div>
      </div>
    </div>
  );
}
