import { projectSpecs, unitAreas } from "@/data/project-specs";
import Reveal from "./Reveal";

export default function SpecsSection() {
  return (
    <section id="specs" className="mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-32">
      <Reveal className="text-center mb-14">
        <p className="text-beige text-sm tracking-[0.3em] uppercase mb-3">المواصفات</p>
        <h2 className="text-3xl md:text-5xl font-black text-charcoal">
          التفاصيل التي تصنع الفرق
        </h2>
      </Reveal>

      <Reveal className="mb-8">
        <div className="rounded-2xl border border-black/10 overflow-hidden">
          <h3 className="text-xl font-bold text-teal px-6 md:px-8 pt-6 md:pt-8 pb-4">
            المساحات
          </h3>
          {/* جوال: بطاقات بدل جدول يحتاج تمرير جانبي */}
          <div className="sm:hidden px-4 pb-4 flex flex-col gap-3">
            {unitAreas.map((row) => (
              <div key={row.model} className="rounded-xl bg-offwhite/60 border border-black/5 p-4">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-bold text-charcoal">{row.model}</span>
                  <span className="text-xs text-charcoal/60">{row.description}</span>
                </div>
                <div className="flex items-center justify-between text-sm pt-2 border-t border-black/5">
                  <span className="text-charcoal/60">مساحة الصك</span>
                  <span className="font-bold text-charcoal">{row.deedArea}</span>
                </div>
                <div className="flex items-center justify-between text-sm pt-1.5">
                  <span className="text-charcoal/60">مجموع مسطح البناء</span>
                  <span className="font-bold text-charcoal">{row.builtUpArea}</span>
                </div>
              </div>
            ))}
          </div>

          {/* سطح المكتب/التابلت: جدول كامل */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-black/10 bg-offwhite/60">
                  <th className="text-right font-bold text-charcoal/70 px-6 md:px-8 py-3">النموذج</th>
                  <th className="text-right font-bold text-charcoal/70 px-4 py-3">الوصف</th>
                  <th className="text-left font-bold text-charcoal/70 px-4 py-3">مساحة الصك</th>
                  <th className="text-left font-bold text-charcoal/70 px-6 md:px-8 py-3">مجموع مسطح البناء</th>
                </tr>
              </thead>
              <tbody>
                {unitAreas.map((row) => (
                  <tr key={row.model} className="border-t border-black/5">
                    <td className="px-6 md:px-8 py-3.5 font-bold text-charcoal whitespace-nowrap">
                      {row.model}
                    </td>
                    <td className="px-4 py-3.5 text-charcoal/70 whitespace-nowrap">
                      {row.description}
                    </td>
                    <td className="px-4 py-3.5 text-left font-bold text-charcoal whitespace-nowrap">
                      {row.deedArea}
                    </td>
                    <td className="px-6 md:px-8 py-3.5 text-left font-bold text-charcoal whitespace-nowrap">
                      {row.builtUpArea}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
