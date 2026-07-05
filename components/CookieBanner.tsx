"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "cookie-consent";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return "ssr";
}

function setConsent(value: "accepted" | "declined") {
  localStorage.setItem(STORAGE_KEY, value);
  listeners.forEach((listener) => listener());
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white px-6 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-brand-muted">
          האתר משתמש בקבצי עוגיות (cookies) כדי לשפר את חוויית הגלישה ולנתח
          שימוש באתר. לפרטים נוספים ראו את{" "}
          <Link href="/privacy" className="font-semibold text-brand-ink hover:text-brand-teal">
            מדיניות הפרטיות
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-brand-ink hover:bg-brand-surface"
          >
            דוחה
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-full bg-brand-ink px-5 py-2 text-sm font-semibold text-white hover:bg-brand-teal"
          >
            מסכים
          </button>
        </div>
      </div>
    </div>
  );
}
