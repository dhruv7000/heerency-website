import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setOpen(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Heerency" className="h-16 md:h-18" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {["home", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group capitalize"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-primary px-6 py-2 rounded-full text-black font-semibold shadow-md hover:scale-105 transition"
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-lg px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-lg">
          {["home", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleClick}
              className="capitalize hover:text-primary transition"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleClick}
            className="bg-primary w-full text-center py-3 rounded-full text-black font-semibold"
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
