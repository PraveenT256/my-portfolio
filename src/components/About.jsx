import Reveal from './Reveal.jsx'
import CopyLink from './CopyLink.jsx'
import { contact } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>A quick-learning engineer who ships.</h2>
          </div>
          <div className="about-text">
            <p>
              I'm a MERN stack developer with hands-on experience building and shipping a production multi-tenant
              SaaS property-leasing platform. I'm comfortable across the stack — React.js on the front end, Node.js
              and Express.js on the back end, and MongoDB for data — with working exposure to REST API design and
              automated testing.
            </p>
            <p>
              My foundation in data structures and algorithms keeps my problem-solving sharp, and I adapt quickly to
              new tools, codebases and team conventions.
            </p>
          </div>
          <div className="stat-row">
            <div className="stat">
              <div className="num">1</div>
              <div className="label">Production SaaS platform shipped</div>
            </div>
            <div className="stat">
              <div className="num">3</div>
              <div className="label">Developer roles &amp; internships</div>
            </div>
            <div className="stat">
              <div className="num">7.13</div>
              <div className="label">B.Tech CGPA, CSE</div>
            </div>
          </div>
        </Reveal>
        <Reveal className="contact-card">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <span className="k">Email</span>
              <CopyLink href={`mailto:${contact.email}`} copyValue={contact.email} copyLabel="Email">
                {contact.email}
              </CopyLink>
            </li>
            <li>
              <span className="k">Phone</span>
              <CopyLink href={`tel:${contact.phoneValue}`} copyValue={contact.phoneDisplay} copyLabel="Phone number">
                {contact.phoneDisplay}
              </CopyLink>
            </li>
            <li>
              <span className="k">LinkedIn</span>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                {contact.linkedinLabel}
              </a>
            </li>
            <li>
              <span className="k">GitHub</span>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                {contact.githubLabel}
              </a>
            </li>
            <li>
              <span className="k">Location</span>
              <span>{contact.location}</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
