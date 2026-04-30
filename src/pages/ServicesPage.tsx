import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import ProcessSection from "../components/ProcessSection";
import Services from "../components/Services";

const serviceSteps = [
  {
    title: "Strategy Call",
    description:
      "We align on project type, needs, budget expectations, and the level of transformation you want.",
  },
  {
    title: "Concept Build",
    description:
      "Mood, finishes, layout direction, and styling intent are shaped into a tailored creative proposal.",
  },
  {
    title: "Design Detailing",
    description:
      "Key materials, furniture, lighting, and spatial decisions are resolved for confident decision-making.",
  },
  {
    title: "Execution Support",
    description:
      "You move ahead with a more organized design framework that makes implementation smoother and smarter.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Interior design services tailored for premium residential and commercial spaces"
        description="From concept development to visualization and renovation planning, our service mix is built to support ambitious projects with a polished design language."
        primaryLabel="Book a Consultation"
        primaryTo="/contact"
        secondaryLabel="See Recent Work"
        secondaryTo="/projects"
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
      />
      <Services />
      <ProcessSection
        eyebrow="Delivery Model"
        title="A clearer design workflow from first brief to final direction"
        description="Every service is delivered through a process that helps clients make stronger decisions without losing momentum."
        steps={serviceSteps}
      />
      <CTASection
        eyebrow="Ready to Begin"
        title="Choose a design partner that can elevate both the look and the planning"
        description="If you want interiors that feel premium and organized from day one, we can shape the right next step together."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="About the Studio"
        secondaryTo="/about"
      />
    </>
  );
};

export default ServicesPage;
