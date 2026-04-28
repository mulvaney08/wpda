import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image as SanityImageType } from "sanity";
import { dataset, projectId } from "@/sanity/env";
import type { DisplayImage } from "@/src/types/sanity";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageType) {
  return builder.image(source);
}

export function toDisplayImage(
  image: (
    SanityImageType & {
      alt?: string;
      asset?: { _ref?: string; _id?: string; metadata?: { dimensions?: { width?: number; height?: number } } };
      assetMeta?: { metadata?: { dimensions?: { width?: number; height?: number } } };
    }
  ) | null | undefined,
  fallbackAlt: string
): DisplayImage | null {
  if (!image) return null;

  const rawRef = (image as { asset?: { _ref?: string } }).asset?._ref;
  if (typeof rawRef === "string" && rawRef.trim().length === 0) return null;

  const refFromAsset = image.asset?._ref || image.asset?._id;
  const parsedFromRef = parseDimensionsFromAssetRef(refFromAsset);

  const width = image.asset?.metadata?.dimensions?.width || image.assetMeta?.metadata?.dimensions?.width || parsedFromRef?.width;
  const height = image.asset?.metadata?.dimensions?.height || image.assetMeta?.metadata?.dimensions?.height || parsedFromRef?.height;

  if (!width || !height) return null;

  let src: string;
  try {
    src = urlFor(image).auto("format").fit("max").width(Math.min(width, 2200)).url();
  } catch {
    return null;
  }

  return {
    src,
    alt: image.alt || fallbackAlt,
    width,
    height
  };
}

function parseDimensionsFromAssetRef(ref: string | undefined) {
  if (!ref) return null;
  const match = ref.match(/-(\d+)x(\d+)-[a-z0-9]+$/i);
  if (!match) return null;

  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!width || !height) return null;

  return { width, height };
}
