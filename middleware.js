import { NextResponse } from 'next/server';

const PAUSED_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Site Paused | Pragtech Ltd</title>
  <meta name="robots" content="noindex, nofollow" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
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
    .note { margin-top: 1.5rem; font-size: 0.7rem; color: #cbd5e1; }
  </style>
</head>
<body>
  <div class="card">
    <span class="icon">🔒</span>
    <div class="badge">
      <span class="dot"></span>
      Site Paused
    </div>
    <h1>This site is temporarily offline</h1>
    <div class="contact">
      <div class="contact-label">Contact to resume</div>
      <a href="mailto:info@pragtech.co.uk">info@pragtech.co.uk</a>
    </div>
    <p class="note">© Pragtech Ltd · United Kingdom</p>
  </div>
</body>
</html>`;

export function middleware(request) {
  const sitePaused = process.env.SITE_PAUSED === 'true';
  const { pathname } = request.nextUrl;

  // Always allow static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // If site is paused, return a raw HTML page — no Navbar, no Footer
  if (sitePaused) {
    return new NextResponse(PAUSED_HTML, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
