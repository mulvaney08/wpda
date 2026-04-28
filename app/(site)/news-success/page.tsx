import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { getNewsArticles, getPageSeo } from "@/sanity/lib/loaders";

const categoryLabel: Record<"news" | "success" | "event", string> = {
  news: "News",
  success: "Success",
  event: "Event"
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IE", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function truncateExcerpt(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trimEnd()}...`;
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("news-success");

  return {
    title: seo?.title || "News & Success",
    description:
      seo?.description ||
      "Read the latest WPDA academy updates, competition highlights, event recaps and dancer success stories.",
    robots: seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function NewsSuccessPage() {
  const articles = await getNewsArticles();

  return (
    <>
      <PageHero
        eyebrow="Academy Updates"
        title="News & Success"
        intro="Follow recent WPDA events, competition results and academy milestones."
        ctaLabel="Contact Academy"
        ctaHref="/contact"
      />

      <section className="section-wrap pb-14">
        {articles.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <article key={article.id} className="surface overflow-hidden md:grid md:grid-cols-[minmax(230px,300px)_1fr]">
                {article.coverImage ? (
                  <div className="relative min-h-[320px] overflow-hidden md:h-full">
                    <Image
                      src={article.coverImage.src}
                      alt={article.coverImage.alt}
                      fill
                      sizes="(min-width: 768px) 300px, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em]">
                    <span className="rounded-full border border-gold/50 px-3 py-1 text-gold">{categoryLabel[article.category]}</span>
                    {article.featured ? <span className="rounded-full border border-white/20 px-3 py-1 text-white/70">Featured</span> : null}
                  </div>
                  <h2 className="mt-4 font-serif text-3xl leading-[1.15]">{article.title}</h2>
                  <div className="mt-3 space-y-1 text-sm text-white/65">
                    <p>Published {formatDate(article.publishedAt)}</p>
                    {article.eventDate ? <p>Event date {formatDate(article.eventDate)}</p> : null}
                    {article.location ? <p>Location: {article.location}</p> : null}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/80">{truncateExcerpt(article.excerpt, 170)}</p>
                  <Link href={`/news-success/${article.slug}`} className="mt-auto pt-6 inline-flex text-sm font-semibold text-gold hover:text-ivory">
                    Read Full Story →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="surface p-8">
            <h2 className="font-serif text-3xl">News coming soon</h2>
            <p className="mt-3 text-white/80">
              Your content team can start publishing updates from Sanity Studio under News & Success.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
