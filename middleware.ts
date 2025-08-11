import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n';

/**
 * Middleware to ensure all pages are prefixed with a locale.  If the incoming
 * pathname doesn’t begin with one of the supported locales, the user is
 * redirected to the same path with the default locale inserted.  Static assets
 * and API routes are excluded via the matcher below.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip next.js internals, API routes and assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.[^/]+$/.test(pathname) // skip files with extensions
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!favicon.ico).*)'],
};