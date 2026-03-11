import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ImagePanel } from "@/components/image-panel";
import { curatedGallery } from "@/data/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Curated gallery from Wojtek Potaszkin Dance Academy featuring Ballroom, Latin, Breaking, classes, competitions and academy life in Dublin."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="WPDA Gallery"
        title="Movement, community and performance moments"
        intro="A curated visual story of academy life across styles, age groups and event experiences at WPDA."
      />

      <section className="section-wrap pb-14">
        <div className="space-y-10">
          {curatedGallery.map((section) => (
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
