import { NextRequest, NextResponse } from "next/server"


export function middleware(request: NextRequest) {
    const cookies = request.cookies.getAll()
    console.log("cookies", cookies)

    const token = request.cookies.get('token')

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // verify token
    const isValid = token.value == 'value'
    if (!isValid) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}


export const config = {
    matcher: ['/', '/about', '/blogs/:path*', '/products/:path*', '/goods/:path*']
}