"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/70 text-sm font-semibold text-gold">
            WP
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg tracking-wide">Wojtek Potaszkin</span>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/70">Dance Academy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition hover:text-gold ${
                  active ? "text-gold" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold hover:bg-gold hover:text-black"
          >
            Join WPDA
          </Link>
        </div>

        <details className="group md:hidden">
          <summary className="list-none rounded-full border border-white/15 px-4 py-2 text-sm">Menu</summary>
          <nav className="absolute right-4 mt-3 w-56 rounded-2xl border border-white/15 bg-panel p-3 shadow-xl" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10">
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.whatsapp}
              className="mt-2 block rounded-lg bg-gold px-3 py-2 text-center text-sm font-medium text-black"
            >
              WhatsApp Us
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
