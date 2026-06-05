// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'pl']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Check if the incoming URL is already missing a locale prefix (like /en or /pl)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    // 2. First, check if they have a language cookie set from a previous visit
    let locale = request.cookies.get('NEXT_LOCALE')?.value

    // 3. If no cookie exists, use Cloudflare's native geo-location header!
    if (!locale) {
      const country = request.headers.get('cf-ipcountry') // Returns 2-letter ISO country code (e.g., 'PL', 'US')

      if (country === 'PL') {
        locale = 'pl'
      } else {
        locale = defaultLocale
      }
    }

    // 4. Handle the seamless redirect to the correct localized folder
    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url),
    )

    // 5. Store it in a cookie so subsequent assets/pages skip checks entirely
    response.cookies.set('NEXT_LOCALE', locale, { maxAge: 31536000 }) // 1 year
    return response
  }
}

export const config = {
  // Prevent the middleware from running on internal NextJS assets, payload admin, or images
  matcher: ['/((?!api|_next/static|_next/image|admin|favicon.ico).*)'],
}
