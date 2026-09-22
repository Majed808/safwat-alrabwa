// ============================================================================
// ملخص أيقونات كل نموذج — محسوب مباشرة من قوائم الغرف الفعلية في
// floorplans.ts (المأخوذة من المخطط المعماري المعتمد). لا أرقام يدوية هنا:
// أي تغيير في floorplans.ts ينعكس هنا تلقائيا، فلا يوجد خطر تضارب بيانات.
// ============================================================================

import type { FloorPlanModel } from "./floorplans";

export type ModelSummary = {
  bedrooms: number;
  bathrooms: number;
  kitchens: number;
  familyHalls: number;
  hasElevator: boolean;
  hasPrayerRoom: boolean;
  hasMaidRoom: boolean;
  hasRoof: boolean;
  parkingSpots: number;
};

const PARKING_WORDS: Record<string, number> = {
  "سيارتين": 2,
  "سيارة": 1,
};

export function summarizeModel(model: FloorPlanModel): ModelSummary {
  const allRooms = model.floors.flatMap((f) => f.rooms);

  let bedrooms = 0;
  let bathrooms = 0;
  let kitchens = 0;
  let familyHalls = 0;
  let hasElevator = false;
  let hasPrayerRoom = false;
  let hasMaidRoom = false;
  let hasRoof = false;
  let parkingSpots = 0;

  for (const room of allRooms) {
    if (room.includes("غرفة نوم")) bedrooms += 1;
    if (room.includes("ماستر")) bedrooms += 1;
    if (room.includes("حمام")) bathrooms += 1;
    if (room.includes("دورة مياه")) bathrooms += 1;
    if (room.includes("مطبخ")) kitchens += 1;
    if (room.includes("صالة عائلية")) familyHalls += 1;
    if (room.includes("مصعد")) hasElevator = true;
    if (room.includes("مصلى")) hasPrayerRoom = true;
    if (room.includes("خادمة")) hasMaidRoom = true;
    if (room.includes("أسطح") || room.includes("سطح")) hasRoof = true;
    if (room.includes("كراج")) {
      for (const [word, count] of Object.entries(PARKING_WORDS)) {
        if (room.includes(word)) parkingSpots += count;
      }
    }
  }

  return {
    bedrooms,
    bathrooms,
    kitchens,
    familyHalls,
    hasElevator,
    hasPrayerRoom,
    hasMaidRoom,
    hasRoof,
    parkingSpots,
  };
}
