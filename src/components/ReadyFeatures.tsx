import { readyFeatures } from "@/data/project-specs";
import Reveal from "./Reveal";

const icons: Record<string, React.ReactNode> = {
  elevator: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9l3-3 3 3M9 15l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "central-ac": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 15v3M10 15v4M14 15v3M18 15v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

export default function ReadyFeatures() {
  return (
    <section id="features" className="bg-teal text-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <Reveal>
          <p className="text-beige-light text-sm tracking-[0.3em] uppercase mb-3">
            جاهز من البداية
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-16">لا تبدأ من الصفر</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {readyFeatures.map((f, i) => (
            <Reveal key={f.id} delay={i * 120}>
              <div className="rounded-2xl bg-offwhite/10 border border-offwhite/15 p-8 h-full text-right">
                <div className="text-beige-light mb-5">{icons[f.id]}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-offwhite/75 text-sm leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
