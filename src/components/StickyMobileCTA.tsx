import { whatsappLink } from "@/data/site-config";

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-offwhite/95 backdrop-blur-md border-t border-black/10">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full rounded-full bg-teal text-offwhite font-bold py-3.5 text-base"
      >
        تواصل مع المبيعات
      </a>
    </div>
  );
}
