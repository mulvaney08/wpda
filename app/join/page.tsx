import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Timetable & Join Us",
  description:
    "Join WPDA in Dublin with a clear path by age and level. Ask for timetable guidance and class availability."
};

const pathways = [
  {
    title: "Children Starter Path",
    text: "Introductory classes including Baby Ballroom and beginner youth foundations."
  },
  {
    title: "Teen Development Path",
    text: "Style progression through Ballroom/Latin and Breaking/Hip-Hop training blocks."
  },
  {
    title: "Adult Beginner Path",
    text: "Supportive classes for adults learning solo or as a couple in a no-pressure setting."
  },
  {
    title: "Competitive Path",
    text: "Coaching intensity and performance preparation for dancers targeting events."
  }
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join WPDA"
        title="Find your timetable pathway"
        intro="Class slots vary by age group, level and season. Contact the academy for the most current timetable and placement guidance."
        ctaLabel="Request Current Timetable"
        ctaHref="/contact"
      />

      <section className="section-wrap pb-14">
        <div className="grid gap-5 md:grid-cols-2">
          {pathways.map((path) => (
            <article key={path.title} className="surface p-6">
              <h2 className="font-serif text-2xl">{path.title}</h2>
              <p className="mt-3 text-white/80">{path.text}</p>
            </article>
          ))}
        </div>

        <div className="surface mt-8 p-8 text-center">
          <h2 className="font-serif text-3xl">How to start</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Share your dancer’s age, current experience and preferred style. WPDA will recommend the best class and next available option.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
              Contact Academy Team
            </Link>
            <Link href="/classes" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold">
              View Class Types
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
