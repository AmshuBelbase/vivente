import { NextRequest, NextResponse } from "next/server";

// This runs on every request that matches the pattern below.
// It checks for the admin session cookie — if missing, redirect to login.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let the login page and auth API through — no cookie needed for these
  if (pathname.startsWith("/admin/login") || pathname.startsWith("/api/admin/auth")) {
    return NextResponse.next();
  }

  // For everything else under /admin, check for the session cookie
  const session = req.cookies.get("admin_session");
  if (!session?.value) {
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Only run this middleware on /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
