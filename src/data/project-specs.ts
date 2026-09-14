// ============================================================================
// مواصفات مشروع صفوة الربوة — ملف تحكم واحد
// كل قيمة غير مؤكدة تحمل Placeholder صريح "[سيتم إضافة المواصفة]"
// عدّل القيم هنا فقط عند توفر المعلومات الرسمية — لا تعدّل المكونات.
// ============================================================================

export type SpecItem = {
  label: string;
  value: string;
};

export type SpecGroup = {
  id: string;
  title: string;
  items: SpecItem[];
};

const PLACEHOLDER = "[سيتم إضافة المواصفة]";

export const projectSpecs: SpecGroup[] = [
  {
    id: "construction",
    title: "جودة الإنشاء",
    items: [
      { label: "نوع الحديد", value: PLACEHOLDER },
      { label: "نوع الخرسانة", value: PLACEHOLDER },
      { label: "نوع العزل", value: PLACEHOLDER },
      { label: "نوع الكيابل", value: PLACEHOLDER },
      { label: "نوع القواطع الكهربائية", value: PLACEHOLDER },
      { label: "نوع المواسير", value: PLACEHOLDER },
      { label: "نوع الأبواب", value: PLACEHOLDER },
      { label: "نوع النوافذ", value: PLACEHOLDER },
    ],
  },
  {
    id: "fitout",
    title: "التجهيزات",
    items: [
      { label: "المصعد", value: "راكب ومجهز" },
      { label: "المكيفات المركزية", value: "راكبة ومنفذة" },
      { label: "التجهيزات الكهربائية", value: PLACEHOLDER },
      { label: "التجهيزات الصحية", value: PLACEHOLDER },
      { label: "المطابخ", value: PLACEHOLDER },
      { label: "أنظمة أخرى", value: PLACEHOLDER },
    ],
  },
];

// نقاط "جاهز من البداية" — فقط ما هو مؤكد
export const readyFeatures = [
  {
    id: "elevator",
    title: "مصعد راكب",
    description: "المشروع مجهز بالمصعد.",
  },
  {
    id: "central-ac",
    title: "تكييف مركزي راكب",
    description: "نظام التكييف المركزي منفذ ومجهز.",
  },
];
