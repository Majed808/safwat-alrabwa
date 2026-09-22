import Image from "next/image";
import { salesPhone, telLink, falLicense, advertisingLicense } from "@/data/site-config";

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
          <a href={telLink} className="text-offwhite/80 text-sm hover:text-offwhite transition-colors" dir="ltr">
            {salesPhone}
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
