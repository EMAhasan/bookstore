
import { NextRequest, NextResponse } from "next/server";


import prisma from "@/lib/prisma";

import { getAuthServer } from "@/lib/auth";


// GET SINGLE PRODUCT
export const GET = async () => {
   
  
    try {
      const books = await prisma.book.findMany();
  
      return new NextResponse(JSON.stringify(books), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  };
export async function POST(
  req: Request,
) {
  try {
    const session = await getAuthServer();
    console.log('111',session);
   const userId=session?.user.id
    const { title } = await req.json();
    const author=""
    const isbn="ss"
    if(session?.user.isAdmin)
    {
        try {
            const course = await prisma.book.create({
                data: {
                  userId,
                  title,
                  author,
                  isbn,
                }
              });
              console.log('111uu',session?.user.isAdmin);
              return NextResponse.json(course);

           
            
        } catch (error) {
            console.log(error);
            return new NextResponse(
              JSON.stringify({ message: "Something went wrong!" }),
              { status: 500 }
            );
            
            
        }
    }
    if(session?.user){
      console.log('222',session?.user.isAdmin);
        try {
            return new NextResponse("Unauthorized", { status: 401 });
            
        } catch (error) {
            console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!!!" }),
        { status: 500 }
      );
            
        }

    }

  

  
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "You are not allowed!" }), {
        status: 403,
      });
  }
}

