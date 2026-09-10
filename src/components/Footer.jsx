import { contact } from '../data.js'

export default function Footer() {
  return (
    <footer className="wrap">
      <span>&copy; {new Date().getFullYear()} Tangudu Praveen Kumar</span>
      <span>{contact.location}</span>
    </footer>
  )
}
