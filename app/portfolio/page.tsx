import type { Metadata } from "next";
import Container from "@/components/Container";
import PortfolioCard from "@/components/PortfolioCard";
import CtaSection from "@/components/CtaSection";
import { portfolioItems } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "פורטפוליו",
  description: "עבודות נבחרות — אתרים, חנויות ודפי נחיתה שנבנו עבור לקוחות.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-20 pb-16">
        <Container className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">פורטפוליו</h1>
          <p className="mt-6 text-lg text-brand-muted">
            אתרים שבניתי עבור לקוחות אמיתיים — עוד פרויקטים בדרך.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="יש לכם פרויקט בראש?"
        subtitle="גם בלי לחכות לפורטפוליו המלא — אפשר כבר עכשיו לדבר על הפרויקט שלכם."
      />
    </>
  );
}
