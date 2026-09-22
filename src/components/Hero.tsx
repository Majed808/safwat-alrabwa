import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <Image
        src="/images/facades/dark-night-full.jpg"
        alt="واجهة مشروع صفوة الربوة"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 gap-6">
        <p className="text-offwhite/80 text-sm md:text-base tracking-[0.3em] uppercase">
          صخر الإنشاءات للتطوير العقاري
        </p>
        <Image
          src="/images/logo/safwat-mark.svg"
          alt=""
          width={56}
          height={56}
          className="w-12 h-12 md:w-14 md:h-14 brightness-0 invert opacity-90"
        />
        <h1 className="text-offwhite font-black text-5xl sm:text-6xl md:text-8xl leading-tight">
          صفوة الربوة
        </h1>
        <p className="text-offwhite/90 text-lg md:text-2xl font-medium max-w-xl">
          تاون هاوس بتفاصيل صممت لحياة أجمل
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#project"
            className="inline-flex items-center justify-center rounded-full bg-offwhite text-charcoal font-bold px-8 py-4 text-base hover:bg-beige-light transition-colors"
          >
            اكتشف المشروع
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-offwhite/60 text-offwhite font-bold px-8 py-4 text-base hover:bg-offwhite/10 transition-colors"
          >
            احجز اهتمامك
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 z-10 flex justify-center animate-bounce">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-offwhite/80"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
