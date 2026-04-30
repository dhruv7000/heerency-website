const highlights = [
  {
    title: "Consultation-First Planning",
    description:
      "We align design, budget, and execution priorities before a single finish is selected.",
  },
  {
    title: "Detail-Led Material Direction",
    description:
      "Every palette, finish, and furnishing is chosen to support longevity and brand-level polish.",
  },
  {
    title: "Execution With Clarity",
    description:
      "Clients get structured updates, practical timelines, and a smooth path from concept to completion.",
  },
];

const StudioHighlights = () => {
  return (
    <section className="bg-[var(--color-bg)] px-4 py-20 text-[var(--color-text)] sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Enterprise-Level Thinking
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            A studio setup built for premium client confidence
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            Beyond visuals, we focus on planning discipline, communication
            quality, and execution readiness so each project feels structured
            from the first call onward.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioHighlights;
