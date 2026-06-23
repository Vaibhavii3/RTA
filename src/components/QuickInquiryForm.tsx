"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function QuickInquiryForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card p-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
          <svg className="h-6 w-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="section-heading text-lg font-semibold text-primary">{t.common.thankYou}</h3>
        <p className="mt-2 text-sm text-warm-gray">{t.common.inquiryReceived}</p>
      </div>
    );
  }

  const courseOptionKeys = [
    "advanced-diploma-hospitality",
    "advanced-diploma-international",
    "diploma",
    "certificate",
    "barista",
    "bartender",
  ] as const;

  return (
    <form onSubmit={handleSubmit} className={`card ${compact ? "p-5" : "p-6 lg:p-8"}`}>
      <h3 className="section-heading mb-1 text-xl font-semibold text-primary">{t.inquiry.title}</h3>
      <p className="mb-5 text-sm text-warm-gray">{t.inquiry.subtitle}</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-primary">
            {t.inquiry.fullName}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-primary/20 bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder={t.inquiry.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-primary">
            {t.inquiry.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-primary/20 bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder={t.inquiry.phonePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="course" className="mb-1 block text-sm font-medium text-primary">
            {t.inquiry.courseInterest}
          </label>
          <select
            id="course"
            name="course"
            required
            className="w-full rounded-lg border border-primary/20 bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          >
            <option value="">{t.inquiry.selectCourse}</option>
            {courseOptionKeys.map((key) => (
              <option key={key} value={key}>
                {t.courseOptions[key]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-primary">
            {t.inquiry.message} ({t.common.optional})
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 2 : 3}
            className="w-full rounded-lg border border-primary/20 bg-cream px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
            placeholder={t.inquiry.messagePlaceholder}
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          {t.common.submitInquiry}
        </button>
      </div>
    </form>
  );
}
