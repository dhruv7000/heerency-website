import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import Portfolio from "../components/Portfolio";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";

const projectSteps = [
  {
    title: "Residential Interiors",
    description:
      "Spaces designed around warmth, daily comfort, and visual sophistication for modern living.",
  },
  {
    title: "Luxury Styling",
    description:
      "Refined palettes, layered materials, and statement details that create a high-end visual identity.",
  },
  {
    title: "Functional Planning",
    description:
      "Layouts that improve how clients move, work, host, and live within each environment.",
  },
  {
    title: "Brand-Aligned Workspaces",
    description:
      "Commercial interiors that feel polished, intentional, and connected to business presentation goals.",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Project Portfolio"
        title="A curated look at interiors designed for elegance, comfort, and impact"
        description="Our portfolio reflects a design language that values warm luxury, thoughtful detailing, and spaces that feel elevated without losing usability."
        primaryLabel="Start Your Project"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
        image="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop"
      />
      <Portfolio />
      <ProcessSection
        eyebrow="What You'll See"
        title="The qualities that shape our project work"
        description="Across categories, our projects are defined by consistent design thinking and a premium attention to detail."
        steps={projectSteps}
      />
      <Testimonials />
      <CTASection
        eyebrow="Build Something Exceptional"
        title="Want your next space to feel just as refined?"
        description="Share your vision with us and we will help you shape a direction that feels elevated, functional, and distinctly yours."
        primaryLabel="Talk to Heerency"
        primaryTo="/contact"
        secondaryLabel="Learn About Us"
        secondaryTo="/about"
      />
    </>
  );
};

export default ProjectsPage;
