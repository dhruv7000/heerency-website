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
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-black">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Our <span className="text-primary">Projects</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Explore our latest interior designs
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;