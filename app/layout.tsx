import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const heebo = localFont({
  src: "./fonts/Heebo-VariableFont_wght.ttf",
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amirtrau.co.il"),
  title: {
    default: "AMIR TRAU | בניית אתרים, שיווק דיגיטלי ומיתוג",
    template: "%s | AMIR TRAU",
  },
  description:
    "סטודיו לשיווק דיגיטלי ובניית אתרים לעסקים קטנים ובינוניים. אתרים, דפי נחיתה, מיתוג ושיווק דיגיטלי תחת קורת גג אחת.",
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "AMIR TRAU",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "אמיר טראו — סטודיו לבניית אתרים, שיווק דיגיטלי ומיתוג",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full`}>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className="min-h-full flex flex-col font-sans text-brand-ink bg-background antialiased">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
