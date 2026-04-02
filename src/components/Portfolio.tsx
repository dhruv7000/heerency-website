import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Living Room",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Luxury Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
  },
  {
    title: "Minimal Kitchen",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  },
  {
    title: "Office Interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    title: "Dining Space",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
  },
  {
    title: "Luxury Hall",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1470&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <motion.section
      id="projects"
      className="py-24 px-4 md:px-6 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Our <span className="text-primary">Projects</span>
        </h2>
        <p className="text-gray-400 mt-4">
          A glimpse of our premium interior designs
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
