import { useEffect, useRef } from 'react'

function hexToRgb(hex) {
  let clean = hex.replace('#', '')
  if (clean.length === 3) clean = clean.split('').map((c) => c + c).join('')
  const num = parseInt(clean, 16)
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
}

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = canvas.closest('.hero')
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#D9502F'
    const rgb = hexToRgb(accent)

    let width, height, nodes = []
    let frameId

    function resize() {
      width = hero.offsetWidth
      height = hero.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(18, Math.min(46, Math.round((width * height) / 26000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      })
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x
          const dy = nodes[a].y - nodes[b].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${0.16 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[a].x, nodes[a].y)
            ctx.lineTo(nodes[b].x, nodes[b].y)
            ctx.stroke()
          }
        }
      }
      nodes.forEach((n) => {
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.55)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
      })
      if (!reduceMotion) frameId = requestAnimationFrame(step)
    }

    resize()
    window.addEventListener('resize', resize)
    if (reduceMotion) {
      step()
    } else {
      frameId = requestAnimationFrame(step)
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return <canvas id="hero-canvas" ref={canvasRef} />
}
