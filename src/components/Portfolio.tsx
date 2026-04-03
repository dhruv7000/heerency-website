import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Living Room",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    tag: "Residence",
  },
  {
    title: "Luxury Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    tag: "Luxury Suite",
  },
  {
    title: "Minimal Kitchen",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    tag: "Minimal Build",
  },
  {
    title: "Office Interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tag: "Workspace",
  },
  {
    title: "Dining Space",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
    tag: "Dining",
  },
  {
    title: "Luxury Hall",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1470&auto=format&fit=crop",
    tag: "Statement Space",
  },
];

const Portfolio = () => {
  return (
    <motion.section
      id="projects"
      className="bg-black px-4 py-20 sm:px-6 md:px-8 md:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mb-12 text-center md:mb-16">
        <p className="text-sm uppercase tracking-[0.28em] text-primary">
          Curated Showcase
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Our <span className="text-primary">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
          A glimpse of the warm, refined, and high-end interiors we craft for
          modern living.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-[320px] lg:h-[350px]"
            />

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 sm:p-6">
              <div>
                <span className="mb-3 inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-primary backdrop-blur-sm">
                  {item.tag}
                </span>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
