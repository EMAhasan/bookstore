import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions, User, getServerSession } from "next-auth";
import prisma from "./prisma";



declare module "next-auth" {
  interface Session{
    user:User &{
      isAdmin:Boolean;
      id:string;
      userType:string;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT{
    isAdmin:Boolean;
    id:string;
    userType:string;
  }
}



export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
    session:{
      strategy:"jwt",

    },
    providers: [
      GitHubProvider({
       clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    
    ],
    callbacks:{
      async session({token,session})
      {
        if(token){
          session.user.isAdmin=token.isAdmin
          session.user.id=token.id
          session.user.userType=token.userType
        }
       

        return session

      },
      async jwt({token})
      {
    
        const userInDb = await prisma.user.findUnique({
          where: {
            email: token.email!,
          },
        });
      
        token.isAdmin = userInDb?.isAdmin! ;
            token.id=userInDb?.name!
            token.userType=userInDb?.userType!

        return token
        
      }
    }
    
   
  };

  export const getAuthServer=()=>getServerSession(options)