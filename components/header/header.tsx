import React from 'react'


import WebNavbar from './_components/web-navbar'
import MobileNavbar from './_components/mobile-navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
    {/* web navbar */}
  
   <WebNavbar/>
    {/* mobile navbar */}
   <MobileNavbar/>
</header>
  )
}

export default Header