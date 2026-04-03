import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import WhatsAppButton from "../components/WhatsAppButton";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
