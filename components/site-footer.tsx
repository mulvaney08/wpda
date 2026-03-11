import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <div className="section-wrap grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            Premium Ballroom, Latin, Breaking and Hip-Hop training in Dublin for children, teens, adults and competitive dancers.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {navLinks.map((link) => (
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
            <li>
              <a href={siteConfig.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                Facebook
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
                Instagram
              </a>
            </li>
            <li>
              <a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="hover:text-gold">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-wrap mt-10 border-t border-white/10 pt-6 text-xs text-white/55">
        <p>© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
