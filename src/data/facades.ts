// ============================================================================
// صور الواجهات — مستخرجة من ملف "تصميم الواجهات.pdf" (المصدر الوحيد).
// الأسماء (A01 / A02 / B01 / B02) كما وردت فعليا في الملف — لم يتم اختراعها.
// ============================================================================

export type FacadeImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FacadeModel = {
  id: string;
  title: string;
  units: string[]; // أسماء الوحدات كما وردت في الملف
  description: string;
  hero: FacadeImage;
  gallery: FacadeImage[];
};

export const facadeModels: FacadeModel[] = [
  {
    id: "night-facade",
    title: "الواجهة الليلية",
    units: ["A01", "A02", "B01", "B02"],
    description: "منظر ليلي للواجهة الرئيسية بألوان داكنة دافئة وإضاءة معمارية مخفية.",
    hero: {
      src: "/images/facades/dark-night-full.jpg",
      alt: "واجهة صفوة الربوة الليلية — الوحدات A01, A02, B01, B02",
      width: 2526,
      height: 1786,
    },
    gallery: [
      {
        src: "/images/facades/dark-night-full.jpg",
        alt: "الواجهة الليلية الكاملة",
        width: 2526,
        height: 1786,
      },
    ],
  },
  {
    id: "light-facade",
    title: "الواجهة الفاتحة",
    units: ["A01", "A02", "B01", "B02"],
    description: "منظر نهاري للواجهة بألوان ترافرتين فاتحة ولمسات خشبية دافئة.",
    hero: {
      src: "/images/facades/light-day-1.jpg",
      alt: "واجهة صفوة الربوة الفاتحة — الوحدات A01, A02, B01, B02",
      width: 2526,
      height: 1786,
    },
    gallery: [
      {
        src: "/images/facades/light-day-1.jpg",
        alt: "الواجهة الفاتحة — منظر أمامي",
        width: 2526,
        height: 1786,
      },
      {
        src: "/images/facades/light-day-2.jpg",
        alt: "الواجهة الفاتحة — منظر زاوية",
        width: 2526,
        height: 1786,
      },
      {
        src: "/images/facades/light-day-3.jpg",
        alt: "الواجهة الفاتحة — منظر زاوية آخر",
        width: 2526,
        height: 1786,
      },
      {
        src: "/images/facades/light-day-close.jpg",
        alt: "الواجهة الفاتحة — لقطة مقربة للوحدة A01",
        width: 2526,
        height: 1786,
      },
      {
        src: "/images/facades/light-day-5.jpg",
        alt: "الواجهة الفاتحة — لقطة مقربة إضافية",
        width: 2526,
        height: 1786,
      },
    ],
  },
];
