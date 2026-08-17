import { personalInfo } from "../data/portfolio";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

const heroTechStack = [
  "Python",
  "React",
  "FastAPI",
  "Machine Learning",
  "PostgreSQL",
  "Docker",
];

export default function Hero() {
  const cvUrl = personalInfo.resumeUrl?.startsWith("/")
    ? personalInfo.resumeUrl
    : null;

  return (
    <section className="hero section" id="hero" aria-labelledby="hero-title">
      <div className="section-container hero-content">
        <div className="hero-copy">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-title" id="hero-title">
            <span className="hero-title-accent">{personalInfo.name}</span>
          </h1>
          <p className="hero-role">
            Software Developer <span aria-hidden="true">|</span> Data Science &amp; AI
          </p>
          <p className="hero-subtitle">
            Building intelligent, data-driven applications that combine modern software
            engineering with applied AI.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            {cvUrl && (
              <a href={cvUrl} className="btn-download" download>
                <DownloadIcon /> Download CV
              </a>
            )}
            <a
              href={personalInfo.github}
              className="hero-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Manal Asghar's GitHub profile"
            >
              <GithubIcon /> GitHub
            </a>
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Manal Asghar's LinkedIn profile"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            )}
          </div>

          <div className="hero-tech-strip" aria-label="Core technology stack">
            <span className="hero-tech-label">Core stack</span>
            <ul>
              {heroTechStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-terminal">
            <div className="hero-terminal-header">
              <span className="hero-terminal-controls">
                <span />
                <span />
                <span />
              </span>
              <span className="hero-terminal-title">portfolio://workspace</span>
              <span className="hero-terminal-badge">static preview</span>
            </div>

            <div className="hero-terminal-body">
              <p className="hero-terminal-kicker">Project capability snapshot</p>
              <div className="hero-terminal-command">
                <span>$</span>
                <code>portfolio --inspect capabilities</code>
              </div>

              <dl className="hero-terminal-data">
                <div>
                  <dt>model</dt>
                  <dd>VisionGuard AI</dd>
                </div>
                <div>
                  <dt>stack</dt>
                  <dd>FastAPI + React</dd>
                </div>
                <div>
                  <dt>detection</dt>
                  <dd className="hero-terminal-ready">
                    <span /> enabled
                  </dd>
                </div>
                <div>
                  <dt>RAG pipeline</dt>
                  <dd className="hero-terminal-ready">
                    <span /> ready
                  </dd>
                </div>
              </dl>

              <div className="hero-terminal-footer">
                <span>Presentation snapshot</span>
                <span>No live telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
