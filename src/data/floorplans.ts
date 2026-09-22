// ============================================================================
// المخطط المعماري التنفيذي — مقتطف من ملف "معماري تنفيذي 951-1.pdf" (المصدر
// الرسمي الوحيد). الصور مأخوذة من المخطط المعتمد كما هو دون تعديل على
// المساحات أو توزيع الغرف — فقط قص الإطار والجدول الجانبي لتسهيل العرض.
// أسماء الغرف كما وردت حرفيا في المخطط.
// ============================================================================

export type FloorPlanImage = {
  src: string;
  alt: string;
  floorLabel: string;
  rooms: string[];
  width: number;
  height: number;
};

export type FloorPlanModel = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  floors: FloorPlanImage[];
};

export const floorPlanModels: FloorPlanModel[] = [
  {
    id: "model-a",
    title: "نموذج (أ)",
    subtitle: "الدور الأرضي مع الدور الأول",
    price: "1,420,000",
    floors: [
      {
        src: "/images/floorplans/ground-floor.jpg",
        alt: "مخطط الدور الأرضي — نموذج (أ)",
        floorLabel: "الدور الأرضي",
        rooms: [
          "صالة عائلية",
          "مطبخ",
          "غرفة نوم",
          "غرفة خادمة + حمام",
          "دورة مياه ضيوف",
          "مصلى",
          "درج ومصعد",
          "كراج سيارة",
        ],
        width: 1615,
        height: 1390,
      },
      {
        src: "/images/floorplans/first-floor.jpg",
        alt: "مخطط الدور الأول — نموذج (أ)",
        floorLabel: "الدور الأول",
        rooms: [
          "غرفة رئيسية (ماستر) + حمام + غرفة ملابس",
          "غرفة نوم + حمام",
          "صالة عائلية",
          "مطبخ",
          "درج ومصعد",
        ],
        width: 1615,
        height: 1390,
      },
    ],
  },
  {
    id: "model-b",
    title: "نموذج (ب)",
    subtitle: "الدور الأول مع الدور الثاني (الملحق العلوي)",
    price: "1,420,000",
    floors: [
      {
        src: "/images/floorplans/first-floor.jpg",
        alt: "مخطط الدور الأول — نموذج (ب)",
        floorLabel: "الدور الأول",
        rooms: [
          "غرفة رئيسية (ماستر) + حمام + غرفة ملابس",
          "غرفة نوم + حمام",
          "صالة عائلية",
          "مطبخ",
          "درج ومصعد",
        ],
        width: 1615,
        height: 1390,
      },
      {
        src: "/images/floorplans/annex-floor.jpg",
        alt: "مخطط الدور الثاني (الملحق العلوي) — نموذج (ب)",
        floorLabel: "الدور الثاني (الملحق العلوي)",
        rooms: [
          "غرفة رئيسية (ماستر) + حمام",
          "غرفة نوم + حمام",
          "غرفة خادمة + حمام",
          "درج ومصعد",
          "أسطح",
        ],
        width: 1615,
        height: 1390,
      },
    ],
  },
];
