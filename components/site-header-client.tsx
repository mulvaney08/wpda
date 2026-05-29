"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { NavLink } from "@/src/types/sanity";

type SiteHeaderClientProps = {
  navLinks: NavLink[];
  academyName: string;
  whatsapp?: string;
};

export function SiteHeaderClient({ navLinks, academyName, whatsapp }: SiteHeaderClientProps) {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const nameParts = academyName.split(" ");
  const monogram = (nameParts[0]?.[0] ?? "") + (nameParts[1]?.[0] ?? "");

  useEffect(() => {
    mobileMenuRef.current?.removeAttribute("open");
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-base/85 backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between gap-3 py-4 md:gap-8">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-2 text-white md:min-w-fit md:gap-3">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/70 text-xs font-semibold text-gold md:h-9 md:w-9 md:text-sm">
            {monogram}
          </span>
          <span className="truncate text-xs font-semibold tracking-wide !text-white sm:text-sm md:text-base">{academyName}</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-sm tracking-wide transition hover:text-gold ${
                  active ? "text-gold" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden min-w-fit md:block md:-translate-x-4">
          <Link
            href="/join"
            className="rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold hover:bg-gold hover:text-black"
          >
            Join WPDA
          </Link>
        </div>

        <details ref={mobileMenuRef} className="group relative shrink-0 md:hidden">
          <summary className="list-none rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm">Menu</summary>
          <nav className="absolute right-0 mt-3 w-56 rounded-2xl border border-gold/20 bg-panel p-3 shadow-xl" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => mobileMenuRef.current?.removeAttribute("open")}
                className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-gold/10"
              >
                {link.label}
              </Link>
            ))}
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => mobileMenuRef.current?.removeAttribute("open")}
                className="mt-2 block rounded-lg bg-gold px-3 py-2 text-center text-sm font-medium text-black"
              >
                WhatsApp Us
              </a>
            ) : null}
          </nav>
        </details>
      </div>
    </header>
  );
}
