import { projectSpecs } from "@/data/project-specs";
import Reveal from "./Reveal";

export default function SpecsSection() {
  return (
    <section id="specs" className="mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-32">
      <Reveal className="text-center mb-14">
        <p className="text-beige text-sm tracking-[0.3em] uppercase mb-3">المواصفات</p>
        <h2 className="text-3xl md:text-5xl font-black text-charcoal">
          التفاصيل التي تصنع الفرق
        </h2>
        <p className="text-charcoal/60 mt-4 max-w-xl mx-auto">
          سيتم تحديث هذا القسم أولا بأول عند توفر مواصفات التنفيذ الرسمية.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8">
        {projectSpecs.map((group, gi) => (
          <Reveal key={group.id} delay={gi * 100}>
            <div className="rounded-2xl border border-black/10 p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold text-teal mb-5">{group.title}</h3>
              <dl className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 py-2 border-b border-black/5 last:border-0"
                  >
                    <dt className="text-sm text-charcoal/70">{item.label}</dt>
                    <dd
                      className={`text-sm font-bold text-left ${
                        item.value.startsWith("[")
                          ? "text-charcoal/35 italic font-normal"
                          : "text-charcoal"
                      }`}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
