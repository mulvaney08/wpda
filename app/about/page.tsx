import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { valuePillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About The Academy",
  description:
    "Learn about WPDA's mission, coaching philosophy and supportive class culture for children, adults and competitive dancers in Dublin."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WPDA"
        title="Built on dedication, attitude and passion"
        intro="Wojtek Potaszkin Dance Academy is a Dublin dance community where ambitious standards and a caring atmosphere work together for every dancer."
        ctaLabel="Meet The Team"
        ctaHref="/team"
      />

      <section className="section-wrap pb-12">
        <SectionHeading
          eyebrow="Who We Serve"
          title="From first steps to performance-ready dancers"
          intro="WPDA welcomes very young children, teens and adults. The academy supports complete beginners, recreational learners and dancers pursuing competitive goals in Ballroom, Latin, Breaking and Hip-Hop."
        />
      </section>

      <section className="section-wrap pb-12">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="surface p-7">
            <h2 className="font-serif text-3xl">Our Teaching Philosophy</h2>
            <p className="mt-4 text-white/80">
              Great dance training combines technical precision with emotional confidence. Coaches at WPDA focus on fundamentals, musicality, performance expression and healthy training habits.
            </p>
            <p className="mt-4 text-white/80">
              Every dancer receives clear progression goals and encouragement to reach full potential in a positive, disciplined environment.
            </p>
          </article>
          <article className="surface p-7">
            <h2 className="font-serif text-3xl">Parents & Dancers Partnership</h2>
            <p className="mt-4 text-white/80">
              The academy works in partnership with families through transparent communication, class guidance and practical support around events and development milestones.
            </p>
            <p className="mt-4 text-white/80">
              This shared approach helps dancers stay motivated, safe and happy while building long-term progress.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap pb-12">
        <SectionHeading eyebrow="Core Values" title="What shapes the WPDA studio culture" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="surface p-5">
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/80">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-14">
        <div className="surface p-8 sm:p-10">
          <h2 className="font-serif text-4xl">Beginner to Competitive, Step by Step</h2>
          <p className="mt-4 max-w-3xl text-white/80">
            Dancers can start with fundamentals, progress through structured class levels, and move into focused coaching for tournaments and championships. This pathway is central to the academy’s identity and long-term dancer development.
          </p>
          <Link href="/competitive" className="mt-7 inline-flex text-sm font-semibold text-gold hover:text-ivory">
            Explore Competitive Training →
          </Link>
        </div>
      </section>
    </>
  );
}
