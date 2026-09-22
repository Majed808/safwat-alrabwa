// ============================================================================
// صور حقيقية من الموقع (تصوير فعلي، وليست تصاميم) — نموذج أ للوحدات A01/A02
// ونموذج ب للوحدات B01/B02، كما زوّدنا بها المستخدم مباشرة من الموقع.
// ============================================================================

export type SitePhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SitePhotoGroup = {
  id: string;
  title: string;
  units: string[];
  photos: SitePhoto[];
};

export const sitePhotoGroups: SitePhotoGroup[] = [
  {
    id: "model-a-photos",
    title: "نموذج (أ) — صور حقيقية",
    units: ["A01", "A02"],
    photos: Array.from({ length: 8 }, (_, i) => ({
      src: `/images/site-photos/model-a/a-${String(i + 1).padStart(2, "0")}.jpg`,
      alt: `صورة حقيقية من موقع نموذج (أ) — ${i + 1}`,
      width: 1800,
      height: 1350,
    })),
  },
  {
    id: "model-b-photos",
    title: "نموذج (ب) — صور حقيقية",
    units: ["B01", "B02"],
    photos: Array.from({ length: 9 }, (_, i) => ({
      src: `/images/site-photos/model-b/b-${String(i + 1).padStart(2, "0")}.jpg`,
      alt: `صورة حقيقية من موقع نموذج (ب) — ${i + 1}`,
      width: 1350,
      height: 1800,
    })),
  },
];
