import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Wojtek Potaszkin",
  description:
    "Profile of Wojtek Potaszkin, founder of WPDA: competition history, international experience, adjudicator credentials and academy vision."
};

const timeline = [
  "Started dancing in Poland as a child and developed a strong competitive foundation.",
  "Built successful competition results and international dance experience.",
  "Moved to Ireland in 2009 and rose to become one of the country's top dancers.",
  "Competed internationally while expanding his role as coach and academy leader.",
  "Earned professional Ballroom and Latin qualifications.",
  "Holds Irish National adjudicator licence and WDSF adjudicator licence.",
  "Featured in media and TV appearances related to dance and performance."
];

export default function WojtekPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder Profile"
        title="Wojtek Potaszkin"
        intro="Wojtek built WPDA to combine discipline, passion and elite dance standards in a supportive academy structure for every generation of dancer."
        ctaLabel="Train With WPDA"
        ctaHref="/contact"
      />

      <section className="section-wrap pb-12">
        <SectionHeading
          eyebrow="Career Journey"
          title="From early dance in Poland to leading a Dublin academy"
          intro="His trajectory reflects long-term commitment to high-level Ballroom and Latin performance, coaching and adjudication."
        />
        <div className="mt-7 space-y-4">
          {timeline.map((item, index) => (
            <article key={item} className="surface p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Chapter {index + 1}</p>
              <p className="mt-2 text-white/85">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-14">
        <div className="surface p-8 sm:p-10">
          <h2 className="font-serif text-4xl">The WPDA Standard</h2>
          <p className="mt-4 max-w-3xl text-white/80">
            The academy culture is shaped by Wojtek’s core principles: dedicated work, positive attitude and genuine passion for dance. Those values guide beginner development, competitive preparation and every class experience across the studio.
          </p>
        </div>
      </section>
    </>
  );
}
