import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black to-gray-900 px-4 py-20 sm:px-6 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1470&auto=format&fit=crop"
            alt="Interior Design"
            className="h-[320px] w-full rounded-2xl object-cover shadow-lg sm:h-[420px] lg:h-[520px]"
          />

          <div className="absolute bottom-4 left-4 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-black shadow-lg sm:bottom-6 sm:left-auto sm:right-6 sm:px-6 sm:text-base">
            5+ Years Experience
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            About <span className="text-primary">Heerency</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg">
            At Heerency Creation, we specialize in crafting elegant and modern
            interior spaces that reflect your personality and lifestyle. Our
            designs combine aesthetics with functionality to create spaces that
            truly inspire.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
            From residential homes to commercial spaces, we bring creativity,
            precision, and passion into every project we deliver.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
              <h3 className="text-2xl font-bold text-primary sm:text-3xl">100+</h3>
              <p className="mt-1 text-sm text-gray-400">Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
              <h3 className="text-2xl font-bold text-primary sm:text-3xl">50+</h3>
              <p className="mt-1 text-sm text-gray-400">Clients</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
              <h3 className="text-2xl font-bold text-primary sm:text-3xl">5+</h3>
              <p className="mt-1 text-sm text-gray-400">Years</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
