"use client";

import { useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      sendGTMEvent({ event: "form_submit", form_name: "contact" });
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-brand-surface p-8 text-center">
        <p className="text-lg font-semibold text-brand-ink">
          קיבלתי! אמיר יחזור אליך בהקדם.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-ink">
          שם מלא
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-brand-teal"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-ink">
            טלפון
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-brand-teal"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-ink">
            אימייל
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-brand-teal"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-brand-ink">
          באיזה תחום מתעניינים?
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-brand-teal"
        >
          <option value="websites">בניית אתרים ודפי נחיתה</option>
          <option value="marketing">שיווק דיגיטלי</option>
          <option value="branding">עיצוב ומיתוג</option>
          <option value="management">ניהול ותחזוקת אתרים</option>
          <option value="ai-content">תוכן וקריאייטיב מבוסס AI</option>
          <option value="other">אחר / לא בטוח</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-ink">
          ספרו קצת על העסק והצורך
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-brand-teal"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-ink px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-teal disabled:opacity-60"
      >
        {status === "sending" ? "שולח..." : "אמיר תחזור אלי"}
      </button>

      {status === "error" && (
        <p className="text-sm text-brand-pink">
          משהו השתבש בשליחה — אפשר גם ליצור קשר ישירות בטלפון או בוואטסאפ למטה.
        </p>
      )}
    </form>
  );
}
