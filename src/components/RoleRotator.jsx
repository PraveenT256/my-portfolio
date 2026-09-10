import { useEffect, useRef, useState } from 'react'
import { roles } from '../data.js'

export default function RoleRotator() {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const reduceMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reduceMotion.current) return
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length)
        setFading(false)
      }, 220)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <p className="role-line" style={{ opacity: fading ? 0 : 1, transition: 'opacity .35s ease' }}>
      {roles[index]}
      <span className="cursor" />
    </p>
  )
}
