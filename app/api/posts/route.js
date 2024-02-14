// url : http://localhost:3000/api/posts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {
      content,
      senderId,
      receiverId,
      senderUsernameId,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
    } = body;
    const newMessage = await db.message.create({
      data: {
        content,
        senderId,
        receiverId,
        senderUsernameId,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
      },
    });

    return NextResponse.json(newMessage);
  } catch (error) {
    return NextResponse.json({ message: "POST error", error }, { status: 500 });
  }
};
export const GET = async () => {
  try {
    const Message = await db.user.findMany();

    return NextResponse.json(Message);
  } catch (error) {
    return NextResponse.json({ message: "GET error", error }, { status: 500 });
  }
};
