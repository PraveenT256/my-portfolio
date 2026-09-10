import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Where the work happened.</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((item) => (
            <Reveal key={`${item.org}-${item.role}`} className="t-item">
              <div className="t-head">
                <span className="t-role">{item.role}</span>
                <span className="t-org">&middot; {item.org}</span>
                <span className="t-date">{item.date}</span>
              </div>
              <p className="t-desc">{item.description}</p>
              {item.bullets && (
                <ul className="t-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {item.link && (
                <a className="link-chip" href={item.link.href} target="_blank" rel="noopener noreferrer">
                  {item.link.label}
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
