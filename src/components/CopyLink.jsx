import { useToast } from '../context/ToastContext.jsx'

export default function CopyLink({ href, copyValue, copyLabel, className, children }) {
  const showToast = useToast()

  const handleClick = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(copyValue)
        showToast(`${copyLabel} copied: ${copyValue}`)
      } catch {
        // clipboard permission denied — the link itself still opens
      }
    }
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
