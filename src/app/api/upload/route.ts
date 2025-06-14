import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const formdata = await request.formData()
        const files = formdata.getAll("files")
        console.log("Files", files)
        const buffers = []
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            // @ts-ignore
            const buffer = Buffer.from(await file.arrayBuffer())
            buffers.push(buffer)
        }
        console.log('buffers', buffers)
        return NextResponse.json({ buffer: buffers }, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ msg: "Internal server error" }, { status: 500 })
    }
}