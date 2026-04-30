import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import HomePageLinks from "../components/HomePageLinks";
import HomeProcessSnapshot from "../components/HomeProcessSnapshot";
import StudioHighlights from "../components/StudioHighlights";

const Home = () => {
  return (
    <>
      <Hero />
      <StudioHighlights />
      <HomeProcessSnapshot />
      <HomePageLinks />
      <Testimonials />
      <CTASection
        eyebrow="Plan Your Space"
        title="Bring your next interior project into a more premium, structured flow"
        description="Whether you are shaping a residence, workplace, or renovation, we help turn ideas into high-end spaces with clarity and confidence."
        primaryLabel="Start a Consultation"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </>
  );
};

export default Home;
