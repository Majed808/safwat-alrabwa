"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // تسجيل الـ Service Worker اختياري — تجاهل الفشل بصمت
      });
    }
  }, []);

  return null;
}
