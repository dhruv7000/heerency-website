const steps = [
  {
    title: "Strategic Discovery",
    description:
      "We begin with priorities, lifestyle, budget direction, and the visual tone you want the space to carry.",
  },
  {
    title: "Premium Design Direction",
    description:
      "Our concepts are shaped to feel elevated, practical, and aligned with the identity of the space.",
  },
  {
    title: "Confident Execution Path",
    description:
      "From material choices to planning clarity, every recommendation supports smoother project movement.",
  },
];

const HomeProcessSnapshot = () => {
  return (
    <section className="bg-[var(--color-bg)] px-4 py-20 text-[var(--color-text)] sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Our Promise
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            A homepage that guides, not overwhelms
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            Instead of stacking every section here, the homepage now gives
            visitors a cleaner brand overview and clear pathways into the pages
            that explain each part of the business in depth.
          </p>
        </div>

        <div className="grid gap-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-black">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProcessSnapshot;
