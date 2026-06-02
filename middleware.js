import { NextResponse } from 'next/server';

export function middleware(request) {
  const sitePaused = process.env.SITE_PAUSED === 'true';
  const { pathname } = request.nextUrl;

  // Allow the /paused page and its assets to load freely (avoid redirect loop)
  if (
    pathname.startsWith('/paused') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // If site is paused, redirect every visitor to the paused page
  if (sitePaused) {
    const pausedUrl = request.nextUrl.clone();
    pausedUrl.pathname = '/paused';
    return NextResponse.redirect(pausedUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
