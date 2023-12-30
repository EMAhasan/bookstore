"use client";
import { useSession } from "next-auth/react";

import LoginBtn from "./login";

import AvatarMenu from "./avatar-shadcn";
import NavbarRoutesRight from "./navbar-routes-right";

const UserLinks = () => {
   const {data:session, status } = useSession();
 
  return (
    <div className="">
        {status === "authenticated" ? (
            <div className="flex items-center justify-end space-x-2 " >
                
                <NavbarRoutesRight/>
                <AvatarMenu/>
            </div>
        ) : (
          <div className="flex items-center justify-end space-x-2 " >
             <NavbarRoutesRight/>
              <LoginBtn/>
             
            </div>
            
        )}
    </div>
  );
};

export default UserLinks;
