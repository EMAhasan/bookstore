import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SideBar from './sidebar'
import { Menu } from 'lucide-react'

  
type Props = {}

const MobileSidebar = (props: Props) => {
  return (



  <Sheet>
  <SheetTrigger className="flex md:hidden pr-4 hover:opacity-75 transition">
    

       <Menu/> 
    
    
    </SheetTrigger>
  <SheetContent side="left" className="p-0 bg-white">
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
    <SideBar/>
  </SheetContent>
</Sheet>

  )
}

export default MobileSidebar