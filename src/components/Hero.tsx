import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-4 md:px-6 pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Designing Spaces That <br />
          Define <span className="text-primary">Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto"
        >
          Transform your home or office into a masterpiece with our premium
          interior solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Scroll to Projects */}
          <a
            href="#projects"
            className="bg-primary px-6 py-3 rounded-full text-black font-semibold hover:opacity-90 transition"
          >
            View Projects
          </a>

          {/* Scroll to Contact */}
          <a
            href="#contact"
            className="border border-gray-400 px-6 py-3 rounded-full hover:border-primary transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
