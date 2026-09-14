import Reveal from "./Reveal";
import InterestForm from "./InterestForm";

export default function CTASection() {
  return (
    <section id="contact" className="bg-charcoal text-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black mb-4">هل ترى نفسك هنا؟</h2>
          <p className="text-offwhite/70 mb-12">سجل اهتمامك في مشروع صفوة الربوة وسيتواصل معك فريقنا.</p>
        </Reveal>

        <Reveal delay={100}>
          <InterestForm />
        </Reveal>
      </div>
    </section>
  );
}
