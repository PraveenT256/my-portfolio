import { useEffect, useRef } from 'react'

// Full-page animated "universe": parallax star layers, nebula glows and shooting stars.
export default function Universe() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dark = true
    let frame = 0
    let raf
    let shooting = null
    let nextShot = 120

    // Stars live in normalised 0..1 space so resizing never reshuffles them.
    const small = window.innerWidth < 700
    const starCount = small ? 90 : 190
    const stars = Array.from({ length: starCount }, () => {
      const z = Math.random() ** 1.6 // most stars are far away (small, slow)
      return {
        x: Math.random(),
        y: Math.random(),
        z: 0.15 + z * 0.85,
        tw: Math.random() * Math.PI * 2,
        twSpeed: 0.01 + Math.random() * 0.03,
        hue: Math.random() < 0.18 ? 'warm' : Math.random() < 0.3 ? 'cool' : 'plain',
      }
    })

    const nebulae = [
      { x: 0.18, y: 0.22, r: 0.55, c: [124, 92, 255], sx: 0.00007, sy: 0.00005, p: 0 },
      { x: 0.82, y: 0.55, r: 0.6, c: [255, 107, 74], sx: 0.00005, sy: 0.00008, p: 2 },
      { x: 0.35, y: 0.88, r: 0.5, c: [56, 189, 248], sx: 0.00008, sy: 0.00004, p: 4 },
    ]

    function readTheme() {
      const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim().replace('#', '')
      if (bg.length === 6) {
        const n = parseInt(bg, 16)
        const lum = (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255
        dark = lum < 0.5
      }
    }

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function starColor(s, alpha) {
      if (!dark) return `rgba(60, 64, 110, ${alpha * 0.55})`
      if (s.hue === 'warm') return `rgba(255, 214, 170, ${alpha})`
      if (s.hue === 'cool') return `rgba(170, 205, 255, ${alpha})`
      return `rgba(255, 255, 255, ${alpha})`
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      const scroll = window.scrollY
      const t = frame

      // nebula glows
      nebulae.forEach((n) => {
        const cx = (n.x + Math.sin(t * n.sx * 60 + n.p) * 0.04) * w
        const cy = (n.y + Math.cos(t * n.sy * 60 + n.p) * 0.04) * h - scroll * 0.03
        const r = n.r * Math.max(w, h)
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        const a = dark ? 0.13 : 0.1
        g.addColorStop(0, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},${a})`)
        g.addColorStop(1, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},0)`)
        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
      })

      // stars with parallax: nearer stars drift and scroll faster
      stars.forEach((s) => {
        const drift = reduceMotion ? 0 : t * 0.00012 * s.z
        let y = (s.y - drift - (scroll * 0.00018 * s.z) / (h / 1000)) % 1
        if (y < 0) y += 1
        const x = s.x * w
        const py = y * h
        const twinkle = 0.55 + 0.45 * Math.sin(s.tw + t * s.twSpeed)
        const alpha = (dark ? 0.35 + 0.65 * s.z : 0.5) * twinkle
        const r = 0.4 + s.z * 1.5
        ctx.fillStyle = starColor(s, alpha)
        ctx.beginPath()
        ctx.arc(x, py, r, 0, Math.PI * 2)
        ctx.fill()
        if (dark && s.z > 0.85) {
          ctx.fillStyle = starColor(s, alpha * 0.12)
          ctx.beginPath()
          ctx.arc(x, py, r * 4, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // shooting star
      if (!reduceMotion) {
        if (!shooting && frame > nextShot) {
          const fromLeft = Math.random() < 0.5
          shooting = {
            x: Math.random() * w * 0.7 + (fromLeft ? 0 : w * 0.3),
            y: Math.random() * h * 0.4,
            vx: (fromLeft ? 1 : -1) * (7 + Math.random() * 4),
            vy: 3 + Math.random() * 2.5,
            life: 0,
          }
        }
        if (shooting) {
          const s = shooting
          s.x += s.vx
          s.y += s.vy
          s.life += 1
          const fade = Math.max(0, 1 - s.life / 55)
          const len = 90
          const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * (len / 10), s.y - s.vy * (len / 10))
          const col = dark ? '255,255,255' : '60,64,110'
          g.addColorStop(0, `rgba(${col},${0.9 * fade})`)
          g.addColorStop(1, `rgba(${col},0)`)
          ctx.strokeStyle = g
          ctx.lineWidth = 1.6
          ctx.beginPath()
          ctx.moveTo(s.x, s.y)
          ctx.lineTo(s.x - s.vx * (len / 10), s.y - s.vy * (len / 10))
          ctx.stroke()
          if (s.life > 55 || s.x < -100 || s.x > w + 100 || s.y > h + 100) {
            shooting = null
            nextShot = frame + 240 + Math.random() * 420
          }
        }
      }
    }

    function loop() {
      frame += 1
      if (frame % 90 === 0) readTheme()
      if (!document.hidden) draw()
      raf = requestAnimationFrame(loop)
    }

    readTheme()
    resize()
    window.addEventListener('resize', resize)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onScheme = () => {
      readTheme()
      if (reduceMotion) draw()
    }
    mq.addEventListener('change', onScheme)

    if (reduceMotion) {
      draw()
      window.addEventListener('scroll', draw, { passive: true })
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', draw)
      mq.removeEventListener('change', onScheme)
    }
  }, [])

  return <canvas className="universe" ref={canvasRef} aria-hidden="true" />
}
