import type { Metadata } from "next";
import Container from "@/components/Container";
import { contactInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של אתר AMIR TRAU — איזה מידע נאסף, איך הוא משמש ואילו זכויות יש לך.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold md:text-5xl">מדיניות פרטיות</h1>

        <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-brand-ink">
          <p>
            האתר amirtrau.co.il (להלן: &quot;האתר&quot;) מופעל על ידי אמיר טראו
            (להלן: &quot;מפעיל האתר&quot; או &quot;אנחנו&quot;). מדיניות זו נערכה
            בהתאם להוראות חוק הגנת הפרטיות, התשמ&quot;א-1981, ותקנות הגנת
            הפרטיות (אבטחת מידע), התשע&quot;ז-2017. מטרתה להבהיר לגולשי האתר
            (להלן: &quot;המשתמש&quot;) כיצד אנו אוספים, משתמשים, שומרים ומעבירים
            מידע אישי, ומהן זכויותיך על פי הדין.
          </p>

          <div>
            <h2 className="text-xl font-bold">1. איסוף מידע</h2>
            <p className="mt-3">בעת השימוש באתר, אנו עשויים לאסוף את סוגי המידע הבאים:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pr-5">
              <li>
                מידע שמסרת מרצונך — כגון שם, כתובת דוא&quot;ל, מספר טלפון ופרטי
                התקשרות נוספים שתמסור/י בטופס יצירת הקשר או בפנייה אחרת.
              </li>
              <li>
                מידע טכני אוטומטי — כגון כתובת IP, סוג הדפדפן, מערכת ההפעלה,
                משך זמן השהייה באתר, עמודים שנצפו ומידע סטטיסטי אחר.
              </li>
              <li>
                קוקיז (Cookies) וטכנולוגיות מעקב — האתר עשוי לעשות שימוש
                בקוקיז ובכלים כגון Google Analytics לצורך תפעול תקין של האתר
                ואיסוף נתונים סטטיסטיים. ניתן לנהל את ההעדפות שלך דרך באנר
                הקוקיז באתר או דרך הגדרות הדפדפן.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">2. מטרות השימוש במידע</h2>
            <p className="mt-3">המידע שנאסף משמש אותנו, בין היתר, ל:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pr-5">
              <li>מענה לפניותיך ומתן שירות.</li>
              <li>שיפור חוויית המשתמש באתר.</li>
              <li>ניתוח סטטיסטי לשיפור השירות.</li>
              <li>עמידה בהוראות כל דין.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">3. מסירת מידע לצד שלישי</h2>
            <p className="mt-3">
              אנו לא נמכור או נשכיר את פרטיך לצדדים שלישיים. עם זאת, ייתכן
              שנעביר מידע ל:
            </p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pr-5">
              <li>ספקי שירותים מטעמנו (כגון שירותי אחסון ושליחת מיילים).</li>
              <li>רשויות מוסמכות, אם הדבר נדרש לפי חוק או צו שיפוטי.</li>
              <li>שותפים עסקיים, ככל שניתנה לכך הסכמתך המפורשת.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">4. מסירת המידע — חובה או רשות</h2>
            <p className="mt-3">
              אין חובה חוקית למסור מידע, ומסירתו תלויה ברצונך. עם זאת, ייתכן
              שבלי מסירת המידע לא נוכל לספק לך מענה או שירות מסוים.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">5. שמירת המידע</h2>
            <p className="mt-3">
              המידע יישמר במאגרי המידע של מפעיל האתר, בהתאם לדרישות החוק,
              למשך הזמן הדרוש להגשמת מטרות השימוש המפורטות במדיניות זו או
              כנדרש לפי דין.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">6. אבטחת המידע</h2>
            <p className="mt-3">
              אנו נוקטים באמצעי אבטחה סבירים ומקובלים לשמירה על המידע מפני
              גישה, שימוש או חשיפה בלתי מורשים. עם זאת, איננו יכולים להבטיח
              אבטחה מוחלטת.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">7. זכויות המשתמש</h2>
            <p className="mt-3">
              בהתאם לחוק, כל אדם זכאי לעיין במידע שנאסף עליו, ולבקש את תיקונו
              או מחיקתו. למימוש זכויותיך, ניתן לפנות אלינו בדוא&quot;ל{" "}
              <a href={`mailto:${contactInfo.email}`} className="font-semibold hover:text-brand-teal">
                {contactInfo.email}
              </a>{" "}
              או בטלפון{" "}
              <a href={contactInfo.phoneHref} className="font-semibold hover:text-brand-teal">
                {contactInfo.phone}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">8. שינויים במדיניות</h2>
            <p className="mt-3">
              אנו רשאים לשנות מדיניות זו מעת לעת. הגרסה העדכנית תמיד תפורסם
              באתר.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
