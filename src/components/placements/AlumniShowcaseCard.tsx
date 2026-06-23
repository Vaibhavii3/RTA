"use client";

import Image from "next/image";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AlumniShowcaseCard({
  name,
  role,
  company,
  location,
  bgImage,
}: {
  name: string;
  role: string;
  company: string;
  location: string;
  bgImage: string;
}) {
  return (
    <article className="relative flex h-[420px] w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(15,40,71,0.1)]">
      <div className="relative h-[180px] shrink-0 overflow-hidden">
        <Image src={bgImage} alt="" fill className="object-cover blur-[1px] scale-105" sizes="(max-width:1024px) 50vw, 400px" />
        <div className="absolute inset-0 bg-primary/25" />
      </div>

      <div className="absolute left-1/2 top-[180px] z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full border-[5px] border-white bg-primary text-2xl font-bold text-accent shadow-md">
          {initials(name)}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center px-5 pb-8 pt-16 text-center">
        <span className="text-3xl leading-none text-accent">&ldquo;</span>
        <h3 className="section-heading mt-1 text-lg font-bold leading-snug text-primary">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-accent">{role}</p>
        <p className="mt-2 text-sm leading-snug text-primary/80">{company}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
          <svg className="h-4 w-4 shrink-0 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
          </svg>
          {location}
        </p>
      </div>
    </article>
  );
}
