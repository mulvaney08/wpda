import { SiteHeaderClient } from "@/components/site-header-client";
import type { SiteShell } from "@/src/types/sanity";

type SiteHeaderProps = {
  site: SiteShell;
};

export function SiteHeader({ site }: SiteHeaderProps) {
  return (
    <SiteHeaderClient
      navLinks={site.navLinks}
      academyName={site.academyName}
      tagline={site.tagline}
      whatsapp={site.whatsapp}
    />
  );
}
