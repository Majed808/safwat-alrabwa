"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function InterestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-offwhite/10 border border-offwhite/20 p-8 text-center">
        <p className="text-lg font-bold text-offwhite mb-1">تم استلام طلبك بنجاح</p>
        <p className="text-offwhite/70 text-sm">سيتواصل معك فريق المبيعات قريبا.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          name="name"
          type="text"
          placeholder="الاسم"
          className="rounded-xl bg-offwhite/10 border border-offwhite/20 px-4 py-3.5 text-offwhite placeholder:text-offwhite/50 focus:outline-none focus:border-beige"
        />
        <input
          required
          name="phone"
          type="tel"
          placeholder="رقم الجوال"
          className="rounded-xl bg-offwhite/10 border border-offwhite/20 px-4 py-3.5 text-offwhite placeholder:text-offwhite/50 focus:outline-none focus:border-beige"
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="البريد الإلكتروني (اختياري)"
        className="rounded-xl bg-offwhite/10 border border-offwhite/20 px-4 py-3.5 text-offwhite placeholder:text-offwhite/50 focus:outline-none focus:border-beige"
      />
      <textarea
        name="message"
        placeholder="الرسالة / الاستفسار"
        rows={3}
        className="rounded-xl bg-offwhite/10 border border-offwhite/20 px-4 py-3.5 text-offwhite placeholder:text-offwhite/50 focus:outline-none focus:border-beige resize-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-beige text-charcoal font-bold px-8 py-4 text-base hover:bg-beige-light transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "جارٍ الإرسال..." : "سجل اهتمامك"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-300">حدث خطأ، حاول مرة أخرى.</p>
      )}
    </form>
  );
}
