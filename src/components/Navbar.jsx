import { useState, useEffect } from "react";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <a
          href="#"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span>&lt;</span>Manal Asghar<span>/&gt;</span>
        </a>

        <div className="navbar-links">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={activeSection === href ? "active" : ""}
              onClick={(e) => handleClick(e, href)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => handleClick(e, "#contact")}
          >
            Contact
          </a>
        </div>

        <button
          className={`navbar-toggle${mobileOpen ? " open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile${mobileOpen ? " open" : ""}`}>
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="navbar-cta"
          onClick={(e) => handleClick(e, "#contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
