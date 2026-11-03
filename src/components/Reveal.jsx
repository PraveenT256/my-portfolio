import { useReveal } from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', className = '', style, children }) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
