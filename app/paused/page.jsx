export const metadata = {
  title: 'Site Temporarily Paused | Pragtech Ltd',
  description: 'This site is temporarily paused. Please check back soon.',
  robots: { index: false, follow: false },
};

export default function PausedPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .paused-root {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          background: #020818;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        /* Animated background orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          animation: float 8s ease-in-out infinite;
        }
        .orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #3b82f6, #1d4ed8);
          top: -15%; left: -10%;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #8b5cf6, #6d28d9);
          bottom: -10%; right: -5%;
          animation-delay: -3s;
        }
        .orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #06b6d4, #0891b2);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -6s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        /* Grid overlay */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Card */
        .card {
          position: relative;
          z-index: 10;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 3rem 3.5rem;
          max-width: 600px;
          width: 100%;
          text-align: center;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.05),
            0 32px 64px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }

        /* Status badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 2rem;
        }
        .badge-dot {
          width: 7px; height: 7px;
          background: #ef4444;
          border-radius: 50%;
          animation: pulse-dot 1.5s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        /* Logo area */
        .logo-area {
          margin-bottom: 1.5rem;
        }
        .logo-icon {
          width: 72px; height: 72px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 0.75rem;
          box-shadow: 0 8px 32px rgba(59,130,246,0.35);
        }

        .brand {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Heading */
        h1 {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Description */
        .desc {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        /* Divider */
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin: 2rem 0;
        }

        /* Contact block */
        .contact-block {
          background: rgba(59, 130, 246, 0.06);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          text-align: left;
        }
        .contact-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 0.6rem;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
        }
        .contact-row:last-child { margin-bottom: 0; }
        .contact-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }
        .contact-link {
          color: #60a5fa;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .contact-link:hover { color: #93c5fd; }

        /* Footer note */
        .footer-note {
          margin-top: 2rem;
          font-size: 0.78rem;
          color: #334155;
        }

        @media (max-width: 480px) {
          .card { padding: 2rem 1.5rem; }
        }
      `}</style>

      <div className="paused-root">
        {/* Background */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />

        {/* Main Card */}
        <div className="card">
          {/* Status Badge */}
          <div>
            <span className="badge">
              <span className="badge-dot" />
              Site Temporarily Paused
            </span>
          </div>

          {/* Logo */}
          <div className="logo-area">
            <div className="logo-icon">🏗️</div>
            <div className="brand">Pragtech Ltd</div>
          </div>

          {/* Heading */}
          <h1>This Site is Currently Unavailable</h1>

          {/* Description */}
          <p className="desc">
            We have temporarily suspended access to this website. If you are our
            client, please complete the pending payment to restore full access
            immediately.
          </p>

          <div className="divider" />

          {/* Contact */}
          <div className="contact-block">
            <div className="contact-label">📩 Get in touch to resume</div>
            <div className="contact-row">
              <span className="contact-icon">✉️</span>
              <a href="mailto:info@pragtech.co.uk" className="contact-link">
                info@pragtech.co.uk
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-icon">🌐</span>
              <span>www.pragtech.co.uk</span>
            </div>
            <div className="contact-row">
              <span className="contact-icon">📍</span>
              <span>United Kingdom</span>
            </div>
          </div>

          {/* Footer Note */}
          <p className="footer-note">
            Once payment is confirmed, this site will be restored within minutes. <br />
            We apologise for any inconvenience.
          </p>
        </div>
      </div>
    </>
  );
}
