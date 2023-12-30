'use client'
import * as React from 'react'
import { Logo } from './logo'
import UserLinks from './user-link'

import { navigation, navigation2 } from '@/lib/helper'
import SearchInput from '@/components/search-input'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import RoutesNav from './navbar-routes'




const WebNavbar = () => {
    const {data:session, status } = useSession();
    const pathname = usePathname();
  
    const isAdminPage = pathname?.startsWith("/admin");
    const isOwnerPage = pathname?.includes("/owner");
    const isUserPage = pathname?.includes("/user");
    const isSearchPage = pathname === "/search";

    //isTeacher(userId)
    // export const isTeacher = (userId?: string | null) => {
    //     return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
    //   }

    const isAdmin=true
    const isOwner=true
    const isUser=true
    const isGaste=true
    return(
        <nav className="bg-gray-50">
            <div className={"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full hidden md:flex md:flex-col "}>
                <div className={"w-full  flex flex-row items-center justify-between"}>
                    {/*logo  */}
                    <Logo/>
                    {/*search  */}
                    <SearchInput/>
                    {/* login and more ... */}
                    <UserLinks/>
                </div>
                
                <div className={"w-full my-2  flex flex-row items-center justify-center mx-auto "}>
                    {isAdminPage? <RoutesNav items={navigation2}/>:<RoutesNav items={navigation}/>}
                </div>
            </div>

        </nav>
    )
}


export default WebNavbar