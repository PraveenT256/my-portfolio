import { useEffect, useRef } from 'react'
import { icons, iconUrl } from '../skillIcons.js'

// One glow colour per skill group / orbit.
export const GROUP_COLORS = ['#FF6B4A', '#8B6CFF', '#4ADE9C', '#38BDF8']

// A tiny solar system: every skill group is an orbit, every skill a planet.
export default function SkillPlanets({ groups }) {
  const boxRef = useRef(null)
  const ringRefs = useRef([])
  const planetRefs = useRef({})

  useEffect(() => {
    const box = boxRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const speeds = groups.map((_, i) => 0.0042 / (1 + i * 0.55))
    const angles = groups.map((g, gi) => g.skills.map((_, si) => (si / g.skills.length) * Math.PI * 2 + gi * 0.9))

    let paused = false
    let visible = true
    let speedScale = 1
    let frame

    function render() {
      const small = window.innerWidth <= 640
      const planet = small ? 44 : 54
      const w = box.clientWidth
      const rxMax = w / 2 - planet / 2 - 6
      const ratio = small ? 0.8 : 0.45
      const base = small ? 0.5 : 0.36
      const step = (1 - base) / Math.max(groups.length - 1, 1)
      box.style.height = `${2 * rxMax * ratio + planet * 1.7}px`

      groups.forEach((g, gi) => {
        const rx = rxMax * (base + step * gi)
        const ry = rx * ratio
        const ring = ringRefs.current[gi]
        if (ring) {
          ring.style.width = `${rx * 2}px`
          ring.style.height = `${ry * 2}px`
        }
        g.skills.forEach((skill, si) => {
          const el = planetRefs.current[`${gi}-${si}`]
          if (!el) return
          const a = angles[gi][si]
          const front = (Math.sin(a) + 1) / 2 // 1 = nearest the viewer
          el.style.transform = `translate(-50%, -50%) translate(${Math.cos(a) * rx}px, ${Math.sin(a) * ry}px) scale(${0.78 + 0.32 * front})`
          el.style.zIndex = String(40 + Math.round(front * 40))
          el.style.opacity = String(0.7 + 0.3 * front)
        })
      })
    }

    function tick() {
      if (visible) {
        const target = paused ? 0 : 1
        speedScale += (target - speedScale) * 0.08
        angles.forEach((row, gi) => {
          for (let si = 0; si < row.length; si++) row[si] += speeds[gi] * speedScale
        })
        render()
      }
      frame = requestAnimationFrame(tick)
    }

    const onEnter = () => {
      paused = true
    }
    const onLeave = () => {
      paused = false
    }
    box.addEventListener('pointerenter', onEnter)
    box.addEventListener('pointerleave', onLeave)

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(box)

    render()
    if (!reduceMotion) frame = requestAnimationFrame(tick)
    window.addEventListener('resize', render)

    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener('resize', render)
      box.removeEventListener('pointerenter', onEnter)
      box.removeEventListener('pointerleave', onLeave)
    }
  }, [groups])

  return (
    <div className="orbit-system" ref={boxRef} aria-hidden="true">
      {groups.map((g, gi) => (
        <div
          key={g.title}
          className="orbit-ring"
          ref={(el) => {
            ringRefs.current[gi] = el
          }}
        />
      ))}
      <div className="sun">TPK</div>
      {groups.map((g, gi) =>
        g.skills.map((skill, si) => {
          const icon = icons[skill]
          return (
            <div
              key={skill}
              className="planet"
              style={{ '--pc': GROUP_COLORS[gi % GROUP_COLORS.length] }}
              ref={(el) => {
                planetRefs.current[`${gi}-${si}`] = el
              }}
            >
              {icon ? (
                <img className={icon.mono ? 'mono' : ''} src={iconUrl(icon)} alt="" draggable="false" />
              ) : (
                <b>{skill.slice(0, 2)}</b>
              )}
              <span>{skill}</span>
            </div>
          )
        }),
      )}
    </div>
  )
}
