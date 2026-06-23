"use client";

import { useState } from "react";
import AlumniShowcaseCard from "@/components/placements/AlumniShowcaseCard";
import { placements } from "@/data/placements";
import { useLanguage } from "@/context/LanguageContext";

export default function AlumniCarousel() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleCount = 4;
  const maxIndex = placements.length - 1;

  function prev() {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }

  function next() {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }

  const items = showAll
    ? placements
    : Array.from({ length: visibleCount }, (_, i) => placements[(index + i) % placements.length]);

  return (
    <div className="w-full">
      <div className="relative w-full">
        {!showAll && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute -left-1 top-[42%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-white text-lg text-accent shadow-md transition hover:bg-cream sm:-left-3 lg:-left-5"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute -right-1 top-[42%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-white text-lg text-accent shadow-md transition hover:bg-cream sm:-right-3 lg:-right-5"
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}

        <div
          className={`grid w-full gap-3 sm:gap-4 lg:gap-5 ${showAll ? "sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}
        >
          {items.map((placement) => {
            const student = t.placements.students[placement.id];
            return (
              <AlumniShowcaseCard
                key={`${placement.id}-${index}`}
                name={student?.name ?? placement.name}
                role={student?.role ?? placement.role}
                company={student?.company ?? placement.company}
                location={student?.location ?? placement.location}
                bgImage={placement.bgImage}
              />
            );
          })}
        </div>
      </div>

      {!showAll && (
        <div className="mt-12 text-center">
          <button type="button" onClick={() => setShowAll(true)} className="btn-blue px-10 py-3.5 text-sm">
            {t.placements.viewMoreAlumni} →
          </button>
        </div>
      )}
    </div>
  );
}
