export type PortfolioItem = {
  id: string;
  name: string;
  category: string;
  summary: string;
  url?: string;
  image?: string;
  mobileImage?: string;
  placeholder?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "hatomech",
    name: "התומך",
    category: "אתר תדמית לעסק פיגומים",
    summary:
      "אתר תדמית לחברת פיגומים המציג את הפרויקטים, ההמלצות והדרכים ליצירת קשר.",
    url: "https://hatomech.co.il",
    image: "/portfolio/hatomech.jpg",
    mobileImage: "/portfolio/hatomech-mobile.jpg",
  },
  {
    id: "newrivista",
    name: "NewRivista",
    category: "מגזין אופנה דיגיטלי",
    summary:
      "מגזין אופנה ותוכן יצירתי עם טרנדים, הפקות אופנה ומעצבים ישראלים — מבנה תוכן עשיר וניווט לפי קטגוריות.",
    url: "https://newrivista.com",
    image: "/portfolio/newrivista-v2.jpg",
    mobileImage: "/portfolio/newrivista-mobile.jpg",
  },
  {
    id: "gant",
    name: "GANT ישראל",
    category: "חנות אונליין לאופנת פרימיום",
    summary:
      "חנות איקומרס רשמית של מותג GANT בישראל — קטלוג מוצרים לגברים, נשים וילדים, מבצעים ומערכת סינון לפי קטגוריות.",
    url: "https://gant.co.il",
    image: "/portfolio/gant.jpg",
    mobileImage: "/portfolio/gant-mobile.jpg",
  },
  {
    id: "chozen",
    name: "CHOZEN",
    category: "חנות אונליין לאופנה",
    summary:
      "חנות איקומרס של היבואן הרשמי קבוצת אלפא — קטלוג מותגי אופנה מובילים, קמפיינים עונתיים ומבצעים.",
    url: "https://chozen.co.il",
    image: "/portfolio/chozen.jpg",
    mobileImage: "/portfolio/chozen-mobile.jpg",
  },
  {
    id: "shirakofman",
    name: "שירה קופמן",
    category: "אתר תדמית למשרד עורכי דין",
    summary:
      "אתר תדמית למשרד עורכת דין, מגשרת ונוטריון — ליווי משפטי מקצועי ואישי, תחומי עיסוק ותיאום פגישות אונליין.",
    url: "https://shirakofman.vercel.app",
    image: "/portfolio/shirakofman.jpg",
    mobileImage: "/portfolio/shirakofman-mobile.jpg",
  },
  {
    id: "norde",
    name: "NORDE",
    category: "חנות אונליין לאופנת גברים",
    summary:
      "חנות איקומרס למותג אופנת גברים מינימליסטי — קולקציות עונתיות, עיצוב נקי ומרוכז וחוויית קנייה איכותית.",
    url: "https://norde-tawny.vercel.app",
    image: "/portfolio/norde.jpg",
    mobileImage: "/portfolio/norde-mobile.jpg",
  },
];
