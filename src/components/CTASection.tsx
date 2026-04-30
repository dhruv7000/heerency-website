import { Link } from "react-router-dom";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

const CTASection = ({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) => {
  return (
    <section className="bg-[var(--color-bg-soft)] px-4 py-20 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[36px] border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-12 text-center text-[var(--color-text)] shadow-[0_30px_100px_var(--color-shadow)] sm:px-10 md:py-16">
        <p className="text-sm uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to={primaryTo}
            className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
          >
            {primaryLabel}
          </Link>

          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-3 text-center text-[var(--color-text)] transition hover:border-primary"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
