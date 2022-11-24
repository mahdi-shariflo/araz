// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("auth")?.value;

  if (request.nextUrl.pathname.startsWith("/auth")) {
    if (cookie) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }
    return NextResponse.next()
  } else {
    if (!cookie) {
      return NextResponse.redirect(
        new URL("/auth", request.url)
      );
    }
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*", "/auth"],
};
