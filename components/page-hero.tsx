import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, intro, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="section-wrap py-16 sm:py-20">
      <div className="surface relative overflow-hidden p-8 sm:p-12">
        <div className="absolute inset-0 bg-mesh opacity-45" aria-hidden />
        <div className="relative max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg text-white/80">{intro}</p>
          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex rounded-full border border-gold/70 bg-gold/15 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-black"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
