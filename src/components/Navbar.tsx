import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const navItems = ["home", "about", "services", "projects", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-800 bg-black/80 shadow-lg backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6 md:py-3">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Heerency"
            className="h-12 transition-transform duration-300 hover:scale-105 md:h-14"
          />
        </a>

        <div className="hidden items-center gap-10 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="group relative capitalize"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-6 py-2 font-semibold text-black shadow-md transition hover:scale-105 md:inline-block"
        >
          Get Quote
        </a>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
        >
          {open ? (
            <span className="text-2xl leading-none">&times;</span>
          ) : (
            <span className="flex flex-col items-center justify-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
            </span>
          )}
        </button>
      </div>

      <div
        className={`fixed left-0 top-[68px] w-full overflow-hidden bg-black/95 px-6 backdrop-blur-lg transition-all duration-300 md:hidden ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleClick}
              className="capitalize text-lg font-medium transition hover:text-primary"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleClick}
            className="w-full rounded-full bg-primary py-3 text-center font-semibold text-black"
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
