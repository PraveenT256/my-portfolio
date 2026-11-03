import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>Things I've built and shipped.</h2>
        </Reveal>
        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.title} className="p-card">
              <span className="p-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="p-chips">
                {project.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              {(project.links || (project.link ? [project.link] : [])).length > 0 && (
                <div className="p-links">
                  {(project.links || [project.link]).map((link) => (
                    <a key={link.href} className="p-link" href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
