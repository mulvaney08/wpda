import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image as SanityImageType } from "sanity";
import { dataset, projectId } from "@/sanity/env";
import type { DisplayImage } from "@/src/types/sanity";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageType) {
  return builder.image(source);
}

export function toDisplayImage(
  image: (SanityImageType & { alt?: string; asset?: { metadata?: { dimensions?: { width?: number; height?: number } } } }) | null | undefined,
  fallbackAlt: string
): DisplayImage | null {
  if (!image) return null;

  const width = image.asset?.metadata?.dimensions?.width;
  const height = image.asset?.metadata?.dimensions?.height;

  if (!width || !height) return null;

  return {
    src: urlFor(image).auto("format").fit("max").width(Math.min(width, 2200)).url(),
    alt: image.alt || fallbackAlt,
    width,
    height
  };
}
