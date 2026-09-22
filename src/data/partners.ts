// ============================================================================
// شركاء النجاح — الشركات المصنّعة/الموردة الواردة فعليا في مواصفات المشروع
// (project-specs.ts). لا تُضف أي شركة لم تُذكر كمصدر مؤكد للمواصفات.
//
// الشعارات: تمت تعبئة `logo` فقط للشركات التي تم العثور على شعارها الرسمي
// الحقيقي من مصدر موثوق (موقع الشركة الرسمي، Wikimedia Commons، أو ملفات
// زوّدنا بها المستخدم مباشرة) وتنزيله فعليا إلى public/images/partners/.
// الشركات التي لم يُعثر لها على شعار رسمي مؤكد تُركت بلا حقل logo لتظهر
// كشارة نصية كما كانت.
// ============================================================================

export type Partner = {
  name: string;
  category: string;
  logo?: string;
};

export const partners: Partner[] = [
  { name: "سابك", category: "الحديد", logo: "/images/partners/sabic.svg" },
  { name: "الراجحي للحديد", category: "الحديد", logo: "/images/partners/al-rajhi-steel.webp" },
  { name: "كيابل الرياض", category: "الكيابل", logo: "/images/partners/riyadh-cables.svg" },
  { name: "الفنار", category: "القواطع الكهربائية", logo: "/images/partners/alfanar.svg" },
  { name: "شركة تحويل", category: "المواسير الحرارية", logo: "/images/partners/tahweel.webp" },
  { name: "كي باب", category: "الأبواب", logo: "/images/partners/keybab.png" },
  { name: "العامر", category: "النوافذ", logo: "/images/partners/al-amer.jpg" },
  { name: "جوتن", category: "الدهانات", logo: "/images/partners/jotun.svg" },
  { name: "جروهي", category: "التجهيزات الصحية", logo: "/images/partners/grohe.svg" },
  { name: "باناسونيك", category: "الأفياش الكهربائية", logo: "/images/partners/panasonic.svg" },
  { name: "أنفال", category: "مداخل السيارات", logo: "/images/partners/anfal.png" },
  { name: "شركة الزامل", category: "المضخة سكالا2", logo: "/images/partners/zamil.png" },
  { name: "الخزف السعودي", category: "السخانات", logo: "/images/partners/saudi-ceramics.png" },
  { name: "مصنع الوطن", category: "مكيفات", logo: "/images/partners/alwatan.jpeg" },
];
