"use client";

import Image from "next/image";
import Link from "next/link";
import AlumniCarousel from "@/components/placements/AlumniCarousel";
import { useLanguage } from "@/context/LanguageContext";

function ChefHatIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`text-accent ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3C9.5 3 7.5 4.5 7 6.5 5.5 7 4.5 8.5 4.5 10c0 1.2.5 2.3 1.3 3.1V20c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-6.9c.8-.8 1.3-1.9 1.3-3.1 0-1.5-1-2.9-2.5-3.5-.5-2-2.5-3.5-5-3.5z" />
    </svg>
  );
}

export default function PlacementsContent() {
  const { t } = useLanguage();
  const p = t.placements;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-white lg:min-h-[72vh]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-[52%] opacity-[0.08]">
          <svg className="h-full w-full" viewBox="0 0 700 500" preserveAspectRatio="xMidYMid slice">
            <circle cx="100" cy="200" r="5" fill="#c9a227" />
            <circle cx="250" cy="140" r="5" fill="#c9a227" />
            <circle cx="400" cy="220" r="5" fill="#c9a227" />
            <circle cx="550" cy="160" r="5" fill="#c9a227" />
            <path d="M100 200 Q250 140 400 220 T550 160" stroke="#c9a227" strokeWidth="1.5" fill="none" strokeDasharray="5 8" />
          </svg>
        </div>

        {/* Full-height curved image — right bleed */}
        <div className="absolute bottom-0 right-0 top-0 hidden w-[56%] lg:block">
          <div className="relative h-full w-full overflow-hidden rounded-l-[999px] border-l-[3px] border-accent shadow-[-20px_0_60px_rgba(15,40,71,0.12)]">
            <Image
              src="/images/hero/R-1%20(2).jpg"
              alt="RITM alumni success"
              fill
              className="object-cover object-center"
              sizes="56vw"
              priority
              unoptimized
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex h-full min-h-[620px] max-w-[1320px] items-center px-5 sm:px-8 lg:min-h-[72vh] lg:px-12">
          <div className="w-full max-w-[480px] py-16 lg:py-20">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-accent" />
              <ChefHatIcon />
              <span className="h-px w-12 bg-accent" />
            </div>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">{p.badge}</p>

            <h1 className="section-heading mt-4 text-[2.75rem] font-bold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              <span className="text-primary">{p.titleLine1} </span>
              <span className="text-accent">{p.titleLine2}</span>
            </h1>

            <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-warm-gray">{p.subtitle}</p>

            <Link href="#alumni" className="btn-blue mt-9 inline-flex gap-2 rounded-full px-8 py-3.5 text-sm">
              {p.exploreSuccess}
              <span className="text-accent">→</span>
            </Link>
          </div>
        </div>

        {/* Mobile image */}
        <div className="relative mx-5 mb-8 mt-2 h-[280px] overflow-hidden rounded-3xl border-l-4 border-accent lg:hidden">
          <Image src="/images/hero/R-1%20(2).jpg" alt="" fill className="object-cover" unoptimized />
        </div>
      </section>

      {/* Alumni */}
      <section id="alumni" className="bg-[#f7f4ef] pb-20 pt-14 sm:pt-16">
        <div className="mx-auto w-full max-w-[min(100%,1680px)] px-2 sm:px-4 lg:px-6">
          <div className="text-center">
            <p className="font-display text-2xl italic text-accent sm:text-[1.65rem]">{p.alumniProud}</p>

            <div className="mt-4 flex items-center justify-center gap-5">
              <span className="hidden h-px w-20 bg-accent/40 sm:block" />
              <span className="text-sm text-accent">◆</span>
              <h2 className="section-heading text-3xl font-bold text-primary sm:text-4xl lg:text-[2.5rem]">
                {p.alumniNetwork}
              </h2>
              <span className="text-sm text-accent">◆</span>
              <span className="hidden h-px w-20 bg-accent/40 sm:block" />
            </div>

            <div className="mt-5 flex justify-center">
              <ChefHatIcon className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-14">
            <AlumniCarousel />
          </div>

          <div className="mt-20 rounded-2xl bg-primary px-6 py-10 text-center sm:px-10">
            <h2 className="section-heading text-xl font-bold text-white sm:text-2xl">{p.successTitle}</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/75">{p.successDesc}</p>
            <Link href="/contact" className="btn-primary mt-7 inline-flex text-sm">
              {t.nav.applyNextIntake}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
