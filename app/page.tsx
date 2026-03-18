import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ImagePanel } from "@/components/image-panel";
import { HomeTeamAccordion } from "@/components/home-team-accordion";
import { siteConfig, styleCards, classCategories, successHighlights, teamMembers, valuePillars } from "@/data/site";
import { academyImageByStyle, classesImages, contactImage, homepageImages, teamHeadshots } from "@/data/images";

const homeTeamMembers = teamMembers.map((member) => ({
  name: member.name,
  role: member.role,
  focus: member.focus,
  shortBio: member.bio,
  fullBio: member.extra,
  featured: member.featured,
  image: teamHeadshots[member.name] || contactImage
}));

export const metadata: Metadata = {
  title: "Dance Academy Dublin | Ballroom, Latin, Breaking, Hip-Hop",
  description:
    "Wojtek Potaszkin Dance Academy offers premium dance training in Dublin for children, teens and adults, from beginner classes to competitive pathways."
};

export default function HomePage() {
  return (
    <>
      <section className="section-wrap pb-12 pt-14 sm:pb-16 sm:pt-20">
        <div className="editorial-grid items-center gap-y-10">
          <div className="col-span-12 md:col-span-6">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Dance Academy Dublin</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              High-level training with a warm, supportive academy culture.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              WPDA welcomes children, teens and adults into Ballroom, Latin, Breaking and Hip-Hop. Beginners feel comfortable from day one, and committed dancers can grow toward competitive goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/classes" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
                Find Your Class
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold">
                Talk To The Academy
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:pt-6">
            <ImagePanel image={homepageImages.hero} priority className="aspect-[127/100] md:aspect-[122/100] shadow-glow" imgClassName="object-[50%_58%]" />
          </div>
        </div>
      </section>

      <section className="section-wrap py-12">
        <SectionHeading
          eyebrow="Academy Atmosphere"
          title="Serious standards, encouraging experience"
          intro="Families trust WPDA because dancers are coached with care, clear structure and positive discipline. We focus on progress, confidence and enjoyment in equal measure."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <ImagePanel image={homepageImages.kids} className="aspect-[4/3] md:col-span-4" imgClassName="object-[50%_35%]" />
          <ImagePanel image={homepageImages.beginners} className="aspect-[4/3] md:col-span-4" imgClassName="object-[50%_42%]" />
          <ImagePanel image={homepageImages.warmup} className="aspect-[4/3] md:col-span-4" imgClassName="object-[50%_46%]" />
        </div>
      </section>

      <section className="section-wrap pb-12">
        <SectionHeading eyebrow="Find Your Style" title="Four disciplines. One academy standard." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {styleCards.map((style) => {
            const image =
              style.title === "Ballroom"
                ? academyImageByStyle.ballroom
                : style.title === "Latin"
                  ? academyImageByStyle.latin
                  : style.title === "Breaking"
                    ? academyImageByStyle.breaking
                    : academyImageByStyle.hiphop;

            const imageClass =
              style.title === "Ballroom"
                ? "object-cover object-top"
                : style.title === "Latin"
                  ? "object-cover object-top"
                  : style.title === "Breaking"
                    ? "object-cover object-center"
                    : "object-cover object-center";
            const imageStyle =
              style.title === "Ballroom" || style.title === "Latin"
                ? { objectPosition: "0px -125px" }
                : undefined;

            return (
              <article key={style.title} className="surface overflow-hidden">
                <ImagePanel image={image} className="aspect-[16/10] rounded-none border-0 bg-black/45" imgClassName={imageClass} imgStyle={imageStyle} />
                <div className="p-6">
                  <h3 className="font-serif text-3xl">{style.title}</h3>
                  <p className="mt-3 text-white/80">{style.description}</p>
                </div>
              </article>
            );
          })}
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
            title="Aspirational coaching with step-by-step support"
            intro="Dancers who want to compete receive clear progression, technical preparation and encouragement that builds confidence over time."
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
        <SectionHeading eyebrow="Team" title="Guided by experienced coaches and caring academy staff" />
        <div className="mt-8">
          <HomeTeamAccordion members={homeTeamMembers} />
        </div>
        <div className="mt-6">
          <Link href="/team" className="text-sm font-semibold text-gold hover:text-ivory">
            Meet The Full Team →
          </Link>
        </div>
      </section>

      <section className="section-wrap py-12">
        <SectionHeading eyebrow="Gallery Preview" title="A look at academy life" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <ImagePanel image={classesImages.childrenTeens} className="aspect-square" imgClassName="object-[50%_44%]" />
          <ImagePanel image={homepageImages.competitionKids} className="aspect-square" imgStyle={{ objectPosition: "-30px" }} />
          <ImagePanel image={academyImageByStyle.hiphop} className="aspect-square" />
        </div>
        <div className="mt-6">
          <Link href="/gallery" className="text-sm font-semibold text-gold hover:text-ivory">
            View Full Gallery →
          </Link>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="surface bg-gradient-to-r from-crimson/20 via-transparent to-electric/20 p-8 text-center sm:p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Start Your Journey</p>
          <h2 className="mt-4 font-serif text-4xl">Everyone can start with confidence at {siteConfig.shortName}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            If you are choosing a first class for your child, returning to dance as an adult, or aiming toward competition, we will help you find the right next step.
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
