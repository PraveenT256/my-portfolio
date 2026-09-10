import HeroCanvas from './HeroCanvas.jsx'
import RoleRotator from './RoleRotator.jsx'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <HeroCanvas />
      <div className="wrap hero-inner">
        <div>
          <p className="eyebrow">MERN Stack Developer</p>
          <h1>
            Tangudu Praveen Kumar
            <br />
            <em>builds full-stack products</em> end to end.
          </h1>
          <RoleRotator />
          <p className="hero-summary">
            MERN stack developer with hands-on experience building and shipping a production multi-tenant SaaS
            property-leasing platform — React.js, Node.js, Express.js and MongoDB, with REST API design and
            automated testing along the way.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#projects">
              View projects
            </a>
            <a className="btn ghost" href="#experience">
              See experience
            </a>
          </div>
        </div>
        <div className="hero-card">
          <dl>
            <div className="row">
              <dt>Based in</dt>
              <dd>Gunupur, Odisha, IN</dd>
            </div>
            <div className="row">
              <dt>Role</dt>
              <dd>MERN Stack Developer</dd>
            </div>
            <div className="row">
              <dt>Stack</dt>
              <dd>React · Node · Mongo</dd>
            </div>
            <div className="row">
              <dt>Status</dt>
              <dd>Open to opportunities</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
