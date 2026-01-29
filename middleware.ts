import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/internal-pricing")) {
    const auth = req.headers.get("authorization");
    
    // Expected credentials: mdbodysculpting2026 / md@123!
    const expectedAuth = "Basic " + Buffer.from("mdbodysculpting2026:md@123!").toString("base64");

    if (!auth || auth !== expectedAuth) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Internal Access"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/internal-pricing/:path*",
};
