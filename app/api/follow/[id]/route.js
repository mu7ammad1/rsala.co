import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
      // استرجاع بيانات المتابعة للمستخدم الحالي
      const { id } = params; // افتراضياً، ستحتاج لتوفير معرف المستخدم الحالي في الطلب
  
      // قم بتنفيذ الاستعلام لاسترداد قائمة المتابعين للمستخدم الحالي من قاعدة البيانات
      const followingList = await db.follow.findMany({
        where: { followerId: id },
      });
  
      // إعادة القائمة كاستجابة JSON
      return NextResponse.json(followingList);
    } catch (error) {
      // في حالة وجود أي خطأ، يمكنك إرجاع رسالة خطأ وكود الحالة
      return NextResponse.json({ message: "GET error", error }, { status: 500 });
    }
  };
  