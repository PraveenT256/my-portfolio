import Reveal from './Reveal.jsx'
import SkillPlanets, { GROUP_COLORS } from './SkillPlanets.jsx'
import { skillGroups } from '../data.js'
import { icons, iconUrl } from '../skillIcons.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>The toolkit, by layer.</h2>
        </Reveal>
        <Reveal>
          <SkillPlanets groups={skillGroups} />
        </Reveal>
        <Reveal className="skill-groups">
          {skillGroups.map((group, gi) => (
            <div className="skill-group" key={group.title} style={{ '--pc': GROUP_COLORS[gi % GROUP_COLORS.length] }}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.skills.map((skill) => {
                  const icon = icons[skill]
                  return (
                    <span className="chip" key={skill}>
                      {icon && (
                        <img
                          className={`chip-icon${icon.mono ? ' mono' : ''}`}
                          src={iconUrl(icon)}
                          alt=""
                          width="18"
                          height="18"
                          loading="lazy"
                        />
                      )}
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
