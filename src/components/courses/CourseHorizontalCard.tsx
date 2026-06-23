"use client";

import { useState } from "react";
import Image from "next/image";
import { courses } from "@/data/courses";
import CourseDetailModal from "@/components/courses/CourseDetailModal";
import { useLanguage } from "@/context/LanguageContext";
import type { CourseTranslation } from "@/i18n/translations";

export default function CourseHorizontalCard({
  courseId,
  index,
}: {
  courseId: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const course = t.courses.items[courseId] as CourseTranslation | undefined;
  const courseData = courses.find((c) => c.id === courseId);

  if (!course || !courseData) return null;

  const isLocalImage = courseData.image.startsWith("/");
  const programNo = String(index + 1).padStart(2, "0");

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl sm:flex-row">
        <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-auto sm:w-[38%] sm:min-h-[200px]">
          <Image
            src={courseData.image}
            alt={courseData.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 33vw"
            unoptimized={isLocalImage}
          />
          <span className="absolute left-0 top-0 bg-accent px-3 py-2 text-sm font-bold text-primary-dark">
            {programNo}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3 className="section-heading text-base font-bold leading-snug text-primary sm:text-[1.05rem]">
            {course.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-warm-gray">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              {course.eligibility}
            </span>
          </div>

          <p className="mt-3 flex-1 text-xs leading-relaxed text-warm-gray line-clamp-4 sm:text-sm">{course.description}</p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            {t.courses.viewDetails}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </article>

      <CourseDetailModal courseId={courseId} index={index} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
