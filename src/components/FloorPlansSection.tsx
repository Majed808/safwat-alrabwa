"use client";

import Image from "next/image";
import { useState } from "react";
import { floorPlanModels, type FloorPlanImage } from "@/data/floorplans";
import { unitAreas } from "@/data/project-specs";
import { summarizeModel } from "@/data/floorplan-summary";
import Reveal from "./Reveal";

const icons = {
  bed: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M3 18v2M3 18h18M21 18v2M5 9V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bath: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 12V6a2 2 0 0 1 3.5-1.3M4 19l-1 2M20 19l1 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M4 11h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 11a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4M9 7V5M13 7V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M4 12h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1ZM5 17v2M19 17v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  elevator: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9l3-3 3 3M9 15l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M4 16v-3.5L6 8h12l2 4.5V16M4 16a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1H4v1Zm16 0a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1h3v1ZM4 12.5h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="14" r=".6" fill="currentColor" />
      <circle cx="16.5" cy="14" r=".6" fill="currentColor" />
    </svg>
  ),
  prayer: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M12 3c-2.5 2-2.5 6 0 8-3.5 0-6 2.7-6 6v2h12v-2c0-3.3-2.5-6-6-6 2.5-2 2.5-6 0-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  maid: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  roof: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M3 11 12 4l9 7M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function StatChip({ icon, value, label }: { icon: keyof typeof icons; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="w-14 h-14 rounded-full bg-teal/10 text-teal flex items-center justify-center">
        {icons[icon]}
      </div>
      <p className="text-lg font-black text-charcoal leading-none">{value}</p>
      <p className="text-[11px] text-charcoal/55">{label}</p>
    </div>
  );
}

export default function FloorPlansSection() {
  const [lightbox, setLightbox] = useState<FloorPlanImage | null>(null);

  return (
    <section id="floorplans" className="bg-beige-light/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <p className="text-beige text-sm tracking-[0.3em] uppercase mb-3">
            من المخطط المعماري التنفيذي المعتمد
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal">
            مخطط الوحدة
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-xl mx-auto">
            توزيع الغرف الفعلي لكل دور، مباشرة من المخطط الرسمي — اضغط على أي مخطط لتكبيره.
          </p>
        </Reveal>

        {floorPlanModels.map((model, mi) => {
          const summary = summarizeModel(model);
          const area = unitAreas.find((a) => a.model === model.title);

          return (
            <Reveal key={model.id} delay={mi * 100} className="mb-20 last:mb-0">
              <div className="rounded-3xl border border-black/10 bg-offwhite p-5 md:p-8">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal">{model.title}</h3>
                    <p className="text-charcoal/55 mt-1">{model.subtitle}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal text-offwhite px-5 py-2.5">
                    <span className="text-xs text-offwhite/75">سعر البيع</span>
                    <span className="text-lg font-black">{model.price}</span>
                    <Image
                      src="/images/icons/sar-symbol.svg"
                      alt="ريال سعودي"
                      width={18}
                      height={20}
                      className="h-[18px] w-auto brightness-0 invert"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {model.floors.map((floor) => (
                    <button
                      key={`${model.id}-${floor.floorLabel}`}
                      onClick={() => setLightbox(floor)}
                      className="relative block w-full aspect-[4/3] group rounded-2xl overflow-hidden border border-black/10 bg-white"
                    >
                      <Image
                        src={floor.src}
                        alt={floor.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <span className="absolute top-3 right-3 bg-teal text-offwhite text-xs font-bold rounded-full px-3 py-1.5">
                        {floor.floorLabel}
                      </span>
                      <span className="absolute bottom-3 left-3 bg-black/50 text-offwhite text-xs rounded-full px-3 py-1.5">
                        اضغط للتكبير
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 mb-8 py-6 border-y border-black/5">
                  <StatChip icon="bed" value={String(summary.bedrooms)} label="غرف نوم" />
                  <StatChip icon="bath" value={String(summary.bathrooms)} label="دورات مياه" />
                  <StatChip icon="sofa" value={String(summary.familyHalls)} label="صالة عائلية" />
                  <StatChip icon="kitchen" value={String(summary.kitchens)} label="مطبخ" />
                  {summary.parkingSpots > 0 && (
                    <StatChip icon="car" value={String(summary.parkingSpots)} label="مواقف خاصة" />
                  )}
                  {summary.hasElevator && <StatChip icon="elevator" value="✓" label="مصعد" />}
                  {summary.hasMaidRoom && <StatChip icon="maid" value="✓" label="غرفة خادمة" />}
                  {summary.hasPrayerRoom && <StatChip icon="prayer" value="✓" label="مصلى" />}
                  {summary.hasRoof && <StatChip icon="roof" value="✓" label="أسطح" />}
                </div>

                {area && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 flex items-center justify-between rounded-xl bg-teal-dark text-offwhite px-5 py-3.5">
                      <span className="text-sm text-offwhite/75">مساحة الصك</span>
                      <span className="font-black">{area.deedArea}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between rounded-xl bg-teal-dark text-offwhite px-5 py-3.5">
                      <span className="text-sm text-offwhite/75">مجموع مسطح البناء</span>
                      <span className="font-black">{area.builtUpArea}</span>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="إغلاق"
            className="absolute top-5 left-5 text-offwhite text-3xl leading-none z-10"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div className="relative w-full h-full max-w-5xl">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
