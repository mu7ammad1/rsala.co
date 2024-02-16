// url : http://localhost:3000/api/posts/slug
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const user = await db.user.findUnique({
      where: {
        username: id,
      },
      include: {
        receivedMessages: true,
        sentMessages: true,
      },
    });
    if (!user) {
      return NextResponse.json(
        { message: "user NOT FOUND", error },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: "user GET ERROR0000", error },
      { status: 500 }
    );
  }
};
// ارسال الرسالة
export const POST = async (request) => {
  try {
    const body = await request.json();
    const { followerId, followingId } = body;

    const follow = await db.follow.create({
      data: {
        followerId,
        followingId,
      },
    });

    return NextResponse.json(follow);
  } catch (error) {
    return NextResponse.json({ message: "POST ERROR", error }, { status: 500 });
  }
};

// // هنا حذف الحساب فقط
// export const DELETE = async (request, { params }) => {
//   try {
//     const { id } = params;

//     // حذف المستخدم بشكل مباشر
//     await db.user.delete({
//       where: {
//         username: id,
//       },
//     });

//     // إرجاع استجابة بنجاح
//     return NextResponse.json({ message: "User deleted successfully" });
//   } catch (error) {
//     // تجاهل الخطأ الناتج من عدم وجود رسائل مرتبطة
//     return NextResponse.json({ message: "User deleted Erorr" });
//   }
// };
