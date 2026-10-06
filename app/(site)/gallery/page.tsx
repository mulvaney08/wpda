import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ImagePanel } from "@/components/image-panel";
import { getGalleryPage, getPageSeo } from "@/sanity/lib/loaders";
import { homepageImages } from "@/data/images";
import { createPageMetadata } from "@/src/lib/page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const [seo, gallery] = await Promise.all([getPageSeo("gallery"), getGalleryPage()]);

  return createPageMetadata({
    title: seo?.title || "Gallery",
    description:
      seo?.description ||
      "Curated gallery from Wojtek Potaszkin Dance Academy featuring Ballroom, Latin, Breaking, classes, competitions and academy life in Dublin.",
    pathname: "/gallery",
    image: seo?.ogImage || gallery[0]?.images[0] || homepageImages.teamMoment,
    noindex: seo?.noindex
  });
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
