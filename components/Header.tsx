"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo-footer.png"
            alt="AMIR TRAU"
            width={1287}
            height={387}
            priority
            className="h-24 w-auto md:h-28"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-teal ${
                  active ? "text-brand-teal" : "text-brand-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="פתיחת תפריט"
          aria-expanded={open}
        >
          <span className="sr-only">תפריט</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-brand-ink" />
            <span className="h-0.5 w-5 bg-brand-ink" />
            <span className="h-0.5 w-5 bg-brand-ink" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-base font-medium hover:bg-brand-surface"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
