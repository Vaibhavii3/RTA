"use client";

import QuickInquiryForm from "@/components/QuickInquiryForm";
import { instituteInfo } from "@/data/institute";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">{t.contact.badge}</span>
          <h1 className="section-heading mt-2 text-4xl font-bold text-white sm:text-5xl">{t.contact.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="card p-6 lg:p-8">
              <h2 className="section-heading text-xl font-semibold text-primary">{t.institute.name}</h2>
              <p className="mt-2 text-sm italic text-warm-gray">{t.institute.affiliation}</p>
              <p className="mt-1 text-sm font-medium text-primary">{t.institute.address}</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent">📞</span>
                  <div>
                    <p className="text-sm font-medium text-primary">{t.common.phone}</p>
                    <a href={`tel:${instituteInfo.phone}`} className="text-sm text-warm-gray hover:text-accent-dark">
                      {instituteInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent">✉️</span>
                  <div>
                    <p className="text-sm font-medium text-primary">{t.common.email}</p>
                    <a href={`mailto:${instituteInfo.email}`} className="text-sm text-warm-gray hover:text-accent-dark">
                      {instituteInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent">📍</span>
                  <div>
                    <p className="text-sm font-medium text-primary">{t.common.address}</p>
                    <p className="text-sm text-warm-gray">{t.institute.address}</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${instituteInfo.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20admissions%20at%20RITM.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#1da851] hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.common.chatWhatsApp}
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src={instituteInfo.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.contact.mapTitle}
                className="w-full"
              />
            </div>
          </div>

          <QuickInquiryForm />
        </div>
      </section>
    </>
  );
}
