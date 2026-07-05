import Container from "./Container";
import Button from "./Button";

export default function CtaSection({
  title = "בואו נתחיל פרויקט",
  subtitle = "השאירו פרטים ואמיר יחזור אליכם באופן אישי — בלי מכירה, רק שיחת היכרות קצרה.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-ink px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
          <p className="max-w-xl text-white/80">{subtitle}</p>
          <Button href="/contact" variant="light" gtmEvent="contact_button_click">
            צור קשר עכשיו
          </Button>
        </div>
      </Container>
    </section>
  );
}
