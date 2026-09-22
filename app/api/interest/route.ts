import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

const DATA_FILE = path.join(process.cwd(), "data", "interest-submissions.json");
const NOTIFY_EMAIL = "sakhr.r.e.d@gmail.com";

type Submission = {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  createdAt: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(s: Submission) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 14px;background:#f4f1ea;font-weight:bold;color:#1f2a27;width:140px;border:1px solid #e3ddd0;">${label}</td>
      <td style="padding:10px 14px;color:#1f2a27;border:1px solid #e3ddd0;">${escapeHtml(value)}</td>
    </tr>`;

  return `
  <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;max-width:560px;margin:0 auto;">
    <div style="background:#0f4c46;color:#fdfbf7;padding:20px 24px;border-radius:10px 10px 0 0;">
      <h2 style="margin:0;font-size:18px;">طلب تسجيل اهتمام جديد — صفوة الربوة</h2>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e3ddd0;border-top:none;">
      ${row("الاسم", s.name)}
      ${row("رقم الجوال", s.phone)}
      ${s.email ? row("البريد الإلكتروني", s.email) : ""}
      ${s.message ? row("الرسالة / الاستفسار", s.message) : ""}
      ${row(
        "تاريخ الطلب",
        new Date(s.createdAt).toLocaleString("ar-SA", {
          dateStyle: "medium",
          timeStyle: "short",
          timeZone: "Asia/Riyadh",
        }) + " (بتوقيت الرياض)"
      )}
    </table>
    <p style="color:#8a8478;font-size:12px;margin-top:14px;">
      وصل هذا الطلب تلقائيا من نموذج "سجل اهتمامك" في موقع صفوة الربوة.
    </p>
  </div>`;
}

async function sendNotificationEmail(submission: Submission) {
  const user = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;

  if (!user || !appPassword) {
    console.warn(
      "[صفوة الربوة] لم يتم إرسال بريد التنبيه: GMAIL_USER أو GMAIL_APP_PASSWORD غير معرّفة في متغيرات البيئة."
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: appPassword },
  });

  await transporter.sendMail({
    from: `"صفوة الربوة" <${user}>`,
    to: NOTIFY_EMAIL,
    replyTo: submission.email || undefined,
    subject: `طلب اهتمام جديد — ${submission.name}`,
    html: buildEmailHtml(submission),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body ?? {};

    if (!name || !phone) {
      return NextResponse.json(
        { error: "الاسم ورقم الجوال مطلوبان" },
        { status: 400 }
      );
    }

    const submission: Submission = {
      name: String(name).slice(0, 200),
      phone: String(phone).slice(0, 50),
      email: email ? String(email).slice(0, 200) : undefined,
      message: message ? String(message).slice(0, 2000) : undefined,
      createdAt: new Date().toISOString(),
    };

    try {
      let existing: Submission[] = [];
      try {
        const raw = await fs.readFile(DATA_FILE, "utf-8");
        existing = JSON.parse(raw);
      } catch {
        // ملف غير موجود بعد — سيتم إنشاؤه
      }
      existing.push(submission);
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fileErr) {
      // نظام الملفات في بيئة serverless قد يكون للقراءة فقط — لا نوقف الطلب بسبب ذلك
      console.warn("[صفوة الربوة] تعذر حفظ نسخة محلية من الطلب:", fileErr);
    }

    console.log("[صفوة الربوة] طلب اهتمام جديد:", submission);

    try {
      await sendNotificationEmail(submission);
    } catch (mailErr) {
      console.error("[صفوة الربوة] فشل إرسال بريد التنبيه:", mailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "حدث خطأ غير متوقع" }, { status: 500 });
  }
}
