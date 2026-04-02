import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Mehta",
    review:
      "Absolutely loved the transformation of my home. The team delivered beyond expectations!",
  },
  {
    name: "Priya Shah",
    review:
      "Professional, creative, and timely execution. Highly recommend their services.",
  },
  {
    name: "Amit Patel",
    review:
      "Their design sense is outstanding. My office looks modern and elegant now.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-black">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Real experiences from our happy clients
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-dark border border-gray-800 p-6 rounded-xl"
          >
            <p className="text-gray-300 mb-4">
              “{item.review}”
            </p>
            <h4 className="font-semibold text-primary">
              — {item.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;