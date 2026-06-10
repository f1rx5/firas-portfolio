import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import { skillGroups } from '../data/resume'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tech stack & expertise</h2>
        </Reveal>

        <div className="skills__grid" ref={ref}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skills__card glass"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
            >
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__tags">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.04, duration: 0.35 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          background: linear-gradient(180deg, transparent, rgba(20, 20, 31, 0.4), transparent);
        }
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .skills__card {
          padding: 1.5rem;
          transition: transform 0.25s, border-color 0.25s;
        }
        .skills__card:hover {
          transform: translateY(-3px);
          border-color: rgba(167, 139, 250, 0.25);
        }
        .skills__category {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--accent-2);
        }
        .skills__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        @media (max-width: 640px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
