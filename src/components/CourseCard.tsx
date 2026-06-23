"use client";

import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/courses";
import { useLanguage } from "@/context/LanguageContext";
import type { CourseTranslation } from "@/i18n/translations";

export default function CourseCard({
  courseId,
  index = 0,
  compact = false,
}: {
  courseId: string;
  index?: number;
  compact?: boolean;
}) {
  const { t } = useLanguage();
  const course = t.courses.items[courseId] as CourseTranslation | undefined;
  const courseData = courses.find((c) => c.id === courseId);

  if (!course || !courseData) return null;

  const isLocalImage = courseData.image.startsWith("/");
  const features = compact ? course.features.slice(0, 2) : course.features;
  const programNo = String(index + 1).padStart(2, "0");
  const careerTags = course.careerPaths.split("·").map((s) => s.trim()).filter(Boolean);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-md ring-1 ring-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative bg-primary px-5 pb-14 pt-5">
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-1 select-none font-sans text-6xl font-bold leading-none text-white/[0.07]"
        >
          {programNo}
        </span>

        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
          {t.common.program} {index + 1}
        </p>
        <h3 className="section-heading mt-2 pr-10 text-lg font-bold leading-snug text-white">{course.title}</h3>

        <div className="mt-3 flex items-center gap-2 text-xs text-white/65">
          <span>{course.eligibility}</span>
          <span className="text-accent/60">|</span>
          <span>{course.duration}</span>
        </div>
      </div>

      <div className="relative -mt-10 mx-4 aspect-[5/3] overflow-hidden rounded-xl shadow-lg ring-2 ring-cream">
        <Image
          src={courseData.image}
          alt={courseData.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          unoptimized={isLocalImage}
        />
        {course.highlight && (
          <span className="absolute bottom-2 left-2 rounded-md bg-primary/90 px-2.5 py-1 text-[10px] font-semibold text-accent backdrop-blur-sm">
            {course.highlight}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="h-0 w-16 border-t-2 border-dashed border-accent/60" />

        <p className={`mt-4 text-sm leading-relaxed text-warm-gray ${compact ? "line-clamp-2" : "line-clamp-3"}`}>
          {course.description}
        </p>

        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-primary sm:text-sm">
              <span className="mt-0.5 shrink-0 font-bold text-accent">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {!compact && careerTags.length > 0 && (
          <div className="mt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary/50">{t.courses.careerPathsLabel}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {careerTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-primary/15 bg-white px-2 py-0.5 text-[10px] font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link
          href="/contact"
          className="btn-primary mt-5 w-full py-2.5 text-sm shadow-md transition-transform group-hover:scale-[1.02]"
        >
          {t.common.enquireNow}
        </Link>
      </div>
    </article>
  );
}
