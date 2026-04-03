import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Amazing work! My home looks completely transformed. Highly recommended.",
  },
  {
    name: "Priya Patel",
    text: "Professional team with great design sense. Loved the final result!",
  },
  {
    name: "Amit Verma",
    text: "They delivered exactly what I imagined. Smooth and hassle-free experience.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-black px-4 py-20 sm:px-6 md:px-8 md:py-24"
    >
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg"
          >
            <p className="text-base italic leading-7 text-gray-300">
              "{item.text}"
            </p>

            <h4 className="mt-5 font-semibold text-primary">{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
