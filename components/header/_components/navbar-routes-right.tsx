'use client'
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import CartIcon from './cart-icon';

const NavbarRoutesRight = () => {
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
    

  return (
    <>
        <div className="flex gap-x-2 ml-auto">
        {!isAdminPage && !isOwnerPage ?(<CartIcon/>):null}

        {isOwnerPage || isAdminPage ? (
            <Link href="/">
            <Button size="sm" variant="ghost">
                <LogOut className="h-4 w-4 mr-2" />
                Exit
            </Button>
            </Link>
        ) : isAdmin && status==="authenticated" ? (
            <Link href="/admin">
            <Button size="sm" variant="ghost">
                Admin mode
            </Button>
            </Link>
        ) : null}
        
    
        </div>
  </>
  )
}

export default NavbarRoutesRight