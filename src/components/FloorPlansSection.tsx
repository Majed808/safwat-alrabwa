"use client";

import Image from "next/image";
import { useState } from "react";
import { floorPlanModels, type FloorPlanImage } from "@/data/floorplans";
import Reveal from "./Reveal";

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

        {floorPlanModels.map((model, mi) => (
          <Reveal key={model.id} delay={mi * 100} className="mb-20 last:mb-0">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal">{model.title}</h3>
              <p className="text-charcoal/55 mt-1">{model.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {model.floors.map((floor) => (
                <div
                  key={`${model.id}-${floor.floorLabel}`}
                  className="rounded-2xl overflow-hidden border border-black/10 bg-offwhite"
                >
                  <button
                    onClick={() => setLightbox(floor)}
                    className="relative block w-full aspect-[4/3] group"
                  >
                    <Image
                      src={floor.src}
                      alt={floor.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain bg-white transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 left-3 bg-black/50 text-offwhite text-xs rounded-full px-3 py-1.5">
                      اضغط للتكبير
                    </span>
                  </button>
                  <div className="p-5">
                    <h4 className="font-bold text-teal mb-3">{floor.floorLabel}</h4>
                    <ul className="flex flex-wrap gap-2">
                      {floor.rooms.map((room) => (
                        <li
                          key={room}
                          className="text-xs text-charcoal/70 bg-charcoal/5 rounded-full px-3 py-1.5"
                        >
                          {room}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
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
