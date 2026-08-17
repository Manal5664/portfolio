function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const displayedTechStack = project.featuredTechStack ?? project.techStack;

  return (
    <article className="project-card">
      <div
        className={`project-card-image${project.imageUrl ? " project-card-image--preview" : ""}`}
      >
        {project.imageUrl ? (
          <div className="project-card-browser">
            <div className="project-card-browser-bar" aria-hidden="true">
              <span className="project-card-browser-controls">
                <span />
                <span />
                <span />
              </span>
              <span className="project-card-browser-label">Application preview</span>
            </div>
            <img
              src={project.imageUrl}
              alt={`${project.title} application interface preview`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <span className="project-card-placeholder">[Screenshot]</span>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>

        <div className="project-card-features">
          <div className="project-card-features-title">Key Features</div>
          <ul>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-card-tech">
          {displayedTechStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-card-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon /> Source
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
