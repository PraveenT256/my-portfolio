import Reveal from './Reveal.jsx'
import { education, achievements } from '../data.js'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Education</p>
          <h2>Academic background.</h2>
        </Reveal>
        <div className="timeline">
          {education.map((item) => (
            <Reveal key={item.role} className="t-item">
              <div className="t-head">
                <span className="t-role">{item.role}</span>
                <span className="t-date">{item.date}</span>
              </div>
              <p className="t-desc">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head" style={{ marginTop: '56px' }}>
          <p className="eyebrow">Achievements &amp; Strengths</p>
        </Reveal>
        <Reveal className="ach-list">
          {achievements.map((text) => (
            <div className="ach" key={text}>
              {text}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
