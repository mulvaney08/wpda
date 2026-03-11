import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Wojtek Potaszkin Dance Academy | Dance Academy Dublin",
    template: "%s | WPDA Dublin"
  },
  description:
    "Premium dance academy in Dublin for Ballroom, Latin, Breaking and Hip-Hop. Classes for children, teens and adults from beginner to competitive level.",
  keywords: [
    "dance academy Dublin",
    "ballroom dancing Dublin",
    "latin dance classes Dublin",
    "breaking classes Dublin",
    "hip hop classes Dublin",
    "dance classes for children Dublin",
    "adult dance classes Dublin"
  ],
  openGraph: {
    title: "Wojtek Potaszkin Dance Academy",
    description:
      "High-level dance training in Dublin: Ballroom, Latin, Breaking and Hip-Hop for children, teens and adults.",
    url: siteConfig.domain,
    siteName: "WPDA",
    locale: "en_IE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wojtek Potaszkin Dance Academy",
    description: "Dublin dance academy for Ballroom, Latin, Breaking and Hip-Hop training."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "EducationalOrganization", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.domain,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.country
    },
    sameAs: [siteConfig.facebook, siteConfig.instagram, siteConfig.youtube],
    areaServed: "Dublin"
  };

  return (
    <html lang="en">
      <body>
        <StructuredData data={schema} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
