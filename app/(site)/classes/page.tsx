import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ImagePanel } from "@/components/image-panel";
import { getClassCategories, getPageSeo, getTestimonials } from "@/sanity/lib/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("classes");

  return {
    title: seo?.title || "Dance Classes",
    description:
      seo?.description ||
      "Find welcoming WPDA dance classes in Dublin for children, teens and adults, including Ballroom, Latin, Breaking and Hip-Hop.",
    robots: seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function ClassesPage() {
  const [categories, testimonials] = await Promise.all([getClassCategories(), getTestimonials()]);

  return (
    <>
      <PageHero
        eyebrow="Classes At WPDA"
        title="Find a class that feels right"
        intro="Whether your child is full of energy, a little shy, brand new to dance or ready to try something new, we will help you choose a class where they can feel comfortable."
        ctaLabel="Ask Us Where To Start"
        ctaHref="/contact"
      />

      <section className="section-wrap pb-12">
        <SectionHeading
          eyebrow="Class Options"
          title="Choose by age, style and confidence"
          intro="New dancers are guided gently, returning dancers can keep building skills, and families can always ask for help choosing the best fit."
        />
        <div className="mt-8 space-y-6">
          {categories.map((group: { title: string; classes: { name: string; audience: string; description: string; partnerRequired: string }[]; featuredImage: { src: string; alt: string; width: number; height: number } }) => (
            <article key={group.title} className="surface overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-5">
                <ImagePanel image={group.featuredImage} className="rounded-none border-0 lg:col-span-2 lg:aspect-auto" />
                <div className="p-6 sm:p-8 lg:col-span-3">
                  <h2 className="text-3xl font-semibold">{group.title}</h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {group.classes.map((cls: { name: string; audience: string; description: string; partnerRequired: string }) => (
                      <div key={cls.name} className="rounded-2xl border border-gold/15 bg-gold/10 p-5">
                        <h3 className="font-semibold text-lg">{cls.name}</h3>
                        <p className="mt-2 text-sm text-gold">For: {cls.audience}</p>
                        <p className="mt-3 text-sm text-white/85">{cls.description}</p>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">Partner: {cls.partnerRequired}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {testimonials.length ? (
        <section className="section-wrap py-12">
          <SectionHeading eyebrow="Testimonials" title="What dancers and families say" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {testimonials.slice(0, 4).map((item: { _id: string; quote: string; name: string }) => (
              <article key={item._id} className="surface p-6">
                <p className="text-sm text-white/85">“{item.quote}”</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-gold">{item.name}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-wrap py-14">
        <div className="surface p-8 text-center sm:p-10">
          <h2 className="text-4xl font-semibold">Not sure where to begin?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Tell us your dancer&apos;s age, experience and what they might enjoy. We will suggest a comfortable first class and answer any questions before you visit.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
              Ask Us A Question
            </Link>
            <Link href="/join" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold">
              View Timetable Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
