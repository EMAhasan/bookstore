import { options } from "@/lib/auth";
import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";


const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
//export default authHandler;
export  {authHandler as GET,authHandler as POST};