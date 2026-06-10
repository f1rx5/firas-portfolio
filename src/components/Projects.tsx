import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import Reveal from './Reveal'
import { projects } from '../data/resume'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Featured work</h2>
        </Reveal>

        <div className="projects__grid" ref={ref}>
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="projects__card glass"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="projects__card-top">
                <span className="projects__index">0{i + 1}</span>
                <HiExternalLink className="projects__icon" />
              </div>
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__subtitle">{project.subtitle}</p>
              <p className="projects__desc">{project.description}</p>
              <div className="projects__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          background: linear-gradient(180deg, transparent, rgba(20, 20, 31, 0.35), transparent);
        }
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .projects__card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s, box-shadow 0.25s;
          cursor: pointer;
        }
        .projects__card:hover {
          border-color: rgba(34, 211, 238, 0.3);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        .projects__card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .projects__index {
          font-family: var(--mono);
          font-size: 0.85rem;
          color: var(--accent);
        }
        .projects__icon {
          font-size: 1.25rem;
          color: var(--text-muted);
          transition: color 0.2s, transform 0.2s;
        }
        .projects__card:hover .projects__icon {
          color: var(--accent);
          transform: translate(2px, -2px);
        }
        .projects__title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .projects__subtitle {
          font-size: 0.85rem;
          color: var(--accent-2);
          margin-bottom: 0.75rem;
        }
        .projects__desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          flex: 1;
          margin-bottom: 1.25rem;
        }
        .projects__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        @media (max-width: 900px) {
          .projects__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
