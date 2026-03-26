import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { SanityLive } from "@/sanity/lib/live";
import { getSiteShell } from "@/sanity/lib/loaders";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteShell();

  return {
    metadataBase: new URL(site.domain),
    title: {
      default: site.defaultSeo?.title || `${site.academyName} | Dance Academy Dublin`,
      template: "%s | WPDA Dublin"
    },
    description:
      site.defaultSeo?.description ||
      "Premium dance academy in Dublin for Ballroom, Latin, Breaking and Hip-Hop. Classes for children, teens and adults from beginner to competitive level.",
    robots: site.defaultSeo?.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: site.defaultSeo?.title || site.academyName,
      description: site.defaultSeo?.description || site.tagline,
      url: site.domain,
      siteName: site.shortName,
      locale: "en_IE",
      type: "website"
    }
  };
}

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const site = await getSiteShell();
  const isDraft = (await draftMode()).isEnabled;

  const schema = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "EducationalOrganization", "LocalBusiness"],
    name: site.academyName,
    url: site.domain,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "Ireland"
    },
    sameAs: site.socialLinks.map((item: { url: string }) => item.url),
    areaServed: "Dublin"
  };

  return (
    <>
      <StructuredData data={schema} />
      <SiteHeader site={site} />
      <main>{children}</main>
      <SiteFooter site={site} />
      <SanityLive />
      {isDraft ? <VisualEditing /> : null}
    </>
  );
}
