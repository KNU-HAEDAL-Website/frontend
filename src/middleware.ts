import { NextRequest } from 'next/server'

import { DEFAULT_LOGIN_REDIRECT, authRoutes } from './routes'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isLogin = !!req.cookies.toString()

  const isAuthRoute = authRoutes.includes(pathname)
  if (isAuthRoute) {
    if (isLogin) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl))
    }
    return null
  }
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
