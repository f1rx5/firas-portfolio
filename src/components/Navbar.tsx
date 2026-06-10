import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data/resume'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="navbar__logo-accent">F</span>S
        </a>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="navbar__link">
              {link.label}
            </button>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-primary navbar__cta">
            GitHub
          </a>
        </nav>

        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
        }
        .navbar--scrolled {
          background: rgba(7, 7, 13, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .navbar__logo-accent {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .navbar__nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .navbar__link {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
        }
        .navbar__link:hover {
          color: var(--text);
          background: var(--surface);
        }
        .navbar__cta {
          margin-left: 0.5rem;
          padding: 0.55rem 1.1rem;
          font-size: 0.85rem;
        }
        .navbar__toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .navbar__toggle { display: block; }
          .navbar__nav {
            position: fixed;
            top: var(--nav-height);
            left: 0;
            right: 0;
            flex-direction: column;
            padding: 1.5rem;
            background: rgba(7, 7, 13, 0.97);
            border-bottom: 1px solid var(--border);
            transform: translateY(-120%);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.3s, opacity 0.3s;
          }
          .navbar__nav--open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .navbar__cta { margin-left: 0; margin-top: 0.5rem; }
        }
      `}</style>
    </motion.header>
  )
}
