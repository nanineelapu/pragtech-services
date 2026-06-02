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
          font-family: var(--font-montserrat, system-ui, sans-serif);
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
        }

        .wrap {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 3rem 2.5rem;
          max-width: 440px;
          width: 100%;
          text-align: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }

        .lock {
          font-size: 2.75rem;
          margin-bottom: 1.25rem;
          display: block;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 1.5rem;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #ef4444;
          border-radius: 50%;
          animation: blink 1.4s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        h1 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin-bottom: 0.875rem;
        }

        .sep {
          width: 40px;
          height: 2px;
          background: #e2e8f0;
          border-radius: 99px;
          margin: 0 auto 1.25rem;
        }

        .desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.75;
          margin-bottom: 2rem;
        }

        .contact-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 1.125rem 1.25rem;
          font-size: 0.875rem;
          color: #475569;
          text-align: left;
        }

        .contact-box strong {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.625rem;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.4rem;
          color: #334155;
          font-size: 0.875rem;
        }

        .contact-row:last-child {
          margin-bottom: 0;
        }

        .contact-row a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }

        .contact-row a:hover {
          text-decoration: underline;
        }

        .footer-note {
          margin-top: 2rem;
          font-size: 0.72rem;
          color: #cbd5e1;
        }
      `}</style>

      <div className="wrap">
        <span className="lock">🔒</span>

        <div className="badge">
          <span className="dot" />
          Site Paused
        </div>

        <h1>This site is temporarily offline</h1>
        <div className="sep" />

        <p className="desc">
          Access has been suspended due to a pending payment.
          Once settled, the site will be restored within minutes.
        </p>

        <div className="contact-box">
          <strong>Contact to resume</strong>
          <div className="contact-row">
            <span>✉️</span>
            <a href="mailto:info@pragtech.co.uk">info@pragtech.co.uk</a>
          </div>
          <div className="contact-row">
            <span>🌐</span>
            <span>www.pragtech.co.uk</span>
          </div>
        </div>

        <p className="footer-note">© Pragtech Ltd · United Kingdom</p>
      </div>
    </>
  );
}
