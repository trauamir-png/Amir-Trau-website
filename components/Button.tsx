"use client";

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  gtmEvent?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  gtmEvent,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold transition-colors";
  const variants = {
    primary: "bg-brand-ink text-white hover:bg-brand-teal",
    secondary: "border border-brand-ink/20 text-brand-ink hover:border-brand-ink",
    light: "bg-white text-brand-ink hover:bg-brand-yellow",
  };
  const styles = variants[variant];

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      onClick={gtmEvent ? () => sendGTMEvent({ event: gtmEvent }) : undefined}
    >
      {children}
    </Link>
  );
}
