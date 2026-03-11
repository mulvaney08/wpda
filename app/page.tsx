import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, styleCards, classCategories, successHighlights, teamMembers, valuePillars } from "@/data/site";

export const metadata: Metadata = {
  title: "Dance Academy Dublin | Ballroom, Latin, Breaking, Hip-Hop",
  description:
    "Wojtek Potaszkin Dance Academy offers premium dance training in Dublin for children, teens and adults, from beginner classes to competitive pathways."
};

export default function HomePage() {
  return (
    <>
      <section className="section-wrap pb-12 pt-14 sm:pb-16 sm:pt-20">
        <div className="editorial-grid items-end gap-y-10">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Dance Academy Dublin</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Ballroom elegance. Latin fire. Breaking energy.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              WPDA is a high-performance dance academy in Dublin for children, teens and adults. Train in Ballroom, Latin, Breaking and Hip-Hop from first steps to championship floors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/classes" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
                Explore Classes
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold">
                Book A Trial Chat
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="surface relative min-h-[340px] overflow-hidden p-8 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-b from-crimson/20 via-transparent to-electric/15" aria-hidden />
              <div className="absolute -right-20 top-4 h-52 w-52 rounded-full bg-gold/20 blur-3xl" aria-hidden />
              <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-electric/20 blur-3xl" aria-hidden />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">All Ages Welcome</p>
                <ul className="mt-5 space-y-3 text-white/90">
                  <li>Children from early years to youth competitors</li>
                  <li>Teen pathways for style and performance growth</li>
                  <li>Adult beginners, social and competitive dancers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-14">
        <SectionHeading
          eyebrow="Academy Overview"
          title="A serious academy culture with a supportive studio atmosphere"
          intro="WPDA combines elite standards with a caring training environment. Dancers are coached to develop technical quality, confidence and performance presence while feeling supported at every stage."
        />
      </section>

      <section className="section-wrap pb-12">
        <SectionHeading eyebrow="Find Your Style" title="Four disciplines. One academy standard." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {styleCards.map((style) => (
            <article key={style.title} className="surface relative overflow-hidden p-6">
              <div className={`absolute inset-0 bg-gradient-to-br ${style.accent} opacity-45`} aria-hidden />
              <h3 className="relative font-serif text-3xl">{style.title}</h3>
              <p className="relative mt-3 text-white/80">{style.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-12">
        <SectionHeading eyebrow="Age Pathways" title="Classes for children, teens and adults" />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {classCategories.slice(0, 3).map((group) => (
            <article key={group.title} className="surface p-6">
              <h3 className="font-serif text-2xl">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {group.classes.slice(0, 3).map((cls) => (
                  <li key={cls.name}>{cls.name}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-12">
        <div className="surface p-8 sm:p-10">
          <SectionHeading
            eyebrow="Competitive Pathway"
            title="Train with intent, from first local events to international ambition"
            intro="WPDA supports dancers who want to compete through coaching blocks, technical progression, performance development and event preparation."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {successHighlights.map((item) => (
              <p key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/80">
                {item}
              </p>
            ))}
          </div>
          <Link href="/competitive" className="mt-7 inline-flex text-sm font-semibold text-gold hover:text-ivory">
            View Competitive Dance →
          </Link>
        </div>
      </section>

      <section className="section-wrap py-12">
        <SectionHeading eyebrow="Why WPDA" title="Why families and dancers choose WPDA" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="surface p-5">
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/80">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-12">
        <SectionHeading eyebrow="Team" title="Guided by experienced coaches and academy staff" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {teamMembers.slice(0, 4).map((member) => (
            <article key={member.name} className="surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{member.focus}</p>
              <h3 className="mt-2 font-serif text-2xl">{member.name}</h3>
              <p className="text-sm text-white/70">{member.role}</p>
              <p className="mt-3 text-white/80">{member.bio}</p>
            </article>
          ))}
        </div>
        <Link href="/team" className="mt-7 inline-flex text-sm font-semibold text-gold hover:text-ivory">
          Meet The Full Team →
        </Link>
      </section>

      <section className="section-wrap py-12">
        <div className="surface p-8 sm:p-10">
          <SectionHeading
            eyebrow="Safe & Supportive"
            title="A studio where progress and wellbeing move together"
            intro="Parents and dancers trust WPDA for clear communication, respectful coaching, and a positive learning culture that supports long-term growth."
          />
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="surface bg-gradient-to-r from-crimson/20 via-transparent to-electric/20 p-8 text-center sm:p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Start Your Journey</p>
          <h2 className="mt-4 font-serif text-4xl">Find the right class at {siteConfig.shortName}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Beginners welcome. Children and adults welcome. If you are aiming for personal confidence or competitive excellence, we will guide your next step.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/join" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
              View Timetable Pathways
            </Link>
            <a href={siteConfig.whatsapp} className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
