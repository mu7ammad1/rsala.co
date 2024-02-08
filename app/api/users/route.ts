import { connectToDB } from "@/app/ultis"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        await connectToDB()


        const users = await prisma?.user.findMany()

        return NextResponse.json({users}, {status: 200})
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({error: error.message}, {status: 200})
    } finally {
        await prisma?.$disconnect()
    }
}