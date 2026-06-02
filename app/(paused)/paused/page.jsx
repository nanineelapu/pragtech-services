export const metadata = {
  title: "Site Paused | Pragtech Ltd",
  robots: { index: false, follow: false },
};

export default function PausedPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          height: 100%;
        }

        body {
          font-family: system-ui, -apple-system, sans-serif;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 1.5rem;
        }

        .card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 2.5rem 2rem;
          max-width: 400px;
          width: 100%;
          text-align: center;
        }

        .icon { font-size: 2.5rem; margin-bottom: 1rem; display: block; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 1.25rem;
        }

        .dot {
          width: 5px; height: 5px;
          background: #ef4444;
          border-radius: 50%;
          animation: blink 1.4s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.15; }
        }

        h1 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.75rem;
          line-height: 1.35;
        }

        .contact {
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 1rem;
          font-size: 0.83rem;
          color: #64748b;
          text-align: left;
        }

        .contact-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .contact a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }

        .note {
          margin-top: 1.5rem;
          font-size: 0.7rem;
          color: #cbd5e1;
        }
      `}</style>

      <div className="card">
        <span className="icon">🔒</span>

        <div className="badge">
          <span className="dot" />
          Site Paused
        </div>

        <h1>This site is temporarily offline</h1>

        <div className="contact">
          <div className="contact-label">Contact to resume</div>
          <a href="mailto:info@pragtech.co.uk">info@pragtech.co.uk</a>
        </div>

        <p className="note">© Pragtech Ltd · United Kingdom</p>
      </div>
    </>
  );
}
