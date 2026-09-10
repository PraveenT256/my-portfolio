import CopyLink from './CopyLink.jsx'
import { contact } from '../data.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          TPK<span>.</span>
        </div>
        <nav className="links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <CopyLink href={`mailto:${contact.email}`} copyValue={contact.email} copyLabel="Email" className="btn">
          Get in touch
        </CopyLink>
      </div>
    </header>
  )
}
