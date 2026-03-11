type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.23em] text-gold">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-white/80">{intro}</p> : null}
    </div>
  );
}
