import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ImagePanel } from "@/components/image-panel";
import { getAcademyPage } from "@/sanity/lib/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAcademyPage();
  return {
    title: page.seo?.title || "About The Academy",
    description:
      page.seo?.description ||
      "Learn about WPDA's mission, coaching philosophy and supportive class culture for children, adults and competitive dancers in Dublin.",
    robots: page.seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function AboutPage() {
  const page = await getAcademyPage();
  const images = page.supportingImages.length >= 3 ? page.supportingImages : page.fallbackImages;

  return (
    <>
      <PageHero
        eyebrow="About WPDA"
        title={page.pageTitle}
        intro={page.introCopy}
        ctaLabel="Meet The Team"
        ctaHref="/team"
      />

      <section className="section-wrap pb-12">
        <SectionHeading
          eyebrow="Who We Serve"
          title="From first-time beginners to competition-focused dancers"
          intro="WPDA welcomes very young children, teens and adults. Every dancer is supported with clear progression, positive coaching and a class environment that feels motivating and safe."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ImagePanel image={images[0]} className="h-80 md:h-96" />
          <ImagePanel image={images[1]} className="h-80 md:h-96" imgStyle={{ objectPosition: "0px 0px" }} />
          <ImagePanel image={images[2]} className="h-80 md:h-96" imgClassName="object-[0px_0px]" />
        </div>
      </section>

      <section className="section-wrap pb-12">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="surface p-7">
            <h2 className="font-serif text-3xl">Our Teaching Philosophy</h2>
            <p className="mt-4 text-white/80">{page.academyPhilosophy || "Great dance training combines technical precision with emotional confidence. WPDA coaches focus on fundamentals, musicality, performance expression and healthy long-term habits."}</p>
            <p className="mt-4 text-white/80">{page.supportiveEnvironment || "Beginners are welcomed with patience, while experienced dancers are guided toward advanced goals with structure and accountability."}</p>
          </article>
          <article className="surface p-7">
            <h2 className="font-serif text-3xl">Parents & Dancers Partnership</h2>
            <p className="mt-4 text-white/80">{page.parentFamilyMessaging || "The academy works closely with families through transparent communication, class guidance and practical support around events and milestones."}</p>
            <p className="mt-4 text-white/80">{page.pathwayMessaging || "This partnership helps dancers stay confident, happy and consistent as they progress."}</p>
          </article>
        </div>
      </section>

      <section className="section-wrap pb-12">
        <SectionHeading eyebrow="Core Values" title="What shapes the WPDA studio culture" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {page.valuePillars.map((pillar: { title: string; text: string }) => (
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
            Dancers can start with foundations, move through structured levels, and transition into focused coaching for tournaments and championships. WPDA supports each stage with clarity and care.
          </p>
          <Link href="/competitive" className="mt-7 inline-flex text-sm font-semibold text-gold hover:text-ivory">
            Explore Competitive Training →
          </Link>
        </div>
      </section>
    </>
  );
}
