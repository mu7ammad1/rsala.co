// url : http://localhost:3000/api/posts/slug
import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export const GET = async (request, { params }) => {
    try {
        const { id } = params

        const Message = await db.user.findUnique({
            where: {
                username: id
            }
        })
        if (!Message) {
            return NextResponse.json({ message: "MESSAGE NOT FOUND", error }, { status: 404 })
        }

        return NextResponse.json(Message)

    } catch (error) {
        return NextResponse.json({ message: "GET ERROR0000", error }, { status: 500 })
    }
}
export const POST = async (request) => {
    try {
        const body = await request.json();
        const { content,senderId,receiverId } = body
        const newMessage = await db.message.create({
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