import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsArticleBySlug, getNewsArticleSlugs } from "@/sanity/lib/loaders";

type Params = {
  slug: string;
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IE", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export async function generateStaticParams() {
  const slugs = await getNewsArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    return {
      title: "News & Success"
    };
  }

  return {
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.excerpt,
    robots: article.seo?.noindex ? { index: false, follow: false } : undefined
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) notFound();

  const paragraphs = article.body
    .split(/\n\s*\n/g)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <section className="section-wrap py-14">
      <article className="surface p-6 sm:p-8 lg:p-10">
        <Link href="/news-success" className="inline-flex text-sm font-semibold text-gold hover:text-ivory">
          ← Back To News & Success
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(280px,360px)_1fr] lg:items-start">
          <aside className="space-y-4 lg:sticky lg:top-24">
            {article.coverImage ? (
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={article.coverImage.src}
                  alt={article.coverImage.alt}
                  width={article.coverImage.width}
                  height={article.coverImage.height}
                  className="h-auto w-full"
                  priority
                />
              </div>
            ) : null}
            <div className="rounded-xl border border-white/10 bg-black/25 p-4 text-sm text-white/75">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </p>
              <p className="mt-3">Published {formatDate(article.publishedAt)}</p>
              {article.eventDate ? <p className="mt-1">Event date {formatDate(article.eventDate)}</p> : null}
              {article.location ? <p className="mt-1">Location: {article.location}</p> : null}
            </div>
          </aside>

          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl leading-[1.1] sm:text-5xl">{article.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-white/75">{article.excerpt}</p>

            <div className="mt-8 h-px w-full bg-white/10" aria-hidden />

            <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-white/85">
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
