import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Design",
    desc: "Elegant and comfortable home interiors tailored to your lifestyle.",
    icon: "🏠",
  },
  {
    title: "Commercial Design",
    desc: "Modern and functional office and retail space designs.",
    icon: "🏢",
  },
  {
    title: "3D Visualization",
    desc: "Realistic 3D designs to visualize your space before execution.",
    icon: "🧩",
  },
  {
    title: "Renovation",
    desc: "Transform your existing space into a modern masterpiece.",
    icon: "🛠️",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-dark">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-gray-400 mt-4">
          What we offer to our clients
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-black border border-gray-800 rounded-xl p-6 text-center hover:border-primary transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;