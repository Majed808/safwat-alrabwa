import Image from "next/image";
import { partners } from "@/data/partners";
import Reveal from "./Reveal";

export default function PartnersSection() {
  return (
    <section className="bg-beige-light/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
            شركاء النجاح
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            نختار لصفوة الربوة أسماء موثوقة في كل تفصيلة — من الحديد إلى آخر خلاط في الحمام.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {partners.map((p) =>
            p.logo ? (
              <div
                key={p.name}
                className="group rounded-2xl bg-white border border-black/10 px-5 py-7 flex flex-col items-center justify-center text-center gap-3 transition-colors hover:border-teal/40"
              >
                <div className="h-16 w-full flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={200}
                    height={64}
                    className="max-h-16 w-auto max-w-[85%] object-contain"
                  />
                </div>
                <span className="text-[11px] text-charcoal/45">
                  {p.name} · {p.category}
                </span>
              </div>
            ) : (
              <div
                key={p.name}
                className="group rounded-2xl bg-offwhite border border-black/10 px-4 py-6 flex flex-col items-center justify-center text-center gap-1.5 transition-colors hover:border-teal/40"
              >
                <span className="text-lg font-black text-teal tracking-tight">
                  {p.name}
                </span>
                <span className="text-[11px] text-charcoal/45">{p.category}</span>
              </div>
            )
          )}
        </Reveal>
      </div>
    </section>
  );
}
