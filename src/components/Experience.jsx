import { experience, education } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve worked</h2>

        <div className="experience-list">
          {experience.map((item) => (
            <div className="experience-item" key={item.id}>
              <div className="experience-period">{item.period}</div>
              <div className="experience-content">
                <div className="experience-role">{item.role}</div>
                <div className="experience-company">{item.company}</div>
                <p className="experience-description">{item.description}</p>
                <div className="experience-tech">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-list">
          <h3 className="education-label">Education</h3>
          {education.map((item) => (
            <div className="education-item" key={item.id}>
              <div className="education-period">{item.period}</div>
              <div className="education-content">
                <div className="education-degree">{item.degree}</div>
                <div className="education-institution">{item.institution}</div>
                {item.details && (
                  <p className="education-details">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
