import CTASection from "../components/CTASection";
import Contact from "../components/Contact";
import PageHero from "../components/PageHero";
import ProcessSection from "../components/ProcessSection";

const contactSteps = [
  {
    title: "Share Your Brief",
    description:
      "Tell us about your space, goals, preferences, and any timelines already in mind.",
  },
  {
    title: "Receive Direction",
    description:
      "We review the fit, understand the scope, and guide you toward the most suitable next step.",
  },
  {
    title: "Align on Scope",
    description:
      "Project intent, design priorities, and service approach are brought into a more structured path.",
  },
  {
    title: "Move Forward",
    description:
      "Once aligned, we begin shaping the design journey with stronger clarity and confidence.",
  },
];

const ContactPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact Heerency"
        title="Start the conversation for your next residential or commercial space"
        description="If you are looking for a premium interior design partner, this is the best place to share your requirements and begin a more focused discussion."
        primaryLabel="Review Services"
        primaryTo="/services"
        secondaryLabel="See Projects"
        secondaryTo="/projects"
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
      />
      <ProcessSection
        eyebrow="What to Expect"
        title="A straightforward path from first inquiry to project clarity"
        description="We keep early conversations simple, useful, and geared toward helping you understand the right next move."
        steps={contactSteps}
      />
      <Contact />
      <CTASection
        eyebrow="Still Exploring?"
        title="Take another look at our work and services before you decide"
        description="If you want more context before reaching out, explore how we design, what we offer, and the kind of spaces we help create."
        primaryLabel="View Projects"
        primaryTo="/projects"
        secondaryLabel="About Heerency"
        secondaryTo="/about"
      />
    </>
  );
};

export default ContactPage;
