import { Link } from "react-router-dom";

const pages = [
  {
    title: "About",
    description:
      "Learn how Heerency approaches premium interiors with clarity, collaboration, and execution-focused thinking.",
    to: "/about",
    cta: "Explore About",
  },
  {
    title: "Services",
    description:
      "Review the design services we offer for residences, commercial spaces, visual planning, and renovations.",
    to: "/services",
    cta: "View Services",
  },
  {
    title: "Projects",
    description:
      "See the kind of refined, high-end spaces we create across modern living and business environments.",
    to: "/projects",
    cta: "Browse Projects",
  },
  {
    title: "Contact",
    description:
      "Start a conversation with our team and move your interior project into a more structured process.",
    to: "/contact",
    cta: "Contact Us",
  },
];

const HomePageLinks = () => {
  return (
    <section className="bg-[var(--color-bg-soft)] px-4 py-20 text-[var(--color-text)] sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Explore Heerency
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Navigate the site by what matters most to your project
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            Each page now has a dedicated role, so you can quickly understand
            our studio, services, project style, and next steps without
            scrolling through one oversized homepage.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pages.map((page) => (
            <div
              key={page.title}
              className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] p-6"
            >
              <h3 className="text-2xl font-semibold">{page.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                {page.description}
              </p>
              <Link
                to={page.to}
                className="mt-6 inline-flex rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium transition hover:border-primary hover:text-primary"
              >
                {page.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageLinks;
