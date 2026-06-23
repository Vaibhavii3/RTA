"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import { useLanguage } from "@/context/LanguageContext";
import type { CourseTranslation } from "@/i18n/translations";

type CourseDetailModalProps = {
  courseId: string;
  index: number;
  open: boolean;
  onClose: () => void;
};

export default function CourseDetailModal({ courseId, index, open, onClose }: CourseDetailModalProps) {
  const { t } = useLanguage();
  const course = t.courses.items[courseId] as CourseTranslation | undefined;
  const courseData = courses.find((c) => c.id === courseId);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !course || !courseData) return null;

  const isLocalImage = courseData.image.startsWith("/");
  const programNo = String(index + 1).padStart(2, "0");
  const careerTags = course.careerPaths.split("·").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm"
        aria-label="Close"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="relative h-48 shrink-0 sm:h-56">
          <Image
            src={courseData.image}
            alt={courseData.imageAlt}
            fill
            className="object-cover"
            sizes="672px"
            unoptimized={isLocalImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <span className="absolute left-4 top-4 bg-accent px-3 py-1.5 text-sm font-bold text-primary-dark">
            {t.common.program} {programNo}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6">
          <h2 id="course-modal-title" className="section-heading text-xl font-bold text-primary sm:text-2xl">
            {course.title}
          </h2>

          {course.highlight && (
            <span className="mt-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark">
              {course.highlight}
            </span>
          )}

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-warm-gray">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
              {course.eligibility}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-warm-gray sm:text-base">{course.description}</p>

          <div className="mt-5 rounded-xl bg-cream p-4">
            <ul className="space-y-2">
              {course.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-primary">
                  <span className="mt-0.5 font-bold text-accent">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {careerTags.length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary/60">{t.courses.careerPathsLabel}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {careerTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-primary/15 bg-white px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" onClick={onClose} className="btn-primary text-sm">
              {t.common.enquireNow}
            </Link>
            <button type="button" onClick={onClose} className="btn-secondary text-sm">
              {t.courses.closeDetails}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
