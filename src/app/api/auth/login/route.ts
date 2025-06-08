import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"



export async function POST(request: NextRequest) {
    const { email, password } = await request.json()
    console.log(email, password)
    const cookie = await cookies()
    cookie.set("token", "value", {
        httpOnly: true,
        maxAge: 24 * 60 * 60,
        sameSite: 'strict',
        path: '/',
        secure: true
    })
    return NextResponse.json({ email, password }, { status: 200 })
}