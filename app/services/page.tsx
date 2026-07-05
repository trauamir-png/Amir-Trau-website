import type { Metadata } from "next";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import CtaSection from "@/components/CtaSection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "שירותים",
  description:
    "בניית אתרים ודפי נחיתה, שיווק דיגיטלי, עיצוב ומיתוג, ניהול ותחזוקת אתרים, ותוכן מבוסס AI — הכל תחת קורת גג אחת.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-16">
        <Container className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">השירותים שלי</h1>
          <p className="mt-6 text-lg text-brand-muted">
            כל מה שעסק קטן או בינוני צריך כדי להיראות מקצועי ולקבל לקוחות —
            תחת קורת גג אחת, בלי לרדוף אחרי כמה ספקים שונים.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
