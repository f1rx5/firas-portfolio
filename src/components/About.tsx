import Reveal from './Reveal'
import { profile, languages } from '../data/resume'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '99.9%', label: 'App Uptime' },
  { value: '40%', label: 'Faster Load Times' },
  { value: '3', label: 'Live Projects' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">Crafting interfaces that perform</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.1}>
            <p className="about__text">{profile.summary}</p>
            <p className="about__text about__text--muted">
              Strong background in enterprise technical support for high-profile international events
              including the Esports World Cup and International Esports Federation — bringing reliability
              and user-focus to every line of code.
            </p>
            <div className="about__langs">
              {languages.map((lang) => (
                <div key={lang.name} className="about__lang glass">
                  <span className="about__lang-name">{lang.name}</span>
                  <span className="about__lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat glass">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .about__text {
          font-size: 1.05rem;
          margin-bottom: 1rem;
          color: var(--text);
        }
        .about__text--muted {
          color: var(--text-muted);
        }
        .about__langs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        .about__lang {
          padding: 0.65rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .about__lang-name {
          font-weight: 600;
          font-size: 0.9rem;
        }
        .about__lang-level {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .about__stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .about__stat {
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.25s, border-color 0.25s;
        }
        .about__stat:hover {
          transform: translateY(-4px);
          border-color: rgba(34, 211, 238, 0.25);
        }
        .about__stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }
        .about__stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
          display: block;
        }
        @media (max-width: 768px) {
          .about__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
