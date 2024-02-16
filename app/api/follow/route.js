import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { followerId, followingId } = body;

    // إنشاء علاقة المتابعة الجديدة في قاعدة البيانات
    const newFollow = await db.follow.create({
      data: {
        followerId,
        followingId,
      },
    });

    return NextResponse.json(newFollow);
  } catch (error) {
    return NextResponse.json({ message: "POST error", error }, { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
    const body = await request.json();
    const { followerId, followingId } = body;

    // قم بالتحقق مما إذا كان هناك علاقة بين المتابع والمتبع
    const existingFollow = await db.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });

    if (!existingFollow) {
      return NextResponse.json(
        { message: "لا يوجد علاقة لحذفها" },
        { status: 404 }
      );
    }

    // قم بحذف العلاقة من قاعدة البيانات
    await db.follow.delete({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });

    return NextResponse.json({ message: "تم إلغاء المتابعة بنجاح" });
  } catch (error) {
    return NextResponse.json(
      { message: "حدث خطأ أثناء عملية الحذف", error },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
    try {
      // استرجاع بيانات المتابعة للمستخدم الحالي
      const { userId } = request.params; // افتراضياً، ستحتاج لتوفير معرف المستخدم الحالي في الطلب
  
      // قم بتنفيذ الاستعلام لاسترداد قائمة المتابعين للمستخدم الحالي من قاعدة البيانات
      const followingList = await db.follow.findMany({
        where: { followerId: userId },
      });
  
      // إعادة القائمة كاستجابة JSON
      return NextResponse.json(followingList);
    } catch (error) {
      // في حالة وجود أي خطأ، يمكنك إرجاع رسالة خطأ وكود الحالة
      return NextResponse.json({ message: "GET error", error }, { status: 500 });
    }
  };
  