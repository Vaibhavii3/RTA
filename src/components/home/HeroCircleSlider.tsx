"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroCircleSlides } from "@/data/institute";

export default function HeroCircleSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroCircleSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute -left-16 top-1/2 z-0 hidden -translate-y-1/2 lg:block xl:-left-10">
      <div className="relative h-56 w-56 overflow-hidden rounded-full xl:h-64 xl:w-64">
        {heroCircleSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            sizes="256px"
            priority={i === 0}
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}
