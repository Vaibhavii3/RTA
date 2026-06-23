"use client";

import Image from "next/image";
import Link from "next/link";
import GlobalCareerGallery from "@/components/GlobalCareerGallery";
import CourseCard from "@/components/CourseCard";
import FAQSection from "@/components/home/FAQSection";
import EditorialHero from "@/components/home/EditorialHero";
import { globalCareerImages } from "@/data/gallery";
import { sectionImages } from "@/data/institute";
import { courseIds } from "@/i18n/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useHomeExtras } from "@/hooks/useHomeExtras";

const whyIcons = [
  // Hands-On Lab Training — flask/beaker
  <svg key="lab" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary">
    <path d="M9 3h6" />
    <path d="M10 3v6l-4 9a1 1 0 0 0 .9 1.45h10.2A1 1 0 0 0 18 18l-4-9V3" />
    <path d="M7.8 13.5h8.4" />
  </svg>,
  // 100% Placement Support — briefcase
  <svg key="brief" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary">
    <rect width="20" height="13" x="2" y="7" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 13h20" />
    <path d="M12 13v4" />
  </svg>,
  // International Standards — globe
  <svg key="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18" />
  </svg>,
];

const svgIconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7 text-primary",
};

const serviceIcons = [
  // Academic Programs — chef hat
  <svg key="hat" {...svgIconProps}>
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </svg>,
  // Placement Assistance — serving dome (cloche)
  <svg key="cloche" {...svgIconProps}>
    <path d="M3 18h18" />
    <path d="M4 18a8 8 0 0 1 16 0" />
    <path d="M12 6V4" />
    <circle cx="12" cy="4" r="1" />
  </svg>,
  // Hands-On Practical Training — utensils (fork & knife)
  <svg key="utensils" {...svgIconProps}>
    <path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2" />
    <path d="M6 2v20" />
    <path d="M18 2c-1.66 0-3 2-3 5v6h3Zm0 0v20" />
  </svg>,
  // Short-Term Skill Courses — coffee cup
  <svg key="coffee" {...svgIconProps}>
    <path d="M10 2v2M14 2v2M6 2v2" />
    <path d="M4 8h13a4 4 0 1 1 0 8h-1" />
    <path d="M4 8v9a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4V8" />
  </svg>,
];

const trainingIcons = [
  // Professional Kitchens — cooking pot
  <svg key="pot" {...svgIconProps}>
    <path d="M3 11h18" />
    <path d="M19 11v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8" />
    <path d="m5 8 14-3" />
  </svg>,
  // Luxury Hotel Operations — hotel building
  <svg key="hotel" {...svgIconProps}>
    <path d="M3 21h18" />
    <path d="M5 21V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16" />
    <path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01" />
    <path d="M10 21v-4h4v4" />
  </svg>,
  // Restaurant & Bar Service — cocktail glass
  <svg key="martini" {...svgIconProps}>
    <path d="M8 22h8" />
    <path d="M12 11v11" />
    <path d="m19 3-7 8-7-8Z" />
  </svg>,
  // Global Career Opportunities — globe
  <svg key="globe" {...svgIconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18" />
    <path d="M3 12h18" />
  </svg>,
];

const roadmapIconProps = { ...svgIconProps, className: "h-7 w-7 text-accent-dark" };

const roadmapIcons = [
  // Enroll — graduation cap
  <svg key="cap" {...roadmapIconProps}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
    <path d="M22 10v6" />
  </svg>,
  // Learn & Train — chef hat
  <svg key="rhat" {...roadmapIconProps}>
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </svg>,
  // Internship — globe
  <svg key="rglobe" {...roadmapIconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18" />
    <path d="M3 12h18" />
  </svg>,
  // Build Your Career — briefcase
  <svg key="case" {...roadmapIconProps}>
    <rect width="20" height="13" x="2" y="7" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 13h20" />
  </svg>,
];

const featureIconProps = { ...svgIconProps, className: "h-6 w-6 text-accent-dark" };

const sectorIconProps = { ...svgIconProps, className: "h-6 w-6 text-accent" };

const sectorIcons = [
  // Luxury Resorts — palm tree
  <svg key="palm" {...sectorIconProps}>
    <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
    <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
    <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
    <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
  </svg>,
  // Cruise Lines — ship
  <svg key="ship" {...sectorIconProps}>
    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
    <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
    <path d="M12 10v4M12 2v3" />
  </svg>,
  // Fine Dining — utensils
  <svg key="dining" {...sectorIconProps}>
    <path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2" />
    <path d="M6 2v20" />
    <path d="M18 2c-1.66 0-3 2-3 5v6h3Zm0 0v20" />
  </svg>,
  // Premium Cafés — coffee cup
  <svg key="cafe" {...sectorIconProps}>
    <path d="M10 2v2M14 2v2M6 2v2" />
    <path d="M4 8h13a4 4 0 1 1 0 8h-1" />
    <path d="M4 8v9a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4V8" />
  </svg>,
];

const destSvg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const destinations = [
  {
    name: "Cruise Lines",
    tag: "High Demand",
    desc: "Work aboard luxury international cruise fleets sailing across the globe.",
    img: "/images/opp/cruise.jpg",
    icon: (
      <svg {...destSvg} className="h-5 w-5">
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
        <path d="M12 10v4M12 2v3" />
      </svg>
    ),
  },
  {
    name: "Europe",
    tag: "Premium",
    desc: "Michelin-starred restaurants, historic castles and luxury alpine resorts.",
    img: "/images/opp/europe.jpg",
    icon: (
      <svg {...destSvg} className="h-5 w-5">
        <path d="M3 22h18" />
        <path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7" />
        <path d="m12 2 9 5H3l9-5Z" />
      </svg>
    ),
  },
  {
    name: "New Zealand",
    tag: "Work + Settle",
    desc: "Growing hospitality sector with strong work and residency pathways.",
    img: "/images/opp/new-zealand.jpg",
    icon: (
      <svg {...destSvg} className="h-5 w-5">
        <path d="M3 20h18L13.5 6a1.8 1.8 0 0 0-3 0L3 20Z" />
        <path d="m8.5 13 2-3 2 3" />
      </svg>
    ),
  },
  {
    name: "Dubai, UAE",
    tag: "Tax Benefits",
    desc: "Tax-free luxury hospitality hub with world-class hotels and resorts.",
    img: "/images/opp/dubai.jpg",
    icon: (
      <svg {...destSvg} className="h-5 w-5">
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    name: "Singapore",
    tag: "Global Hub",
    desc: "Asian luxury & fine dining capital with worldwide career exposure.",
    img: "/images/opp/singapore.jpg",
    icon: (
      <svg {...destSvg} className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18" />
      </svg>
    ),
  },
  {
    name: "Maldives",
    tag: "Island Paradise",
    desc: "World-famous island resorts offering unique luxury hospitality experiences.",
    img: "/images/opp/maldives.jpg",
    icon: (
      <svg {...destSvg} className="h-5 w-5">
        <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
        <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
        <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
        <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
      </svg>
    ),
  },
];

const roadmapFeatures = [
  {
    label: "Industry Experts",
    icon: (
      <svg {...featureIconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Practical Learning",
    icon: (
      <svg {...featureIconProps}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1" />
      </svg>
    ),
  },
  {
    label: "Global Opportunities",
    icon: (
      <svg {...featureIconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    label: "Career Growth",
    icon: (
      <svg {...featureIconProps}>
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </svg>
    ),
  },
];

export default function HomeContent() {
  const { t } = useLanguage();
  const extras = useHomeExtras();

  const stepCard = (i: number) => (
    <div className="card-hover relative p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span>{roadmapIcons[i]}</span>
      </div>
      <h4 className="section-heading mt-5 text-lg font-bold text-primary">{extras.roadmap.steps[i].title}</h4>
      <p className="mt-2 text-sm text-warm-gray">{extras.roadmap.steps[i].desc}</p>
    </div>
  );

  const emblem = (
    <div className="relative mx-auto flex aspect-square w-96 max-w-full items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30" />
      <div className="absolute inset-6 rounded-full border border-accent/20" />

      {/* Connector lines + nodes linking the circle to the four cards (desktop) */}
      <span
        className="absolute hidden h-0 w-36 border-t-2 border-dashed border-accent/50 lg:block"
        style={{ left: "5%", top: "28%", transformOrigin: "0 0", transform: "rotate(180deg)" }}
        aria-hidden="true"
      />
      <span
        className="absolute hidden h-0 w-36 border-t-2 border-dashed border-accent/50 lg:block"
        style={{ left: "95%", top: "28%", transformOrigin: "0 0", transform: "rotate(0deg)" }}
        aria-hidden="true"
      />
      <span
        className="absolute hidden h-0 w-36 border-t-2 border-dashed border-accent/50 lg:block"
        style={{ left: "5%", top: "72%", transformOrigin: "0 0", transform: "rotate(180deg)" }}
        aria-hidden="true"
      />
      <span
        className="absolute hidden h-0 w-36 border-t-2 border-dashed border-accent/50 lg:block"
        style={{ left: "95%", top: "72%", transformOrigin: "0 0", transform: "rotate(0deg)" }}
        aria-hidden="true"
      />
      <span className="absolute z-10 h-3 w-3 rounded-full bg-white shadow ring-2 ring-accent/60" style={{ left: "5%", top: "28%", transform: "translate(-50%,-50%)" }} />
      <span className="absolute z-10 h-3 w-3 rounded-full bg-white shadow ring-2 ring-accent/60" style={{ left: "95%", top: "28%", transform: "translate(-50%,-50%)" }} />
      <span className="absolute z-10 h-3 w-3 rounded-full bg-white shadow ring-2 ring-accent/60" style={{ left: "5%", top: "72%", transform: "translate(-50%,-50%)" }} />
      <span className="absolute z-10 h-3 w-3 rounded-full bg-white shadow ring-2 ring-accent/60" style={{ left: "95%", top: "72%", transform: "translate(-50%,-50%)" }} />

      <div className="relative h-80 w-80 max-w-full">
        <Image src="/images/hero/CAREER-ROADMAP.png" alt="Career roadmap" fill className="object-contain" sizes="320px" />
      </div>
    </div>
  );

  return (
    <>
      <EditorialHero />

      {/* Training Environment */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image src={sectionImages.training} alt={extras.training.title} fill className="object-cover" sizes="50vw" unoptimized />
            </div>
            <div>
              <span className="section-badge">{extras.training.badge}</span>
              <h2 className="section-heading mt-3 text-3xl font-bold text-primary sm:text-4xl">{extras.training.title}</h2>
              <p className="mt-4 text-warm-gray">{extras.training.desc}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {extras.training.features.map((f, i) => (
                  <div key={f.title} className="card-hover p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                      {trainingIcons[i]}
                    </div>
                    <h4 className="mt-3 font-bold text-primary">{f.title}</h4>
                    <p className="mt-1 text-xs text-warm-gray">{f.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/gallery" className="btn-blue mt-8 text-sm">
                {t.home.exploreCourses} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="section-badge">{extras.services.badge}</span>
              <h2 className="section-heading mt-3 text-3xl font-bold text-primary sm:text-4xl">{extras.services.title}</h2>
              <p className="mt-4 text-warm-gray">{extras.services.desc}</p>

              <div className="relative mt-6 flex h-80 w-full items-center justify-center">
                <div className="absolute h-72 w-72 rounded-full bg-accent/10" />
                <div className="relative h-[22rem] w-[22rem] max-w-full">
                  <Image
                    src="/images/hero/chef-hat.png"
                    alt="Chef hat"
                    fill
                    className="object-contain"
                    sizes="352px"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
              {extras.services.cards.map((card, i) => (
                <Link
                  key={card.title}
                  href="/courses"
                  className="card-hover group flex flex-col p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                    {serviceIcons[i]}
                  </div>
                  <h4 className="mt-5 font-bold text-primary">{card.title}</h4>
                  <p className="mt-2 text-sm text-warm-gray">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Roadmap */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent/50" />
              <span className="section-badge">{extras.roadmap.badge}</span>
              <span className="h-px w-8 bg-accent/50" />
            </div>
            <div className="mt-3 flex justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-accent-dark"
              >
                <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                <path d="M6 17h12" />
              </svg>
            </div>
            <h2 className="section-heading mx-auto mt-3 max-w-3xl text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              {extras.roadmap.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-warm-gray">{extras.roadmap.desc}</p>
          </div>

          {/* Roadmap — desktop */}
          <div className="mt-16 hidden grid-cols-3 items-center gap-8 lg:grid">
            <div className="relative z-20 flex flex-col gap-10">
              {stepCard(0)}
              {stepCard(2)}
            </div>
            <div className="relative z-0">{emblem}</div>
            <div className="relative z-20 flex flex-col gap-10">
              {stepCard(1)}
              {stepCard(3)}
            </div>
          </div>

          {/* Roadmap — mobile / tablet */}
          <div className="mt-12 lg:hidden">
            {emblem}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {stepCard(0)}
              {stepCard(1)}
              {stepCard(2)}
              {stepCard(3)}
            </div>
          </div>

          {/* Feature highlights */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 rounded-2xl border border-primary/5 bg-white p-6 shadow-lg sm:grid-cols-4">
            {roadmapFeatures.map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">{f.icon}</div>
                <p className="mt-3 text-sm font-semibold text-primary">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Global Career */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="section-badge">{extras.launch.badge}</span>
              <h2 className="section-heading mt-3 text-3xl font-bold text-primary sm:text-4xl">{extras.launch.title}</h2>
              <p className="mt-4 text-warm-gray">{extras.launch.desc}</p>
              <ul className="mt-6 space-y-3">
                {extras.launch.checks.map((item) => (
                  <li key={item} className="check-item">
                    <span className="check-mark">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-blue text-sm">{extras.launch.bookCounseling}</Link>
                <Link href="/courses" className="btn-secondary text-sm">{t.home.exploreCourses}</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-primary/5">
              <Image
                src="/images/hero/R-1%20(3).jpg"
                alt={extras.launch.title}
                fill
                className="object-cover"
                sizes="50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Career Opportunities */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="section-heading text-4xl font-bold text-primary sm:text-5xl">
              Global Career Opportunities
            </h2>
            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent/40" />
              <svg {...destSvg} className="h-6 w-6 text-accent-dark">
                <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                <path d="M6 17h12" />
              </svg>
              <span className="h-px w-10 bg-accent/40" />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-warm-gray">
              Launch your hospitality career across the world&apos;s most sought-after destinations.
            </p>
          </div>

          {/* Destination cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <div
                key={d.name}
                className="group overflow-hidden rounded-2xl border-b-[3px] border-accent/70 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-dark shadow-md">
                    {d.icon}
                  </div>
                  <span className="absolute bottom-3 left-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-dark shadow">
                    {d.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="section-heading text-xl font-bold text-primary">{d.name}</h3>
                  <div className="mt-2 h-0.5 w-8 rounded-full bg-accent" />
                  <p className="mt-3 text-sm leading-relaxed text-warm-gray">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Career Gallery + Placement Network */}
      <section className="gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18" />
                  <path d="M3 12h18" />
                </svg>
                {t.home.worldwide}
              </span>
              <h2 className="section-heading mt-3 text-3xl font-bold text-white">
                Your skills, <span className="text-accent">recognized worldwide.</span>
              </h2>
              <p className="mt-4 text-sm text-white/80">{t.home.globalCareerDesc}</p>
              <Link href="/placements" className="btn-primary mt-6 text-sm">
                {t.home.seePlacements} →
              </Link>
            </div>
            <div className="rounded-2xl bg-primary-dark/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">{extras.placementNetwork.badge}</span>
              <h3 className="mt-2 text-xl font-bold text-white">{extras.placementNetwork.title}</h3>
              <p className="mt-2 text-sm text-white/70">{extras.placementNetwork.desc}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {extras.placementNetwork.sectors.map((s, i) => (
                  <div key={s.title} className="rounded-xl bg-white/10 p-4 transition-colors hover:bg-white/15">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      {sectorIcons[i]}
                    </div>
                    <p className="mt-3 text-sm font-bold text-white">{s.title}</p>
                    <p className="text-xs text-white/60">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <GlobalCareerGallery images={globalCareerImages} />
          </div>
        </div>
      </section>

      {/* Why Choose RITM */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="section-badge">{extras.whySection.badge}</span>
              <h2 className="section-heading mt-3 text-3xl font-bold text-primary sm:text-4xl">
                {extras.whySection.title}{" "}
                <span className="text-accent">{extras.whySection.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-warm-gray">{extras.whySection.desc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/courses" className="btn-blue text-sm">{t.home.exploreCourses} →</Link>
                <Link href="/contact" className="btn-secondary text-sm">{extras.launch.bookCounseling}</Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-3xl shadow-xl">
              <Image src={sectionImages.whyChoose} alt="RITM" fill className="object-cover" sizes="50vw" unoptimized />
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {extras.whySection.cards.map((card, i) => (
              <div key={card.title} className="card-hover p-6 text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    {whyIcons[i]}
                  </div>
                </div>
                <h4 className="mt-3 font-bold text-primary">{card.title}</h4>
                <p className="mt-2 text-sm text-warm-gray">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="section-badge">{t.home.ourPrograms}</span>
            <h2 className="section-heading mt-2 text-3xl font-bold text-primary sm:text-4xl">{t.home.coursesTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-warm-gray">{t.home.coursesSubtitle}</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courseIds.map((id, i) => (
              <CourseCard key={id} courseId={id} index={i} compact />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/courses" className="btn-blue text-sm">
              {t.home.exploreCourses} →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </>
  );
}
