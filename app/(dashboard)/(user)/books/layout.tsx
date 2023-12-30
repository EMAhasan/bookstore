import SideBar from '@/components/sidebar/sidebar'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className="flex  h-full">
    
    <div className="flex h-full w-56  flex-col  ">
      <SideBar />
    </div>
    <main className="  w-full ">
      {children}
    </main>
  </div>
  )
}

export default layout