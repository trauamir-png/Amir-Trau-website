import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import TrackedLink from "./TrackedLink";
import { navLinks, contactInfo } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-brand-surface">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo-footer.png"
            alt="AMIR TRAU"
            width={1287}
            height={387}
            className="h-32 w-auto md:h-36"
          />
          <p className="max-w-xs text-sm text-brand-muted">
            נראות מקצועית, יותר פניות ויותר לקוחות — אתר, מיתוג ושיווק דיגיטלי
            תחת קורת גג אחת.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-brand-ink">ניווט</span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-brand-muted hover:text-brand-teal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-brand-ink">יצירת קשר</span>
          <a href={contactInfo.phoneHref} className="text-sm text-brand-muted hover:text-brand-teal">
            {contactInfo.phone}
          </a>
          <TrackedLink
            gtmEvent="email_click"
            href={`mailto:${contactInfo.email}`}
            className="text-sm text-brand-muted hover:text-brand-teal"
          >
            {contactInfo.email}
          </TrackedLink>
          <div className="flex gap-4 pt-1">
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פייסבוק"
              className="text-brand-muted hover:text-brand-teal"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.5 1.5-1.5H16.5V4.3c-.27-.04-1.2-.11-2.28-.11-2.26 0-3.8 1.38-3.8 3.9V10.5h-2.5v3h2.5V21h3z" />
              </svg>
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="אינסטגרם"
              className="text-brand-muted hover:text-brand-teal"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.15a4.9 4.9 0 0 0-1.15 1.77c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.15 1.77.55.55 1.11.89 1.77 1.15.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.13.36.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.13-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.13-.36-.3-.88-.34-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.21-1.5.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.13.88-.3 1.86-.34C9.01 3.81 9.33 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-black/5 py-6">
        <Container className="flex flex-col items-center gap-3 text-center text-xs text-brand-muted md:flex-row md:justify-between">
          <span>כל הזכויות שמורות © {new Date().getFullYear()} אמיר טראו</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-teal">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="hover:text-brand-teal">
              תקנון האתר
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
