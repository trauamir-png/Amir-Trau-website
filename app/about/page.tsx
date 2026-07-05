import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "קצת עלי",
  description: "ההיכרות עם אמיר טראו — הרקע, הדרך לדיגיטל, והגישה לעבודה עם לקוחות.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16">
        <Container className="grid gap-12 md:grid-cols-[minmax(0,420px)_1fr] md:items-start">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl shadow-sm md:mx-0 md:max-w-none">
            <Image
              src="/amir-trau-cafe.jpg"
              alt="אמיר טראו"
              width={1024}
              height={1024}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-extrabold md:text-5xl">קצת עלי</h1>

            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-brand-ink">
              <p>
                לפני שהפכתי לעצמאי, עבדתי שנים רבות כשכיר בעולם המכירות — גם
                כסוכן וגם כמנהל. הניסיון הזה נותן לי הבנה אמיתית בתהליך מכירה
                בפועל, לא רק תיאוריה. זה בדיוק מה שעוזר לי היום לבנות אתרים
                וקמפיינים שלא רק &quot;נראים טוב&quot; — אלא גם מביאים תוצאה
                עסקית.
              </p>
              <p>
                לתוך עולם הדיגיטל נכנסתי בעצמי, בלמידה עצמית ובנחישות. היום
                אני חי ונושם דיגיטל: בונה אתרים, מנהל קמפיינים בפייסבוק
                ואינסטגרם וטיקטוק, מעצב זהות מותגית, ומשלב כלי AI כדי לייצר
                תוכן מהר ובאיכות גבוהה.
              </p>
              <p>
                עבדתי עם עשרות לקוחות — מעסקים קטנים ועד חברות גדולות יותר —
                ותמיד באותה גישה: אני האדם היחיד שמוביל את הפרויקט שלכם, מקצה
                לקצה. אין &quot;מעביר אתכם לצוות&quot;, אין תלות בפרילנסר
                שנעלם — יש מישהו אחד שמכיר את העסק שלכם ונשאר זמין גם אחרי
                ההשקה.
              </p>
              <p>
                אני מאמין ש&quot;דיגיטל מקצועי&quot; לא שמור רק לעסקים
                גדולים. כל עסק קטן ובינוני יכול להיראות מקצועי, להיות מסודר
                בנוכחות הדיגיטלית שלו, ולקבל מזה תוצאה אמיתית — יותר פניות
                ויותר לקוחות.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="בואו נכיר"
        subtitle="ספרו לי קצת על העסק שלכם — נדבר, נבין מה נכון לכם, ונראה איך אפשר לעזור."
      />
    </>
  );
}
