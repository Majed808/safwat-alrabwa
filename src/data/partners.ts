// ============================================================================
// شركاء النجاح — الشركات المصنّعة/الموردة الواردة فعليا في مواصفات المشروع
// (project-specs.ts). لا تُضف أي شركة لم تُذكر كمصدر مؤكد للمواصفات.
//
// الشعارات: تمت تعبئة `logo` فقط للشركات التي تم العثور على شعارها الرسمي
// الحقيقي من مصدر موثوق (موقع الشركة الرسمي أو Wikimedia Commons) وتنزيله
// فعليا إلى public/images/partners/. الشركات التي لم يُعثر لها على شعار
// رسمي مؤكد تُركت بلا حقل logo لتظهر كشارة نصية كما كانت.
// ============================================================================

export type Partner = {
  name: string;
  category: string;
  logo?: string;
};

export const partners: Partner[] = [
  { name: "سابك", category: "الحديد", logo: "/images/partners/sabic.svg" },
  { name: "الراجحي للحديد", category: "الحديد", logo: "/images/partners/al-rajhi-steel.webp" },
  { name: "دواشيلد", category: "العزل" },
  { name: "كيابل الرياض", category: "الكيابل", logo: "/images/partners/riyadh-cables.svg" },
  { name: "الفنار", category: "القواطع الكهربائية", logo: "/images/partners/alfanar.svg" },
  { name: "شركة تحويل", category: "المواسير الحرارية" },
  { name: "كي باب", category: "الأبواب" },
  { name: "العامر", category: "النوافذ" },
  { name: "جوتن", category: "الدهانات", logo: "/images/partners/jotun.svg" },
  { name: "جروهي", category: "التجهيزات الصحية", logo: "/images/partners/grohe.svg" },
  { name: "سيدنا", category: "خلاطات الدش" },
  { name: "باناسونيك", category: "الأفياش الكهربائية", logo: "/images/partners/panasonic.svg" },
  { name: "أنفال", category: "مداخل السيارات", logo: "/images/partners/anfal.png" },
  { name: "المنى", category: "المضخات الغاطسة" },
  { name: "سيدار موريس", category: "خلاطات المغاسل" },
  { name: "سيروزا", category: "السخانات" },
];
