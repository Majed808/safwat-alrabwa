// ============================================================================
// موقع المشروع — إحداثيات حقيقية مستخرجة من رابط خرائط Google المزوّد.
// لا تُستخدم أي أزمنة/مسافات ثابتة مخترعة: زر "الاتجاهات" لكل مكان يفتح خرائط
// Google مباشرة من موقع المشروع الفعلي، بحيث يحصل الزائر على وقت ومسافة حقيقيين.
// ============================================================================

export const projectLocation = {
  name: "صفوة الربوة",
  district: "حي الربوة، الرياض",
  lat: 24.6990503,
  lng: 46.767567,
  googleMapsShareUrl: "https://maps.app.goo.gl/JN8b7J4qcaPcCPxFA",
};

export type NearbyCategory =
  | "schools"
  | "hospitals"
  | "shopping"
  | "parks"
  | "restaurants"
  | "services"
  | "fitness"
  | "roads";

export type NearbyPlace = {
  id: string;
  name: string;
  category: NearbyCategory;
};

export const nearbyCategories: { id: NearbyCategory; label: string }[] = [
  { id: "schools", label: "المدارس" },
  { id: "hospitals", label: "المستشفيات" },
  { id: "shopping", label: "التسوق" },
  { id: "parks", label: "الحدائق" },
  { id: "restaurants", label: "المطاعم والمقاهي" },
  { id: "services", label: "الخدمات اليومية" },
  { id: "fitness", label: "النوادي الصحية" },
  { id: "roads", label: "الطرق الرئيسية" },
];

// أسماء عامة موثقة لوجودها في محيط حي الربوة، دون أرقام مسافة مخترعة.
// اضغط "الاتجاهات" ليُحسب الوقت والمسافة الحقيقيان من خرائط Google انطلاقا
// من موقع المشروع الفعلي.
export const nearbyPlaces: NearbyPlace[] = [
  { id: "schools-1", name: "مدارس قريبة في حي الربوة وما جاوره", category: "schools" },
  { id: "hospitals-1", name: "مركز الدكتور سليمان الحبيب الطبي — حي الربوة", category: "hospitals" },
  { id: "hospitals-2", name: "مستشفيات ومراكز طبية أخرى قريبة", category: "hospitals" },
  { id: "shopping-1", name: "العثيم مول الربوة", category: "shopping" },
  { id: "shopping-2", name: "ربوة بلازا", category: "shopping" },
  { id: "parks-1", name: "حدائق ومساحات خضراء قريبة", category: "parks" },
  { id: "restaurants-1", name: "مطاعم ومقاهي قريبة", category: "restaurants" },
  { id: "services-1", name: "خدمات يومية (صرافات، بقالات، صيدليات)", category: "services" },
  { id: "fitness-1", name: "وقت اللياقة — فرع الربوة (رجال)", category: "fitness" },
  { id: "fitness-2", name: "وقت اللياقة ليديز — فرع الربوة (سيدات)", category: "fitness" },
  { id: "roads-1", name: "الطريق الدائري الشرقي", category: "roads" },
  { id: "roads-2", name: "طريق مكة المكرمة", category: "roads" },
  { id: "roads-3", name: "طريق النهضة", category: "roads" },
  { id: "roads-4", name: "طريق صلاح الدين الأيوبي", category: "roads" },
];

export function directionsUrl(placeName: string) {
  const origin = `${projectLocation.lat},${projectLocation.lng}`;
  const destination = encodeURIComponent(`${placeName} حي الربوة الرياض`);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
}
