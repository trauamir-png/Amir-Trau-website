import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import TrackedLink from "@/components/TrackedLink";
import { contactInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "צור קשר",
  description: "השאירו פרטים ואמיר יחזור אליכם — או צרו קשר ישירות בטלפון, בוואטסאפ או במייל.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold md:text-5xl">בואו נדבר</h1>
          <p className="mt-4 text-lg text-brand-muted">
            אדם אחד שמוביל את הפרויקט שלכם, מקצה לקצה. משאירים פרטים, שולחים
            הודעה, או מתקשרים — איך שנוח לכם.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-3 text-lg font-semibold hover:text-brand-teal"
            >
              📞 {contactInfo.phone}
            </a>
            <TrackedLink
              gtmEvent="whatsapp_click"
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-semibold hover:text-brand-teal"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 flex-shrink-0 text-[#25D366]">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.07L2 22l5.06-1.33C8.5 21.5 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.02 18c-1.6 0-3.13-.43-4.46-1.24l-.32-.19-3.32.87.89-3.24-.21-.33A7.94 7.94 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.58 8-7.98 8zm4.4-5.98c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
              </svg>
              וואטסאפ
            </TrackedLink>
            <TrackedLink
              gtmEvent="email_click"
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-lg font-semibold hover:text-brand-teal"
            >
              ✉️ {contactInfo.email}
            </TrackedLink>
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
