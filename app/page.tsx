import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import StatsRow from "@/components/StatsRow";
import CtaSection from "@/components/CtaSection";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import { portfolioItems } from "@/lib/data/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="pt-16 pb-16">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-right">
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">
              טכנולוגיה חכמה. שיווק יצירתי.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-muted md:text-xl">
              בונים לך נוכחות דיגיטלית מלאה – מאפיון ועיצוב האתר ועד לפוסט
              האחרון באינסטגרם.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button href="/contact" gtmEvent="contact_button_click">בואו נתחיל פרויקט</Button>
              <Button href="/services" variant="secondary">
                לכל השירותים
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-sm md:mx-0 md:max-w-none">
            <Image
              src="/amir-trau.jpg"
              alt="אמיר טראו"
              width={819}
              height={1024}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <StatsRow />
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              נראות מקצועית, יותר פניות ויותר לקוחות
            </h2>
            <p className="mt-4 text-brand-muted">
              אתר, מיתוג ושיווק דיגיטלי, מתוכננים ומנוהלים תחת קורת גג אחת —
              כדי שלא תצטרכו לרדוף אחרי כמה ספקים בשביל לגדול.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-center text-3xl font-extrabold">ארגז הכלים הדיגיטלי</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link key={service.id} href={`/services#${service.id}`}>
                <ServiceCard service={service} index={i} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-3xl font-extrabold">אתרים שבניתי</h2>
            <Link href="/portfolio" className="font-semibold text-brand-teal hover:underline">
              לכל הפורטפוליו ←
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {portfolioItems.slice(0, 6).map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-center text-3xl font-extrabold">לקוחות מספרים...</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
