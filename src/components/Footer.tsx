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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold mb-1">صفوة الربوة</h3>
          <p className="text-offwhite/70 text-sm mb-2">تاون هاوس — حي الربوة، الرياض</p>
          <a href={telLink} className="text-offwhite/80 text-sm hover:text-offwhite transition-colors block mb-3" dir="ltr">
            {salesPhone}
          </a>
          <a
            href={tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`تيك توك @${tiktokHandle}`}
            className="inline-flex items-center gap-2 text-offwhite/80 text-sm hover:text-offwhite transition-colors"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M16.5 2h-3.2v13.4a2.6 2.6 0 1 1-1.86-2.49v-3.28a5.85 5.85 0 1 0 5.06 5.79V9.03a7.02 7.02 0 0 0 4.1 1.31V7.16a3.7 3.7 0 0 1-2.4-1.03A3.68 3.68 0 0 1 16.5 2z" />
            </svg>
            <span dir="ltr">@{tiktokHandle}</span>
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-center content-start">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-offwhite/80 hover:text-offwhite transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:text-left">
          <p className="text-xs text-offwhite/60 mb-2">المنفذ ووكيل البيع</p>
          <Image
            src="/images/logo/sakhr-logo.png"
            alt="شعار صخر الإنشاءات للتطوير العقاري"
            width={160}
            height={56}
            className="h-12 w-auto bg-offwhite/95 rounded-lg p-2 md:mr-0"
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
