import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ImagePanel } from "@/components/image-panel";
import { getGalleryPage, getPageSeo } from "@/sanity/lib/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("gallery");

  return {
    title: seo?.title || "Gallery",
    description:
      seo?.description ||
      "Curated gallery from Wojtek Potaszkin Dance Academy featuring Ballroom, Latin, Breaking, classes, competitions and academy life in Dublin.",
    robots: seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function GalleryPage() {
  const gallery = await getGalleryPage();

  return (
    <>
      <PageHero
        eyebrow="WPDA Gallery"
        title="Movement, community and performance moments"
        intro="A curated visual story of academy life across styles, age groups and event experiences at WPDA."
      />

      <section className="section-wrap pb-14">
        <div className="space-y-10">
          {gallery.map((section) => (
            <article key={section.title}>
              <h2 className="font-serif text-3xl">{section.title}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {section.images.map((image) => (
                  <ImagePanel key={image.src} image={image} className="aspect-[4/5]" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
