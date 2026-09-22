import Image from "next/image";
import { salesPhone, telLink, falLicense, advertisingLicense, tiktokLink, tiktokHandle } from "@/data/site-config";

const footerLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#project", label: "المشروع" },
  { href: "#location", label: "الموقع" },
  { href: "#features", label: "المميزات" },
  { href: "#facades", label: "الواجهات" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
        {/* عن المشروع */}
        <div className="text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            <Image
              src="/images/logo/safwat-mark.svg"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 brightness-0 invert opacity-90"
            />
            <h3 className="text-xl font-bold">صفوة الربوة</h3>
          </div>
          <p className="text-offwhite/60 text-sm leading-relaxed">
            تاون هاوس بتفاصيل صممت لحياة أجمل — في حي الربوة بالرياض.
          </p>
        </div>

        {/* روابط سريعة */}
        <div className="text-center sm:text-right">
          <h4 className="text-xs font-bold text-beige-light tracking-[0.2em] uppercase mb-4">
            روابط سريعة
          </h4>
          <nav className="flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-offwhite/75 hover:text-offwhite transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* تواصل معنا */}
        <div className="text-center sm:text-right">
          <h4 className="text-xs font-bold text-beige-light tracking-[0.2em] uppercase mb-4">
            تواصل معنا
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href={telLink}
              className="inline-flex items-center justify-center sm:justify-start gap-2.5 text-sm text-offwhite/85 hover:text-offwhite transition-colors"
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true" className="shrink-0">
                <path
                  d="M4.5 3.5h3.2l1.6 4.4-2 1.7a11.5 11.5 0 0 0 5.1 5.1l1.7-2 4.4 1.6v3.2c0 1.1-.9 2-2 2C10.6 19.5 4.5 13.4 4.5 5.5c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span dir="ltr">{salesPhone}</span>
            </a>
            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`تيك توك @${tiktokHandle}`}
              className="inline-flex items-center justify-center sm:justify-start gap-2.5 text-sm text-offwhite/85 hover:text-offwhite transition-colors"
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true" className="shrink-0">
                <path d="M16.5 2h-3.2v13.4a2.6 2.6 0 1 1-1.86-2.49v-3.28a5.85 5.85 0 1 0 5.06 5.79V9.03a7.02 7.02 0 0 0 4.1 1.31V7.16a3.7 3.7 0 0 1-2.4-1.03A3.68 3.68 0 0 1 16.5 2z" />
              </svg>
              <span dir="ltr">@{tiktokHandle}</span>
            </a>
          </div>
        </div>

        {/* المنفذ ووكيل البيع */}
        <div className="text-center sm:text-right">
          <h4 className="text-xs font-bold text-beige-light tracking-[0.2em] uppercase mb-4">
            المنفذ ووكيل البيع
          </h4>
          <Image
            src="/images/logo/sakhr-logo.png"
            alt="شعار صخر الإنشاءات للتطوير العقاري"
            width={160}
            height={56}
            className="h-14 w-auto bg-offwhite/95 rounded-lg p-2.5 mx-auto sm:mr-0"
          />
        </div>
      </div>

      <div className="border-t border-offwhite/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-offwhite/50 text-center">
          <span>© {new Date().getFullYear()} صخر الإنشاءات للتطوير العقاري — جميع الحقوق محفوظة</span>
          <span className="hidden sm:inline text-offwhite/30">|</span>
          <span>رخصة فال: {falLicense}</span>
          <span className="hidden sm:inline text-offwhite/30">|</span>
          <span>ترخيص إعلاني: {advertisingLicense}</span>
        </div>
      </div>
    </footer>
  );
}
