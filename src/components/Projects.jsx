import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Featured work</h2>
        <p className="section-description">
          A selection of projects showcasing my work in AI/ML and full-stack development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
