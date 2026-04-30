import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroStats = [
  { value: "100+", label: "Spaces Delivered" },
  { value: "5+", label: "Years of Craft" },
  { value: "24h", label: "Lead Response" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center text-[var(--color-text)] sm:px-6 md:px-8 md:pb-20 md:pt-32"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
          alt="Luxury Interior Design"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--color-hero-overlay)" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-5 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-primary shadow-[0_20px_70px_var(--color-shadow)] backdrop-blur-md sm:mb-6"
        >
          Bespoke Interior Design Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Designing Spaces That
          <br className="hidden sm:block" />
          Define <span className="text-primary">Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-soft)] sm:text-base md:mt-6 md:text-lg"
        >
          Transform your home or office into a tailored statement space with
          premium interior concepts, detailed execution planning, and timeless
          styling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-10"
        >
          <Link
            to="/projects"
            className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-3 text-center transition hover:border-primary"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {heroStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 backdrop-blur-md"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
