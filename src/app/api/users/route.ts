import { headers } from "next/headers"
import { NextResponse } from "next/server"

export const users = [
    { id: 1, name: "John Doe 1" },
    { id: 2, name: "John Doe 2" },
    { id: 3, name: "John Doe 3" }
]

export async function GET() {
    return NextResponse.json(users, { status: 200 })
}

export async function POST(request: Request) {
    const user = await request.json()
    users.push({
        id: users.length + 1,
        name: user.name
    })
    return new Response(
        JSON.stringify(users),
        {
            headers: {
                "Content-Type": "application/json"
            },
            status: 201
        }
    )
}
