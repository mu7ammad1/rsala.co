// url : http://localhost:3000/api/posts
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const { content,senderId,receiverId } = body
        const newMessage = await db.messagehide.create({
            data: {
                content,
                senderId,
                receiverId
            }
        })

        return NextResponse.json(newMessage)
    } catch (error) {
        return NextResponse.json({ message: "POST error", error }, { status: 500 })
    }
}
export const GET = async () => {
    try {
        const Message = await db.user.findMany()

        return NextResponse.json(Message)

    } catch (error) {
        return NextResponse.json({ message: "GET ERROR0", error }, { status: 500 })
    }
}