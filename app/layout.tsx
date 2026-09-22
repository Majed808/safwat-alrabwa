import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const siteUrl = "https://safwat-alrabwa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "صفوة الربوة | تاون هاوس في حي الربوة بالرياض",
  description:
    "صفوة الربوة — مشروع تاون هاوس في حي الربوة بالرياض، تنفيذ وتسويق صخر الإنشاءات للتطوير العقاري. تصميم عصري، مصعد وتكييف مركزي راكبان من البداية، وموقع يختصر عليك الكثير.",
  keywords: [
    "صفوة الربوة",
    "تاون هاوس الرياض",
    "حي الربوة",
    "صخر الإنشاءات للتطوير العقاري",
    "عقارات الرياض",
  ],
  openGraph: {
    title: "صفوة الربوة | تاون هاوس في حي الربوة بالرياض",
    description: "تاون هاوس بتفاصيل صممت لحياة أجمل — في حي الربوة بالرياض.",
    url: siteUrl,
    siteName: "صفوة الربوة",
    images: [
      {
        url: "/images/facades/dark-night-full.jpg",
        width: 1200,
        height: 630,
        alt: "صفوة الربوة",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "صفوة الربوة | تاون هاوس في حي الربوة بالرياض",
    description: "تاون هاوس بتفاصيل صممت لحياة أجمل — في حي الربوة بالرياض.",
    images: ["/images/facades/dark-night-full.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/logo/safwat-mark.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/images/logo/safwat-mark.svg",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "صفوة الربوة",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f4c46",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "صفوة الربوة",
    description: "مشروع تاون هاوس في حي الربوة بالرياض",
    url: siteUrl,
    developer: {
      "@type": "Organization",
      name: "صخر الإنشاءات للتطوير العقاري",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressRegion: "منطقة الرياض",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.6990503,
      longitude: 46.767567,
    },
  };

  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        <FloatingWhatsApp />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
