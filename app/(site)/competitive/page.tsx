import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ImagePanel } from "@/components/image-panel";
import { getCompetitionPage } from "@/sanity/lib/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCompetitionPage();

  return {
    title: page.seo?.title || "Performance & Competition",
    description:
      page.seo?.description ||
      "See how WPDA supports dancers who are ready for performances and competitions with encouragement, care and clear coaching.",
    robots: page.seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function CompetitivePage() {
  const page = await getCompetitionPage();
  const images = page.supportingImages.length >= 3 ? page.supportingImages : page.fallbackImages;

  return (
    <>
      <PageHero
        eyebrow="Ready For More"
        title="For dancers who are excited to take the next step"
        intro={page.intro}
        ctaLabel="Ask About The Next Step"
        ctaHref="/contact"
      />

      <section className="section-wrap pb-12">
        <div className="grid gap-6 lg:grid-cols-5">
          <ImagePanel image={images[0]} className="aspect-[4/5] lg:col-span-2" />
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="How It Works" title="Support for performances and competitions" />
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {page.pathway.map((step: string, index: number) => (
                <article key={step} className="surface p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Step {index + 1}</p>
                  <h2 className="mt-2 text-lg font-semibold">{step}</h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-12">
        <SectionHeading
          eyebrow="Proud Moments"
          title="Progress worth celebrating"
          intro="We celebrate the big results, but also the quieter moments: a braver performance, a stronger routine, or a dancer feeling proud of themselves."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {page.achievements.map((item: string) => (
            <p key={item} className="surface p-5 text-white/85">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <ImagePanel image={images[1]} className="aspect-[3/4]" />
          <ImagePanel image={images[2]} className="aspect-[3/4]" />
        </div>
        <div className="surface mt-6 p-7 sm:p-8">
          <SectionHeading eyebrow="Milestones" title="Recent WPDA moments" />
          <ul className="mt-6 space-y-3 text-white/85">
            {page.milestones.map((item: string) => (
              <li key={item} className="rounded-xl border border-gold/15 bg-gold/10 p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-wrap py-14">
        <div className="surface p-8 text-center sm:p-10">
          <h2 className="text-4xl font-semibold">Growing can still feel encouraging</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            When a dancer is ready for more, we help them grow without losing the friendly studio feeling that made them want to dance in the first place.
          </p>
          <Link href="/classes" className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
            Explore Classes
          </Link>
        </div>
      </section>
    </>
  );
}
