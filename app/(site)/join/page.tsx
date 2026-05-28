import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ImagePanel } from "@/components/image-panel";
import { getJoinPage, getPageSeo } from "@/sanity/lib/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const [join, fallbackSeo] = await Promise.all([getJoinPage(), getPageSeo("join")]);
  const seo = join.seo || fallbackSeo;

  return {
    title: seo?.title || "Join WPDA",
    description:
      seo?.description ||
      "Ask WPDA about class times, friendly starting points and the best dance class for your child or family.",
    robots: seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function JoinPage() {
  const content = await getJoinPage();

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
        ctaLabel={content.ctaLabel}
        ctaHref={content.ctaHref}
      />

      <section className="section-wrap pb-14">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 grid gap-5 md:grid-cols-2">
            {content.pathways.map((path: { title: string; text: string }) => (
              <article key={path.title} className="surface p-6">
                <h2 className="text-2xl font-semibold">{path.title}</h2>
                <p className="mt-3 text-white/85">{path.text}</p>
              </article>
            ))}
          </div>
          <ImagePanel image={content.timetableImage} className="lg:col-span-2 aspect-[4/3]" imgFit="contain" />
        </div>

        <div className="surface mt-8 p-8 text-center">
          <h2 className="text-3xl font-semibold">{content.howToStartTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{content.howToStartText}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link href={content.primaryCtaHref} className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-ivory">
              {content.primaryCtaLabel}
            </Link>
            <Link href={content.secondaryCtaHref} className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold">
              {content.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
