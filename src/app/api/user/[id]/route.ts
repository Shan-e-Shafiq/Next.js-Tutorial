import { NextResponse } from "next/server";
import { users } from "../../users/route";

type args = {
    params: {
        id: string
    }
}

export async function GET(_request: Request, args: args) {
    const { id } = await args.params
    const user = users.find(user => user.id == parseInt(id))
    return NextResponse.json(user, { status: 200 })
}

