import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import { experiences } from '../data/resume'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </Reveal>

        <div className="timeline" ref={ref}>
          <motion.div
            className="timeline__line"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          {experiences.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              className="timeline__item glass"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="timeline__dot" />
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{exp.role}</h3>
                  <p className="timeline__company">{exp.company}</p>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{exp.period}</span>
                  <span className="timeline__location">{exp.location}</span>
                </div>
              </div>
              <ul className="timeline__highlights">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          padding-left: 2rem;
        }
        .timeline__line {
          position: absolute;
          left: 6px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gradient);
          transform-origin: top;
        }
        .timeline__item {
          position: relative;
          padding: 1.5rem;
          margin-bottom: 1.25rem;
          transition: border-color 0.25s;
        }
        .timeline__item:hover {
          border-color: rgba(34, 211, 238, 0.2);
        }
        .timeline__dot {
          position: absolute;
          left: -2rem;
          top: 1.75rem;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--accent);
          box-shadow: 0 0 12px var(--accent-glow);
          transform: translateX(-1px);
        }
        .timeline__header {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        .timeline__role {
          font-size: 1.1rem;
          font-weight: 700;
        }
        .timeline__company {
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .timeline__meta {
          text-align: right;
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .timeline__period {
          font-family: var(--mono);
          color: var(--accent-2);
        }
        .timeline__highlights {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .timeline__highlights li {
          font-size: 0.9rem;
          color: var(--text-muted);
          padding-left: 1rem;
          position: relative;
        }
        .timeline__highlights li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        @media (max-width: 640px) {
          .timeline__meta { text-align: left; }
        }
      `}</style>
    </section>
  )
}
