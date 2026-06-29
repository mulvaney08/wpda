type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">{eyebrow}</p> : null}
      <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">{title}</h2>
      {intro ? <p className="mt-3 sm:mt-4 text-white/85 text-sm sm:text-base">{intro}</p> : null}
    </div>
  );
}
