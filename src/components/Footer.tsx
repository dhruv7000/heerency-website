import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-10 text-[var(--color-text)] sm:px-6 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-center sm:text-left md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-primary">Heerency Creation</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
            Premium interior design solutions for modern living.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link to="/" className="transition hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="transition hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Contact</h3>
          <p className="text-sm text-[var(--color-text-muted)]">Email: info@heerency.com</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">Phone: +91 99999 99999</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
        Copyright {new Date().getFullYear()} Heerency Creation. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
