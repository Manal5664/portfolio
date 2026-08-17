import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tech stack</h2>
        <p className="section-description">
          Technologies and tools I work with across the development stack.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
