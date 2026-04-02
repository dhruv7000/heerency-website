import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        
        {/* Logo */}
        <img src={logo} alt="Heerency" className="h-8 md:h-10" />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/" className="hover:text-primary transition">About</Link>
          <Link to="/" className="hover:text-primary transition">Services</Link>
          <Link to="/" className="hover:text-primary transition">Projects</Link>
          <Link to="/" className="hover:text-primary transition">Contact</Link>
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-primary px-5 py-2 rounded-full text-black font-semibold">
          Get Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4 text-center">
          <Link to="/" className="block">Home</Link>
          <Link to="/" className="block">About</Link>
          <Link to="/" className="block">Services</Link>
          <Link to="/" className="block">Projects</Link>
          <Link to="/" className="block">Contact</Link>

          <button className="bg-primary w-full py-2 rounded-full text-black font-semibold mt-4">
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;