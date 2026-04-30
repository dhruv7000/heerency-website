import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  image: string;
};

const PageHero = ({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  image,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 text-[var(--color-text)] sm:px-6 md:px-8 md:pb-20 md:pt-36">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--color-hero-overlay)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-primary backdrop-blur-md"
        >
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-soft)] sm:text-lg"
        >
          {description}
        </motion.p>

        {(primaryLabel || secondaryLabel) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            {primaryLabel && primaryTo && (
              <Link
                to={primaryTo}
                className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
              >
                {primaryLabel}
              </Link>
            )}

            {secondaryLabel && secondaryTo && (
              <Link
                to={secondaryTo}
                className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-3 text-center transition hover:border-primary"
              >
                {secondaryLabel}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
