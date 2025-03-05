import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userStore } from "./data/constants";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(userStore.token) || "";
  if (!token) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  if (request.url.includes("/auth") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/jamb", "/quiz", "/result", "/exam"],
};
