const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black px-4 py-10 sm:px-6 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center sm:text-left md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-primary">Heerency Creation</h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Premium interior design solutions for modern living.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#home" className="transition hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="transition hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Contact</h3>
          <p className="text-sm text-gray-400">Email: info@heerency.com</p>
          <p className="mt-2 text-sm text-gray-400">Phone: +91 99999 99999</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        Copyright {new Date().getFullYear()} Heerency Creation. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
