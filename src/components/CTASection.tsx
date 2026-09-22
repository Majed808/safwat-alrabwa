import Reveal from "./Reveal";
import InterestForm from "./InterestForm";
import { whatsappLink, telLink, salesPhone } from "@/data/site-config";

export default function CTASection() {
  return (
    <section id="contact" className="bg-charcoal text-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black mb-4">هل ترى نفسك هنا؟</h2>
          <p className="text-offwhite/70 mb-8">سجل اهتمامك في مشروع صفوة الربوة وسيتواصل معك فريقنا.</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-offwhite hover:opacity-90 transition-opacity"
            >
              تواصل عبر واتساب
            </a>
            <a
              href={telLink}
              className="inline-flex items-center rounded-full border border-offwhite/30 px-6 py-3 text-sm font-bold text-offwhite hover:bg-offwhite/10 transition-colors"
            >
              اتصل بنا — {salesPhone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <InterestForm />
        </Reveal>
      </div>
    </section>
  );
}
