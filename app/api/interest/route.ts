import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "interest-submissions.json");

type Submission = {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  createdAt: string;
};

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

    console.log("[صفوة الربوة] طلب اهتمام جديد:", submission);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "حدث خطأ غير متوقع" }, { status: 500 });
  }
}
