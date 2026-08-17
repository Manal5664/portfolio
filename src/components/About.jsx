import { aboutContent } from "../data/portfolio";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <p className="section-label">About</p>
        <h2 className="section-title">A bit about me</h2>

        <div className="about-grid">
          <div className="about-text">
            {aboutContent.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="about-highlights">
            {aboutContent.highlights.map((item) => (
              <div className="about-highlight-card" key={item.label}>
                <div className="about-highlight-label">{item.label}</div>
                <div className="about-highlight-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
