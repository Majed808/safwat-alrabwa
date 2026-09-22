"use client";

import Image from "next/image";
import { useState } from "react";
import { facadeModels, type FacadeImage } from "@/data/facades";
import Reveal from "./Reveal";

export default function FacadeGallery() {
  const [lightbox, setLightbox] = useState<FacadeImage | null>(null);

  return (
    <section id="facades" className="bg-charcoal text-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black">معرض الواجهات</h2>
        </Reveal>

        {facadeModels.map((model, mi) => (
          <Reveal key={model.id} delay={mi * 100} className="mb-20 last:mb-0">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">{model.title}</h3>
                <p className="text-offwhite/60 mt-1">{model.description}</p>
              </div>
              <div className="flex gap-2">
                {model.units.map((u) => (
                  <span
                    key={u}
                    className="text-xs font-bold border border-offwhite/30 rounded-full px-3 py-1 text-offwhite/70"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setLightbox(model.hero)}
              className="relative block w-full rounded-2xl overflow-hidden aspect-[16/10] mb-4 group"
            >
              <Image
                src={model.hero.src}
                alt={model.hero.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute bottom-4 left-4 bg-black/50 text-offwhite text-xs rounded-full px-3 py-1.5">
                اضغط للتكبير
              </span>
            </button>

            {model.gallery.length > 1 && (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {model.gallery.map((img) => (
                  <button
                    key={img.src}
                    onClick={() => setLightbox(img)}
                    className="relative aspect-square rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="200px"
                      className="object-cover hover:opacity-80 transition-opacity"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
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
          <div className="relative w-full h-full max-w-6xl">
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
