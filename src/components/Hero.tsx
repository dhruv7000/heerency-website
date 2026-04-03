import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center sm:px-6 md:px-8 md:pb-20 md:pt-32"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
          alt="Luxury Interior Design"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl">
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
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base md:mt-6 md:text-lg"
        >
          Transform your home or office into a masterpiece with our premium
          interior solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-10"
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-400 px-6 py-3 text-center transition hover:border-primary"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
