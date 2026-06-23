"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import HeroCircleSlider from "@/components/home/HeroCircleSlider";
import HeroStepsGallery from "@/components/home/HeroStepsGallery";

export default function EditorialHero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white">
      <HeroCircleSlider />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-6 lg:py-20">
          {/* Text — left */}
          <div className="relative z-10 lg:col-span-5 lg:pl-4 xl:pl-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-warm-gray">
              {t.home.badge}
            </span>

            <h1 className="mt-5">
              <span className="block text-2xl font-light tracking-tight text-warm-gray sm:text-3xl lg:text-[2rem]">
                {t.home.heroLine1}
              </span>
              <span className="section-heading mt-2 block text-6xl font-bold leading-[0.95] text-primary sm:text-7xl lg:text-[5.5rem]">
                {t.home.heroLine2}
              </span>
            </h1>

            <div className="hero-dash mt-8" />

            <p className="mt-8 max-w-md text-base leading-relaxed text-warm-gray">{t.home.heroPara1}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary px-8 py-3.5 text-base shadow-lg">
                {t.home.heroApplyIntake}
              </Link>
              <Link href="/contact" className="btn-outline-accent px-8 py-3.5 text-base">
                {t.home.heroGetInfo}
              </Link>
            </div>
          </div>

          {/* Steps gallery — right */}
          <div className="lg:col-span-7 lg:col-start-6">
            <HeroStepsGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
