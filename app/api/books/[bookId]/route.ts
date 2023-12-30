
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthServer } from "@/lib/auth";



// export async function DELETE(
//   req: Request,
//   { params }: { params: { courseId: string } }
// ) {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     const course = await prisma.course.findUnique({
//       where: {
//         id: params.courseId,
//         userId: userId,
//       },
 
//     });

//     if (!course) {
//       return new NextResponse("Not found", { status: 404 });
//     }

//     for (const chapter of course.chapters) {
//       if (chapter.muxData?.assetId) {
//         await Video.Assets.del(chapter.muxData.assetId);
//       }
//     }

//     const deletedCourse = await prisma.course.delete({
//       where: {
//         id: params.courseId,
//       },
//     });

//     return NextResponse.json(deletedCourse);
//   } catch (error) {
//     console.log("[COURSE_ID_DELETE]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }

export async function PATCH(
  req: Request,
  { params }: { params: { bookId: string } }
) {
  try {
    const session = await getAuthServer();
    console.log('111',session);
   const userId=session?.user.id
    const { bookId } = params;
    const values = await req.json();
    console.log("values :",values,userId)

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const book = await prisma.book.update({
      where: {
        id: bookId,
        userId
      },
      data: {
        ...values,
      }
    });

    return NextResponse.json(book);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}