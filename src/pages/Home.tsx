import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import WhatsAppButton from "../components/WhatsAppButton";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <WhatsAppButton />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;