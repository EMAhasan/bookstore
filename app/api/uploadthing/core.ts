
import { getAuthServer } from "@/lib/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";


 
const f = createUploadthing();
 
const handleAuth = async() => {
    const session = await getAuthServer();
    console.log('111',session);
   const userId=session?.user.id
  const isAuthorized = session?.user.isAdmin

  if (!userId || !isAuthorized) throw new Error("Unauthorized");
  return { userId };
}

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;