import { partners } from "@/data/partners";
import Reveal from "./Reveal";

export default function PartnersSection() {
  return (
    <section className="bg-beige-light/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <p className="text-beige text-sm tracking-[0.3em] uppercase mb-3">شعارات</p>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-4">
            شركاء النجاح
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            نختار لصفوة الربوة أسماء موثوقة في كل تفصيلة — من الحديد إلى آخر خلاط في الحمام.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl bg-offwhite border border-black/10 px-4 py-6 flex flex-col items-center justify-center text-center gap-1.5 transition-colors hover:border-teal/40"
            >
              <span className="text-lg font-black text-teal tracking-tight">
                {p.name}
              </span>
              <span className="text-[11px] text-charcoal/45">{p.category}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
