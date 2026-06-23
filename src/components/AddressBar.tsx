"use client";

import { instituteInfo } from "@/data/institute";

export default function AddressBar() {
  return (
    <div className="border-b border-primary/6 bg-cream/80 py-2.5">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center gap-2 px-5 text-center text-xs text-warm-gray sm:px-8 sm:text-sm lg:px-12">
        <svg className="h-3.5 w-3.5 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span>{instituteInfo.address}</span>
      </div>
    </div>
  );
}
