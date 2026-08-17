import { footerContent, personalInfo, navLinks } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="footer-links">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <p className="footer-text">{footerContent.builtWith}</p>
      </div>
    </footer>
  );
}
