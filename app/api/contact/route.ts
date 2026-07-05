import { NextResponse } from "next/server";

const CONTACT_EMAIL = "amirtrau100@gmail.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, email, service, message } = body as Record<string, string>;

  if (!name || !phone) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form submission not sent:", body);
    return NextResponse.json({ error: "email service not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "AMIR TRAU website <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      reply_to: email || undefined,
      subject: `פנייה חדשה מהאתר — ${name}`,
      text: [
        `שם: ${name}`,
        `טלפון: ${phone}`,
        email ? `אימייל: ${email}` : null,
        service ? `תחום עניין: ${service}` : null,
        message ? `הודעה: ${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Resend API error:", errorText);
    return NextResponse.json({ error: "failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
