"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#project", label: "المشروع" },
  { href: "#facades", label: "الواجهات" },
  { href: "#location", label: "الموقع" },
  { href: "#features", label: "المميزات" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5 md:gap-3 shrink-0">
          <Image
            src="/images/logo/safwat-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-7 w-7 md:h-9 md:w-9"
            priority
          />
          <span className="hidden sm:inline text-base md:text-lg font-bold text-charcoal">
            صفوة الربوة
          </span>
          <span className="hidden sm:inline w-px h-6 bg-black/10 mx-1" />
          <Image
            src="/images/logo/sakhr-logo.png"
            alt="شعار صخر الإنشاءات للتطوير العقاري"
            width={140}
            height={48}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-offwhite hover:bg-teal-dark transition-colors"
        >
          سجل اهتمامك
        </a>

        <button
          aria-label="فتح القائمة"
          className="md:hidden p-2 -m-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-charcoal mb-1.5" />
          <span className="block w-6 h-0.5 bg-charcoal mb-1.5" />
          <span className="block w-6 h-0.5 bg-charcoal" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-offwhite border-t border-black/5 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-charcoal py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-teal px-5 py-3 text-sm font-bold text-offwhite"
          >
            سجل اهتمامك
          </a>
        </nav>
      )}
    </header>
  );
}
