import Link from "next/link";
import type { SiteShell } from "@/src/types/sanity";

type SiteFooterProps = {
  site: SiteShell;
};

export function SiteFooter({ site }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <div className="section-wrap grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{site.academyName}</p>
          <p className="mt-3 max-w-sm text-sm text-white/70">{site.footerText}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Connect</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {site.socialLinks.map((item: { platform: string; url: string }) => (
              <li key={item.platform}>
                <a href={item.url} target="_blank" rel="noreferrer" className="hover:text-gold">
                  {item.platform[0].toUpperCase() + item.platform.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-wrap mt-10 border-t border-white/10 pt-6 text-xs text-white/55">
        <p>
          © {new Date().getFullYear()} {site.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
