"use client";

import { useState } from "react";
import {
  nearbyCategories,
  nearbyPlaces,
  projectLocation,
  directionsUrl,
  type NearbyCategory,
} from "@/data/location";
import Reveal from "./Reveal";

export default function LocationSection() {
  const [active, setActive] = useState<NearbyCategory>("shopping");

  const mapSrc = `https://www.google.com/maps?q=${projectLocation.lat},${projectLocation.lng}&z=15&output=embed`;
  const filtered = nearbyPlaces.filter((p) => p.category === active);

  return (
    <section id="location" className="mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-32">
      <Reveal className="text-center mb-14">
        <p className="text-beige text-sm tracking-[0.3em] uppercase mb-3">الموقع</p>
        <h2 className="text-3xl md:text-5xl font-black text-charcoal">
          موقع يختصر عليك الكثير
        </h2>
        <p className="text-charcoal/60 mt-4 max-w-xl mx-auto">
          صفوة الربوة في حي الربوة بالرياض — إحداثيات دقيقة، وكل ما تحتاجه على مقربة.
        </p>
      </Reveal>

      <Reveal className="grid lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-black/10 aspect-[4/3] md:aspect-[16/10]">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            loading="lazy"
            title="خريطة موقع صفوة الربوة"
            style={{ border: 0 }}
          />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-5">
          <a
            href={projectLocation.googleMapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-teal text-offwhite font-bold px-6 py-3.5 text-sm hover:bg-teal-dark transition-colors"
          >
            فتح الموقع في خرائط Google
          </a>

          <div className="flex flex-wrap gap-2">
            {nearbyCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`text-sm rounded-full px-4 py-2 border transition-colors ${
                  active === cat.id
                    ? "bg-teal text-offwhite border-teal"
                    : "border-black/15 text-charcoal/70 hover:border-teal/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {filtered.length === 0 && (
              <p className="text-sm text-charcoal/50">سيتم إضافة أماكن هذه الفئة لاحقا.</p>
            )}
            {filtered.map((place) => (
              <div
                key={place.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-black/10 px-4 py-3"
              >
                <span className="text-sm font-medium text-charcoal">{place.name}</span>
                <a
                  href={directionsUrl(place.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-teal shrink-0 border border-teal/30 rounded-full px-3 py-1.5 hover:bg-teal hover:text-offwhite transition-colors"
                >
                  الاتجاهات
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-charcoal/40 leading-relaxed">
            زر &quot;الاتجاهات&quot; يفتح خرائط Google محسوبا من الموقع الفعلي للمشروع
            ليعرض لك المسافة والوقت الحقيقيين لحظة الضغط.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
