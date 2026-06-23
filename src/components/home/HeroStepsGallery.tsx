"use client";

import Image from "next/image";
import { heroStepImages } from "@/data/institute";

const stepConfig = [
  { offset: "translate-y-0", height: "h-24 sm:h-28" },
  { offset: "translate-y-8", height: "h-28 sm:h-32" },
  { offset: "translate-y-2", height: "h-24 sm:h-28" },
  { offset: "translate-y-10", height: "h-24 sm:h-28" },
  { offset: "translate-y-5", height: "h-28 sm:h-32" },
  { offset: "translate-y-12", height: "h-24 sm:h-28" },
];

export default function HeroStepsGallery() {
  return (
    <div className="relative mx-auto h-[300px] max-w-md sm:h-[340px] sm:max-w-lg lg:ml-auto lg:mr-0 lg:h-[380px] lg:max-w-xl">
      <div className="grid h-full grid-cols-2 gap-2 sm:gap-3">
        {heroStepImages.map((img, i) => (
          <div
            key={img.src}
            className={`relative overflow-hidden rounded-2xl shadow-lg ${stepConfig[i].height} ${stepConfig[i].offset}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 40vw, 18vw"
              priority={i < 2}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
