import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ImagePanel } from "@/components/image-panel";
import { getAcademyPage } from "@/sanity/lib/loaders";

const aboutCopy = {
  heroTitle: "A dance academy where families feel at home",
  heroIntro:
    "WPDA is a friendly Dublin dance community where children, teens and adults can feel welcome, build confidence and enjoy learning from coaches who care.",
  teaching:
    "We keep classes clear, upbeat and encouraging. Dancers learn the foundations properly, but they are also given space to relax, enjoy the music and feel proud of small wins along the way.",
  support:
    "New dancers are never expected to know what to do straight away. Coaches explain each step, check in often and help every student feel included from the beginning.",
  parents:
    "Choosing a class for your child can bring a lot of questions. We are happy to talk through age groups, styles, timetables and what to expect before they arrive.",
  nextSteps:
    "As dancers grow, we keep the next step clear, whether that means building confidence in class, trying a new style or preparing for a performance.",
  values: [
    {
      title: "Kind Coaching",
      text: "Experienced coaches help dancers learn with patience, warmth and clear guidance."
    },
    {
      title: "Space To Grow",
      text: "Beginners can settle in gently, and motivated dancers can keep growing when they are ready."
    },
    {
      title: "Parents Included",
      text: "We help parents understand the class options and feel confident about the next step."
    },
    {
      title: "A Friendly Studio",
      text: "A caring atmosphere where children, teens and adults feel welcome, safe and respected."
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About WPDA",
    description: "Meet WPDA, a welcoming Dublin dance academy where children, teens and adults can feel comfortable, supported and excited to dance."
  };
}

export default async function AboutPage() {
  const page = await getAcademyPage();
  const images = page.supportingImages.length >= 3 ? page.supportingImages : page.fallbackImages;

  return (
    <>
      <PageHero
        eyebrow="About WPDA"
        title={aboutCopy.heroTitle}
        intro={aboutCopy.heroIntro}
        ctaLabel="Meet The Coaches"
        ctaHref="/team"
      />

      <section className="section-wrap pb-12">
        <SectionHeading
          eyebrow="Who We Welcome"
          title="A comfortable first step for children, teens and adults"
          intro="Some dancers arrive full of confidence. Others need a little reassurance before they join in. Both are welcome here. We help each dancer settle, make friends and enjoy learning at a pace that feels right."
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
            <h2 className="text-3xl font-semibold">How We Teach</h2>
            <p className="mt-4 text-white/85">{aboutCopy.teaching}</p>
            <p className="mt-4 text-white/85">{aboutCopy.support}</p>
          </article>
          <article className="surface p-7">
            <h2 className="text-3xl font-semibold">Parents Are Part Of It</h2>
            <p className="mt-4 text-white/85">{aboutCopy.parents}</p>
            <p className="mt-4 text-white/85">{aboutCopy.nextSteps}</p>
          </article>
        </div>
      </section>

      <section className="section-wrap pb-12">
        <SectionHeading eyebrow="What Matters To Us" title="A studio culture families can trust" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCopy.values.map((pillar) => (
            <article key={pillar.title} className="surface p-5">
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/85">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-14">
        <div className="surface p-8 sm:p-10">
          <h2 className="text-4xl font-semibold">There is no pressure to know where to start</h2>
          <p className="mt-4 max-w-3xl text-white/85">
            Tell us a little about your child, their age and what they might enjoy. We will guide you toward a class that feels like a good fit, and if they later want to perform or compete, we can help with that too.
          </p>
          <Link href="/competitive" className="mt-7 inline-flex text-sm font-semibold text-gold hover:text-ivory">
            See How Dancers Can Grow →
          </Link>
        </div>
      </section>
    </>
  );
}
