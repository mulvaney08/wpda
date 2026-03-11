import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ImagePanel } from "@/components/image-panel";
import { successHighlights } from "@/data/site";
import { competitiveImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Competitive Dance & Success",
  description:
    "Discover WPDA's competitive training pathway, academy achievements and championship-focused coaching in Dublin."
};

const pathway = [
  "Foundation technique and movement quality",
  "Performance mindset and choreography blocks",
  "Partnering, floorcraft and event simulation",
  "National and international event preparation"
];

const milestones = [
  "Academy dancers progressing into tournament circuits",
  "Championship and event participation throughout the season",
  "WPDA dancers representing Ireland in selected events",
  "Regular success and update posts shared by the academy"
];

export default function CompetitivePage() {
  return (
    <>
      <PageHero
        eyebrow="Competitive Dance"
        title="For dancers aiming higher, with coaching that keeps confidence high"
        intro="WPDA offers a structured performance and competition pathway backed by technical coaching, strategic preparation and strong team support."
        ctaLabel="Discuss Competitive Training"
        ctaHref="/contact"
      />

      <section className="section-wrap pb-12">
        <div className="grid gap-6 lg:grid-cols-5">
          <ImagePanel image={competitiveImages.feature} className="aspect-[4/5] lg:col-span-2" />
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Pathway" title="How competitive dancers train at WPDA" />
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {pathway.map((step, index) => (
                <article key={step} className="surface p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">Stage {index + 1}</p>
                  <h2 className="mt-2 text-lg font-semibold">{step}</h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-12">
        <SectionHeading
          eyebrow="Academy Achievements"
          title="Aspirational progress across age groups"
          intro="WPDA celebrates not only podium moments, but also the confidence and growth dancers build while preparing for events."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {successHighlights.map((item) => (
            <p key={item} className="surface p-5 text-white/80">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <ImagePanel image={competitiveImages.kidsComp} className="h-[470px] md:h-[534px]" />
          <ImagePanel image={competitiveImages.hug} className="h-[470px] md:h-[534px]" imgClassName="object-[0px_-75px]" />
        </div>
        <div className="surface mt-6 p-7 sm:p-8">
          <SectionHeading eyebrow="Featured Milestones" title="Recent WPDA success direction" />
          <ul className="mt-6 space-y-3 text-white/80">
            {milestones.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-black/25 p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-wrap py-14">
        <div className="surface p-8 text-center sm:p-10">
          <h2 className="font-serif text-4xl">A pathway that supports both ambition and wellbeing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Dancers receive challenging coaching while staying connected to a positive studio environment where progress feels sustainable.
          </p>
          <Link href="/classes" className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
            Explore Pathway Classes
          </Link>
        </div>
      </section>
    </>
  );
}
