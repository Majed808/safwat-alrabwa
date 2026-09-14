import { projectStats } from "@/data/project-stats";
import Reveal from "./Reveal";

export default function StatsSection() {
  const confirmed = projectStats.filter((s) => s.value);

  if (confirmed.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
        <Reveal>
          <p className="text-sm text-charcoal/45">
            سيتم عرض أرقام المشروع (عدد الوحدات، المساحات، الأدوار، الغرف) هنا فور اعتمادها رسميا.
          </p>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {confirmed.map((s) => (
          <div key={s.id}>
            <p className="text-3xl md:text-4xl font-black text-teal">{s.value}</p>
            <p className="text-sm text-charcoal/60 mt-1">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
