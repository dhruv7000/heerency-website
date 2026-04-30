import { motion } from "framer-motion";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
};

const ProcessSection = ({
  eyebrow,
  title,
  description,
  steps,
}: ProcessSectionProps) => {
  return (
    <section className="bg-[var(--color-bg)] px-4 py-20 text-[var(--color-text)] sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-black">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
