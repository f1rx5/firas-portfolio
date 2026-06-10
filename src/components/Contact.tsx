import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'
import Reveal from './Reveal'
import { profile } from '../data/resume'

const links = [
  { icon: HiOutlineMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: HiOutlinePhone, label: profile.phone, href: `tel:${profile.phone}` },
  { icon: HiOutlineLocationMarker, label: profile.location, href: '#' },
  { icon: FaGithub, label: 'github.com/f1rx5', href: profile.github },
  { icon: FaLinkedin, label: 'linkedin.com/in/firassharief', href: profile.linkedin },
  { icon: FaGlobe, label: 'firas-webdev.netlify.app', href: profile.website },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <div className="contact__wrapper glass">
            <div className="contact__text">
              <p className="section-label">Contact</p>
              <h2 className="contact__title">Let's build something great</h2>
              <p className="contact__desc">
                Open to frontend roles, freelance projects, and collaborations.
                Reach out — I'd love to hear from you.
              </p>
              <motion.a
                href={`mailto:${profile.email}`}
                className="btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiOutlineMail /> Send an Email
              </motion.a>
            </div>

            <div className="contact__links">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="contact__link"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <link.icon />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .contact {
          padding-bottom: 3rem;
        }
        .contact__wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding: 3rem;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.05), rgba(167, 139, 250, 0.05));
        }
        .contact__title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 800;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .contact__desc {
          color: var(--text-muted);
          margin-bottom: 1.75rem;
          max-width: 400px;
        }
        .contact__links {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          justify-content: center;
        }
        .contact__link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .contact__link:hover {
          color: var(--accent);
        }
        .contact__link svg {
          font-size: 1.15rem;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .contact__wrapper {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
