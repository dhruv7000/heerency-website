import About from "../components/About";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";

const aboutSteps = [
  {
    title: "Discover",
    description:
      "We begin by understanding the lifestyle, business goals, and visual aspirations shaping the space.",
  },
  {
    title: "Define",
    description:
      "The concept direction, palette, and spatial priorities are translated into a practical design roadmap.",
  },
  {
    title: "Develop",
    description:
      "We refine layouts, materials, and styling details so every zone feels aligned and build-ready.",
  },
  {
    title: "Deliver",
    description:
      "Execution is guided with clarity, making the final outcome feel polished, cohesive, and premium.",
  },
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        eyebrow="About Heerency"
        title="A design studio focused on elegant spaces and dependable execution"
        description="Heerency Creation blends luxury interiors with thoughtful planning, creating homes and commercial spaces that feel refined, useful, and deeply personalized."
        primaryLabel="Talk to Our Team"
        primaryTo="/contact"
        secondaryLabel="View Projects"
        secondaryTo="/projects"
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
      />
      <About />
      <ProcessSection
        eyebrow="Our Approach"
        title="How we build confidence through the design journey"
        description="Clients trust us because our creative process stays grounded in communication, precision, and execution-minded thinking."
        steps={aboutSteps}
      />
      <Testimonials />
      <CTASection
        eyebrow="Let's Collaborate"
        title="Looking for a design partner who can balance beauty and clarity?"
        description="We would love to understand your space, your timeline, and the level of finish you want to achieve."
        primaryLabel="Contact Heerency"
        primaryTo="/contact"
        secondaryLabel="Review Services"
        secondaryTo="/services"
      />
    </>
  );
};

export default AboutPage;
