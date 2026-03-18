import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ImagePanel } from "@/components/image-panel";
import { getPageSeo, getTeamMembers } from "@/sanity/lib/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("team");

  return {
    title: seo?.title || "Team",
    description:
      seo?.description ||
      "Meet the coaching and support team at Wojtek Potaszkin Dance Academy in Dublin across Ballroom, Latin, Breaking, Hip-Hop, fitness and studio support.",
    robots: seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();
  const featured = teamMembers.find((member) => member.featured);
  const others = teamMembers.filter((member) => !member.featured);

  return (
    <>
      <PageHero
        eyebrow="WPDA Team"
        title="High-level coaches. Caring support network."
        intro="Our team combines technical expertise, competition insight and family-focused support so dancers can thrive at every stage."
      />

      {featured ? (
        <section className="section-wrap pb-12">
          <SectionHeading eyebrow="Founder & Lead" title={featured.name} intro={featured.role} />
          <article className="surface mt-6 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {featured.image ? <ImagePanel image={featured.image} className="rounded-none border-0 lg:col-span-2 lg:aspect-auto" /> : null}
              <div className="p-7 sm:p-8 lg:col-span-3">
                <p className="text-white/85">{featured.shortBio}</p>
                <p className="mt-4 text-white/80">{featured.fullBio}</p>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <section className="section-wrap py-12">
        <SectionHeading eyebrow="Coaches & Academy Staff" title="A complete team around each dancer" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {others.map((member) => (
            <article key={member.name} className="surface overflow-hidden">
              {member.image ? <ImagePanel image={member.image} className="aspect-[4/3] rounded-none border-0" /> : null}
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{member.focus}</p>
                <h2 className="mt-2 font-serif text-2xl">{member.name}</h2>
                <p className="text-sm text-white/65">{member.role}</p>
                <p className="mt-3 text-white/80">{member.shortBio}</p>
                {member.fullBio ? (
                  <details className="mt-4 rounded-xl border border-white/10 bg-black/25 p-4 text-sm text-white/80">
                    <summary className="cursor-pointer font-medium text-gold">Read more</summary>
                    <p className="mt-3">{member.fullBio}</p>
                  </details>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
