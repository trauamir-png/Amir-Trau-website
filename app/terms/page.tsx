import type { Metadata } from "next";
import Container from "@/components/Container";
import { contactInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "תקנון האתר",
  description: "תקנון ותנאי השימוש באתר AMIR TRAU.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold md:text-5xl">תקנון האתר</h1>
        <p className="mt-4 text-brand-muted">תקנון ותנאי שימוש באתר — Amir Trau</p>

        <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-brand-ink">
          <div>
            <h2 className="text-xl font-bold">1. כללי</h2>
            <ul className="mt-3 flex flex-col gap-2 list-disc pr-5">
              <li>
                אתר זה (להלן: &quot;האתר&quot;) הינו אתר תדמיתי בבעלות אמיר
                טראו (להלן: &quot;בעל האתר&quot;), המציג את שירותי הסטודיו
                בתחומי בניית אתרים, עיצוב גרפי, מיתוג ושיווק דיגיטלי.
              </li>
              <li>
                הגלישה באתר והשימוש בו ובתכניו מהווים הסכמה מצדך (להלן:
                &quot;המשתמש&quot;) לכל התנאים המפורטים בתקנון זה. אם אינך
                מסכים לתנאים אלו, הנך מתבקש להימנע משימוש באתר.
              </li>
              <li>התקנון מנוסח בלשון זכר מטעמי נוחות בלבד, אך פונה לנשים ולגברים כאחד.</li>
              <li>
                בעל האתר שומר לעצמו את הזכות לעדכן או לשנות את התקנון מעת
                לעת, לפי שיקול דעתו הבלעדי וללא צורך בהודעה מוקדמת.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">2. קניין רוחני</h2>
            <ul className="mt-3 flex flex-col gap-2 list-disc pr-5">
              <li>
                כל זכויות הקניין הרוחני באתר, לרבות עיצוב האתר, קוד המקור,
                התכנים, קבצי הגרפיקה, התמונות, הלוגו והסימנים המסחריים, הינם
                רכושו הבלעדי של בעל האתר.
              </li>
              <li>
                אין להעתיק, לשכפל, להפיץ, לשדר, להציג בפומבי או לעשות כל
                שימוש מסחרי או אחר בתוכן המופיע באתר ללא קבלת אישור מפורש
                ובכתב מבעל האתר.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">3. השירותים באתר והגבלת אחריות</h2>
            <ul className="mt-3 flex flex-col gap-2 list-disc pr-5">
              <li>
                האתר נועד לספק מידע אודות השירותים, להציג תיק עבודות ולאפשר
                יצירת קשר. המידע באתר אינו מהווה תחליף לייעוץ מקצועי פרטני.
              </li>
              <li>
                האתר מוצע כמות שהוא (&quot;As Is&quot;). בעל האתר עושה מאמצים
                לוודא שהמידע נכון ומדויק, אך לא יישא באחריות לכל טעות,
                אי-דיוק או השמטה בתוכן.
              </li>
              <li>
                בעל האתר לא יישא באחריות לכל נזק, ישיר או עקיף, שייגרם למשתמש
                או לצד שלישי כתוצאה משימוש באתר או הסתמכות על תכניו.
              </li>
              <li>
                התקשרות עסקית לקבלת שירותים תיעשה בכפוף להסכם עבודה נפרד מול
                הלקוח, ואין במידע באתר כדי לחייב את בעל האתר במתן שירות כלשהו.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">4. מסירת פרטים ופרטיות</h2>
            <ul className="mt-3 flex flex-col gap-2 list-disc pr-5">
              <li>
                בעת השארת פרטים בטופס יצירת הקשר באתר (שם, טלפון, דוא&quot;ל),
                המשתמש מתחייב למסור פרטים נכונים.
              </li>
              <li>
                הפרטים שיימסרו ישמשו את בעל האתר לצורך יצירת קשר, מענה
                לפניות, ואספקת מידע רלוונטי לשירותים המבוקשים.
              </li>
              <li>
                בעל האתר מתחייב שלא להעביר את פרטי המשתמשים לצדדים שלישיים,
                למעט במקרים המחויבים על פי חוק. לפרטים נוספים ראו את{" "}
                <a href="/privacy" className="font-semibold hover:text-brand-teal">
                  מדיניות הפרטיות
                </a>
                .
              </li>
              <li>
                האתר עשוי להשתמש ב&quot;עוגיות&quot; (Cookies) לצורך תפעולו
                השוטף, שיפור חוויית המשתמש ואיסוף נתונים סטטיסטיים. גלישה
                באתר מהווה הסכמה לשימוש זה.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">5. קישורים חיצוניים</h2>
            <p className="mt-3">
              באתר עשויים להופיע קישורים לאתרים חיצוניים (כגון רשתות חברתיות
              או אתרי לקוחות). בעל האתר אינו אחראי לתוכן, למדיניות הפרטיות או
              לתקינותם של אתרים אלו.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">6. נגישות</h2>
            <p className="mt-3">
              בעל האתר רואה חשיבות רבה בהנגשת האתר לכלל האוכלוסייה, בהתאם
              להוראות החוק. אם נתקלתם בבעיית נגישות, אתם מוזמנים לפנות אלינו
              ונטפל בנושא בהקדם.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">7. סמכות שיפוט</h2>
            <p className="mt-3">
              על תקנון זה ועל השימוש באתר יחולו אך ורק דיני מדינת ישראל.
              סמכות השיפוט הבלעדית בכל עניין הקשור לאתר זה נתונה לבתי המשפט
              המוסמכים במחוז תל-אביב.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">8. יצירת קשר</h2>
            <p className="mt-3">
              בכל שאלה הנוגעת לתקנון זה או לשימוש באתר, ניתן לפנות אלינו
              בדוא&quot;ל{" "}
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
        </div>
      </Container>
    </section>
  );
}
