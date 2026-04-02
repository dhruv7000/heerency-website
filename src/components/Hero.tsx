import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 md:px-6 pt-24">
      
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Transform Your Space <br />
          Into <span className="text-primary">Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto"
        >
          We design premium interiors that reflect elegance, comfort, and modern living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-primary px-6 py-3 rounded-full text-black font-semibold w-full sm:w-auto">
            View Projects
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-full hover:border-primary w-full sm:w-auto">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;