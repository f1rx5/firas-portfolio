import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'
import { profile } from '../data/resume'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero__orb hero__orb--1"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero__orb hero__orb--2"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container hero__content">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="hero__badge">
            <span className="hero__dot" />
            Available for opportunities · {profile.location}
          </motion.p>

          <motion.h1 variants={item} className="hero__title">
            Hi, I'm <span className="hero__name">{profile.name}</span>
          </motion.h1>

          <motion.p variants={item} className="hero__role">
            {profile.title}
          </motion.p>

          <motion.p variants={item} className="hero__tagline">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              <HiOutlineMail /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={profile.website} target="_blank" rel="noreferrer" aria-label="Website">
              <FaGlobe />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__code glass"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="hero__code-bar">
            <span /><span /><span />
            <p>developer.ts</p>
          </div>
          <pre>
            <code>
              <span className="kw">const</span> firas = {'{'}{'\n'}
              {'  '}role: <span className="str">"Frontend Developer"</span>,{'\n'}
              {'  '}experience: <span className="num">4</span> + <span className="str">" years"</span>,{'\n'}
              {'  '}stack: [<span className="str">"React"</span>, <span className="str">"TypeScript"</span>, <span className="str">"Node"</span>],{'\n'}
              {'  '}passion: <span className="str">"crafting pixel-perfect UIs"</span>,{'\n'}
              {'  '}location: <span className="str">"Riyadh, SA"</span>{'\n'}
              {'}'};
            </code>
          </pre>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <HiArrowDown />
      </motion.a>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: var(--nav-height);
          overflow: hidden;
        }
        .hero__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .hero__orb--1 {
          width: 420px;
          height: 420px;
          background: rgba(34, 211, 238, 0.12);
          top: 10%;
          right: -5%;
        }
        .hero__orb--2 {
          width: 360px;
          height: 360px;
          background: rgba(167, 139, 250, 0.1);
          bottom: 15%;
          left: -8%;
        }
        .hero__content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          padding: 0.4rem 0.9rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: rgba(20, 20, 31, 0.5);
        }
        .hero__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
        }
        .hero__title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
        }
        .hero__name {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero__role {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 1rem;
        }
        .hero__tagline {
          color: var(--text-muted);
          font-size: 1.05rem;
          max-width: 480px;
          margin-bottom: 2rem;
        }
        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .hero__socials {
          display: flex;
          gap: 1rem;
        }
        .hero__socials a {
          font-size: 1.35rem;
          color: var(--text-muted);
          transition: color 0.2s, transform 0.2s;
        }
        .hero__socials a:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }
        .hero__code {
          padding: 0;
          overflow: hidden;
          font-family: var(--mono);
          font-size: 0.82rem;
          line-height: 1.7;
        }
        .hero__code-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--border);
          background: rgba(0,0,0,0.2);
        }
        .hero__code-bar span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--border);
        }
        .hero__code-bar span:nth-child(1) { background: #ff5f57; }
        .hero__code-bar span:nth-child(2) { background: #febc2e; }
        .hero__code-bar span:nth-child(3) { background: #28c840; }
        .hero__code-bar p {
          margin-left: auto;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .hero__code pre {
          padding: 1.25rem;
          overflow-x: auto;
        }
        .hero__code .kw { color: #c792ea; }
        .hero__code .str { color: #c3e88d; }
        .hero__code .num { color: #f78c6c; }
        .hero__scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-muted);
          font-size: 1.5rem;
        }
        @media (max-width: 900px) {
          .hero__content {
            grid-template-columns: 1fr;
            text-align: center;
            padding-bottom: 4rem;
          }
          .hero__tagline { margin-inline: auto; }
          .hero__actions, .hero__socials { justify-content: center; }
          .hero__code { display: none; }
        }
      `}</style>
    </section>
  )
}
