import { NextResponse } from "next/server"

export async function proxy(request) {

	if (!request.cookies.has("access_token")) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	if (request.cookies.get("access_token").value !== "1234") {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	
	
}

export const config = {
	matcher: ["/pokemon/:path*"]
}
