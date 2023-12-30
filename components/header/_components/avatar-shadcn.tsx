'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import getFirstLetters from '@/lib/helper'
import { signOut, useSession } from 'next-auth/react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

type Props = {}


  
  
const AvatarMenu = (props: Props) => {
    
      
    const {data:session, status } = useSession();
  return (
    <DropdownMenu>
  <DropdownMenuTrigger  className='rounded-full hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
  {status === "authenticated"&&<Avatar >
              <AvatarImage src={session.user.image!} />
              <AvatarFallback>{getFirstLetters(session.user.name!)}</AvatarFallback>
            </Avatar>}
 </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel    >My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem><button onClick={()=>signOut()}> sign out </button></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>



    
   
  )
}


export default AvatarMenu