import Reveal from './Reveal.jsx'
import CopyLink from './CopyLink.jsx'
import { contact } from '../data.js'

export default function Contact() {
  return (
    <section id="contact">
      <Reveal as="div" className="wrap contact-cta">
        <p className="eyebrow">Contact</p>
        <h2>Let's build something reliable together.</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '56ch', fontSize: '1.02rem' }}>
          Open to MERN stack developer roles and freelance work. The fastest way to reach me is email — I usually
          reply within a day.
        </p>
        <div className="contact-actions">
          <CopyLink href={`mailto:${contact.email}`} copyValue={contact.email} copyLabel="Email" className="btn">
            {contact.email}
          </CopyLink>
          <CopyLink
            href={`tel:${contact.phoneValue}`}
            copyValue={contact.phoneDisplay}
            copyLabel="Phone number"
            className="btn ghost"
          >
            {contact.phoneDisplay}
          </CopyLink>
          <a className="btn ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="btn ghost" href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}
