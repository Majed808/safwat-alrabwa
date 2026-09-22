import Reveal from "./Reveal";

const reasons = [
  { title: "الموقع", desc: "في حي الربوة بالرياض." },
  { title: "التصميم", desc: "واجهات عصرية وهوية معمارية واضحة." },
  { title: "التجهيز", desc: "مصعد وتكييف مركزي جاهزان من البداية." },
  { title: "الجودة", desc: "مواصفات تنفيذية يمكن عرض تفاصيلها بشفافية." },
  { title: "الخصوصية", desc: "تصميم تاون هاوس مناسب للحياة العائلية." },
];

export default function WhySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-32">
      <Reveal className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-black text-charcoal">
          لماذا صفوة الربوة؟
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 90}>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold text-teal mb-2">{r.title}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
