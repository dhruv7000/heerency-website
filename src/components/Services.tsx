import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Design",
    desc: "Elegant and comfortable home interiors tailored to your lifestyle.",
    icon: "RD",
    points: ["Concept boards", "Furniture styling", "Lighting direction"],
  },
  {
    title: "Commercial Design",
    desc: "Modern and functional office and retail space designs.",
    icon: "CD",
    points: ["Client-facing layouts", "Brand-aligned mood", "Efficient planning"],
  },
  {
    title: "3D Visualization",
    desc: "Realistic 3D designs to visualize your space before execution.",
    icon: "3D",
    points: ["Detailed previews", "Material clarity", "Faster decisions"],
  },
  {
    title: "Renovation",
    desc: "Transform your existing space into a modern masterpiece.",
    icon: "RN",
    points: ["Space refresh", "Finish upgrades", "Functional reworking"],
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="bg-dark px-4 py-20 sm:px-6 md:px-8 md:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mb-12 text-center md:mb-16">
        <p className="text-sm uppercase tracking-[0.28em] text-primary">
          Signature Expertise
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
          Tailored services designed to move a project from inspiration to
          polished execution.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="rounded-[28px] border border-gray-800 bg-gradient-to-b from-[#171717] to-black p-6 text-left transition hover:border-primary hover:shadow-[0_20px_70px_rgba(249,115,22,0.12)] sm:p-7"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {item.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm leading-6 text-gray-400">{item.desc}</p>

            <div className="mt-6 space-y-3">
              {item.points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <p className="text-sm text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
