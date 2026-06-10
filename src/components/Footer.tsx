import { profile } from '../data/resume'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} <strong>{profile.name}</strong> · Built with React & Vite
        </p>
        <p className="footer__note">Riyadh, Saudi Arabia</p>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 1.5rem 0;
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer__inner strong {
          color: var(--text);
          font-weight: 600;
        }
      `}</style>
    </footer>
  )
}
