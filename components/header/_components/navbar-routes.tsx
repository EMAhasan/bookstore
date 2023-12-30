'use client'
import React from 'react'
import RouteNavItem from './navbar-route-item'


interface Item{ name: string, href: string, current: boolean }
type Props = {
    items:Item[]
}

const RoutesNav = ({items}: Props) => {
    

  return (
    <div className={"px-10 "}>
                    <nav>
                        <ul className={"flex  items-center space-x-12 capitalize text-sm"}>
                        {items.map((item) => (
                            <RouteNavItem key={item.name} label={item.name} href={item.href}/>
                        ))}
                        </ul>
                    </nav>
                </div>
  )
}

export default RoutesNav