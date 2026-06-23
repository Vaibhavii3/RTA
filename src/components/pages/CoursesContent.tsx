"use client";

import Image from "next/image";
import Link from "next/link";
import CourseHorizontalCard from "@/components/courses/CourseHorizontalCard";
import { courseIds } from "@/i18n/translations";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
];

const featureIcons = [
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="4" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
];

export default function CoursesContent() {
  const { t } = useLanguage();
  const c = t.courses;

  return (
    <>
      <section className="relative min-h-[500px] overflow-hidden sm:min-h-[540px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/R-1%20(5).jpg"
            alt=""
            fill
            className="object-cover object-[70%_center] sm:object-right"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream from-0% via-cream/95 via-[38%] to-transparent to-[72%]" />
        </div>

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-12 sm:min-h-[540px] sm:px-6 sm:py-14 lg:px-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{c.pageBadge}</span>
              <span className="h-px w-8 bg-accent" />
            </div>

            <h1 className="mt-5">
              <span className="block text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">{c.heroLine1}</span>
              <span className="section-heading mt-1 block text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
                {c.heroLine2}
              </span>
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-warm-gray sm:text-base">{c.heroSubtitle}</p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {c.heroPillars.map((label, i) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent-dark">
                    {pillarIcons[i]}
                  </div>
                  <p className="mt-2 text-[10px] font-medium leading-tight text-primary sm:text-xs">{label}</p>
                </div>
              ))}
            </div>

            <Link href="#course-list" className="btn-primary mt-8 inline-flex gap-2 px-7 py-3 text-sm shadow-md">
              {c.explorePrograms}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/5 bg-[#f5f0e8]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-10">
          {c.featureBar.map((item, i) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="shrink-0 text-warm-gray">{featureIcons[i]}</div>
              <div>
                <p className="text-sm font-bold text-primary">{item.title}</p>
                <p className="mt-0.5 text-xs text-warm-gray">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="course-list" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{c.pageBadge}</span>
              <span className="h-px w-10 bg-accent" />
            </div>
            <h2 className="section-heading mt-4 text-3xl font-bold text-primary sm:text-4xl">{c.sectionTitle}</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {courseIds.map((id, i) => (
              <CourseHorizontalCard key={id} courseId={id} index={i} />
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-primary p-8 text-center sm:p-10">
            <h2 className="section-heading text-xl font-bold text-white sm:text-2xl">{c.notSureTitle}</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/75">{c.notSureDesc}</p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex text-sm">
              {c.freeCounseling}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
