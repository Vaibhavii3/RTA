"use client";

import { useState } from "react";
import Image from "next/image";
import { useHomeExtras } from "@/hooks/useHomeExtras";
import { instituteInfo } from "@/data/institute";

const chefHatPath = (
  <>
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </>
);

export default function FAQSection() {
  const extras = useHomeExtras();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent/50" />
            <span className="section-badge">FAQs</span>
            <span className="h-px w-8 bg-accent/50" />
          </div>
          <div className="mt-3 flex justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-accent-dark">
              {chefHatPath}
            </svg>
          </div>
          <h2 className="section-heading mx-auto mt-3 max-w-3xl text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            {extras.faq.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-warm-gray">{extras.faq.subtitle}</p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          {/* Accordion */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            {extras.faq.items.map((item, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={item.q}
                  className={`border-b border-primary/10 last:border-0 ${open ? "border-l-4 border-l-accent bg-cream/50" : ""}`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-base font-bold transition-colors ${
                        open ? "border-accent bg-accent text-primary-dark" : "border-accent/50 text-accent-dark"
                      }`}
                    >
                      {open ? "−" : "+"}
                    </span>
                    <span className="flex-1 font-semibold text-primary">{item.q}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-4 w-4 shrink-0 text-accent transition-transform ${open ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {open && (
                    <div className="px-5 pb-5 pl-16 text-sm leading-relaxed text-warm-gray">{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need Help card */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative">
              <Image
                src="/images/hero/R-1%20(2).jpg"
                alt="Need help"
                width={800}
                height={500}
                className="h-full w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-primary-dark/80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary-dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    {chefHatPath}
                  </svg>
                </div>
                <h3 className="section-heading mt-4 text-2xl font-bold">Need Help?</h3>
                <p className="section-heading text-2xl font-bold text-accent">We&apos;re Here for You!</p>
                <p className="mx-auto mt-3 max-w-sm text-sm text-white/80">
                  Our admission experts are ready to guide you in choosing the right career path.
                </p>
                <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                  <a
                    href={`https://wa.me/${instituteInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-primary-dark transition-colors hover:bg-accent-dark"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <a
                    href={`tel:${instituteInfo.phone}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
