import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ImagePanel } from "@/components/image-panel";
import { getWojtekPage } from "@/sanity/lib/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getWojtekPage();

  return {
    title: page.seo?.title || "Wojtek Potaszkin",
    description:
      page.seo?.description ||
      "Profile of Wojtek Potaszkin, founder of WPDA: competition history, international experience, adjudicator credentials and academy vision.",
    robots: page.seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function WojtekPage() {
  const page = await getWojtekPage();

  return (
    <>
      <PageHero
        eyebrow="Founder Profile"
        title={page.headline}
        intro={page.intro}
        ctaLabel="Train With WPDA"
        ctaHref="/contact"
      />

      <section className="section-wrap pb-12">
        <div className="grid gap-6 lg:grid-cols-5">
          <ImagePanel image={page.heroImage} className="h-[520px] lg:col-span-2 lg:h-full" imgStyle={{ objectPosition: "50% 50%" }} priority />
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="Career Journey"
              title="From early dance in Poland to leading a Dublin academy"
              intro="Wojtek brings years of Ballroom and Latin experience into a studio culture that is encouraging, friendly and focused on helping dancers feel confident."
            />
            <div className="mt-6 space-y-3">
              {page.biographySections.map((item: string, index: number) => (
                <article key={item} className="surface p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Chapter {index + 1}</p>
                  <p className="mt-2 text-white/85">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-12">
        <SectionHeading eyebrow="Founder Gallery" title="Moments from Wojtek's dance journey" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.gallery.map((image) => {
            const imagePosition =
              image.alt === "Wojtek Potaszkin studio portrait"
                ? "50% 18%"
                : image.alt === "Wojtek Potaszkin judging detail"
                  ? "50% 12%"
                  : "50% 50%";

            return <ImagePanel key={image.src} image={image} className="aspect-square" imgStyle={{ objectPosition: imagePosition }} />;
          })}
        </div>
      </section>

      <section className="section-wrap py-14">
        <div className="surface p-8 sm:p-10">
          <h2 className="text-4xl font-semibold">What Wojtek wants dancers to feel</h2>
          <p className="mt-4 max-w-3xl text-white/85">
            {page.philosophy ||
              "The academy culture is shaped by encouragement, care and a genuine love of dance. Beginners are helped to feel comfortable, and growing dancers are supported with patience at every step."}
          </p>
        </div>
      </section>
    </>
  );
}
