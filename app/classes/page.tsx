import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { classCategories, faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Explore WPDA classes in Dublin: Baby Ballroom, beginner children and adult classes, Breaking, Hip-Hop, private lessons, wedding lessons and competition pathways."
};

export default function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Classes At WPDA"
        title="Clear pathways from first class to competitive floor"
        intro="Class options for children, teens and adults across Ballroom, Latin, Breaking and Hip-Hop. Join solo or with a partner depending on your pathway."
        ctaLabel="Ask About Your Level"
        ctaHref="/contact"
      />

      <section className="section-wrap pb-12">
        <SectionHeading
          eyebrow="Program Structure"
          title="Choose by age, style and ambition"
          intro="Whether you want beginner confidence, social dance progression or high-level competition training, WPDA offers structured routes into the right class group."
        />
        <div className="mt-8 space-y-6">
          {classCategories.map((group) => (
            <article key={group.title} className="surface p-6 sm:p-8">
              <h2 className="font-serif text-3xl">{group.title}</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {group.classes.map((cls) => (
                  <div key={cls.name} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                    <h3 className="font-semibold text-lg">{cls.name}</h3>
                    <p className="mt-2 text-sm text-gold">For: {cls.audience}</p>
                    <p className="mt-3 text-sm text-white/80">{cls.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/60">Partner: {cls.partnerRequired}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-12">
        <SectionHeading eyebrow="FAQs" title="Quick answers before you start" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.q} className="surface p-6">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="mt-3 text-sm text-white/80">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-14">
        <div className="surface p-8 text-center sm:p-10">
          <h2 className="font-serif text-4xl">Not sure where to begin?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Tell us your age group, experience level and preferred style. We will guide you to the best starting point.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
              Contact The Academy
            </Link>
            <Link href="/join" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold">
              Timetable Pathways
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
