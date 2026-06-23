"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo({ variant = "default" }: { variant?: "default" | "header" | "footer" }) {
  const isFooter = variant === "footer";
  const width = variant === "header" ? 170 : isFooter ? 155 : 200;
  const height = Math.round(width / 1.95);
  const src = isFooter
    ? "/images/hero/RITM Logo White.svg"
    : "/images/hero/RITM Logo Final.svg";

  return (
    <Link href="/" className="group shrink-0 transition-transform group-hover:scale-[1.03]">
      <Image
        src={src}
        alt="RITM - Raboche Institute of Technology & Management"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </Link>
  );
}
