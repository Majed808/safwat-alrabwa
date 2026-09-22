"use client";

import Image from "next/image";
import { useState } from "react";
import { sitePhotoGroups, type SitePhoto } from "@/data/site-photos";
import Reveal from "./Reveal";

export default function SitePhotosSection() {
  const [lightbox, setLightbox] = useState<SitePhoto | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-32">
      <Reveal className="text-center mb-14">
        <p className="text-beige text-sm tracking-[0.3em] uppercase mb-3">
          تصوير فعلي من الموقع
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-charcoal">
          الواقع كما هو
        </h2>
        <p className="text-charcoal/60 mt-4 max-w-xl mx-auto">
          لقطات حقيقية من داخل الوحدات أثناء التنفيذ — بلا تجميل أو تعديل.
        </p>
      </Reveal>

      {sitePhotoGroups.map((group, gi) => (
        <Reveal key={group.id} delay={gi * 100} className="mb-16 last:mb-0">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-charcoal">{group.title}</h3>
            <div className="flex gap-2">
              {group.units.map((u) => (
                <span
                  key={u}
                  className="text-xs font-bold border border-black/15 rounded-full px-3 py-1 text-charcoal/60"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {group.photos.map((photo) => (
              <button
                key={photo.src}
                onClick={() => setLightbox(photo)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </Reveal>
      ))}

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
          <div className="relative w-full h-full max-w-4xl">
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
