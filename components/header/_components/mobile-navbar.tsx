import * as React from 'react'
import { Logo } from './logo'
import SearchInput from '@/components/search-input'

import UserLinks from './user-link'
import MobileSidebar from '@/components/sidebar/mobile-sidebar'

const MobileNavbar = () => {
    return(
        <div className={"w-full md:hidden"}>
        <div className={"py-3 px-6 w-full shadow flex items-center justify-between"}>
                
                
                <div className='flex' >
                {/* menu */}
                 <MobileSidebar/>
                  {/*logo  */}
                <Logo/> 
                </div>
                 <UserLinks/>
        </div>
        <div>
           <SearchInput/>
        </div>
        
        </div>
    )
}


export default MobileNavbar