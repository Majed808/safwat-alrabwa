// ============================================================================
// أرقام المشروع — عدّل القيم هنا فقط عند توفر بيانات رسمية مؤكدة.
// إن لم تتوفر القيمة اتركها كـ null وسيتم إخفاؤها تلقائيا من الواجهة.
// ============================================================================

export type StatItem = {
  id: string;
  label: string;
  value: string | null;
};

export const projectStats: StatItem[] = [
  { id: "units", label: "عدد الوحدات", value: null },
  { id: "area", label: "مساحة الوحدة", value: null },
  { id: "floors", label: "عدد الأدوار", value: null },
  { id: "bedrooms", label: "عدد غرف النوم", value: null },
  { id: "bathrooms", label: "عدد دورات المياه", value: null },
];
