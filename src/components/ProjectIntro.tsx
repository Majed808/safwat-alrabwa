import Reveal from "./Reveal";

export default function ProjectIntro() {
  return (
    <section id="project" className="mx-auto max-w-4xl px-4 sm:px-6 py-24 md:py-32 text-center">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-black text-charcoal mb-6">
          مساحة صنعت لتعيشها
        </h2>
        <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
          صفوة الربوة تجربة سكنية مصممة حول التفاصيل: تصميم عصري يحترم الخصوصية،
          جودة تنفيذ واضحة، توزيع مدروس للمساحات، تجهيزات أساسية جاهزة قبل الاستلام،
          وموقع في قلب حي الربوة بالرياض.
        </p>
      </Reveal>
    </section>
  );
}
