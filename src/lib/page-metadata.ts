import type { Metadata } from "next";
import type { DisplayImage } from "@/src/types/sanity";

type PageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  image: DisplayImage | null | undefined;
  noindex?: boolean;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  pathname,
  image,
  noindex,
  type = "website"
}: PageMetadataOptions): Metadata {
  const images = image
    ? [{ url: image.src, alt: image.alt, width: image.width, height: image.height }]
    : undefined;

  return {
    title,
    description,
    robots: noindex ? { index: false, follow: false } : undefined,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: "WPDA",
      locale: "en_IE",
      type,
      images
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images
    }
  };
}
