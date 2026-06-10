import Reveal from './Reveal'
import { education, certifications } from '../data/resume'
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi'

export default function Education() {
  return (
    <section className="section education">
      <div className="container">
        <Reveal>
          <p className="section-label">Education & Certs</p>
          <h2 className="section-title">Learning journey</h2>
        </Reveal>

        <div className="education__grid">
          <Reveal delay={0.1}>
            <div className="education__card glass">
              <HiAcademicCap className="education__icon" />
              <h3>{education.degree}</h3>
              <p className="education__school">{education.school}</p>
              <p className="education__meta">
                {education.location} · {education.period}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="education__certs glass">
              <div className="education__certs-header">
                <HiBadgeCheck />
                <h3>Certifications & Training</h3>
              </div>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .education__grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 1.25rem;
        }
        .education__card {
          padding: 2rem;
          text-align: center;
        }
        .education__icon {
          font-size: 2.5rem;
          color: var(--accent);
          margin-bottom: 1rem;
        }
        .education__card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .education__school {
          color: var(--accent-2);
          font-weight: 500;
          margin-bottom: 0.35rem;
        }
        .education__meta {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .education__certs {
          padding: 1.75rem;
        }
        .education__certs-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          color: var(--accent);
        }
        .education__certs-header h3 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
        }
        .education__certs ul {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .education__certs li {
          font-size: 0.9rem;
          color: var(--text-muted);
          padding-left: 1rem;
          position: relative;
        }
        .education__certs li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-2);
        }
        @media (max-width: 768px) {
          .education__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
