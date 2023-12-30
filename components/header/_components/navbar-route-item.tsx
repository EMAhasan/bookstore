'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

type RouteNavItemProps = {
    label: string;
    href: string;
}

const RouteNavItem = (props: RouteNavItemProps) => {
    const pathname = usePathname();
    const router = useRouter();
  
    const isActive =
      (pathname === "/" && props.href === "/") ||
      pathname === props.href ||
      pathname?.startsWith(`${props.href}/`);
  
    const onClick = () => {
      router.push(props.href);
    }
  return (
    <Link
    key={props.label}
    href={props.href}
    className={cn(
        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md px-3 py-2 text-sm font-medium'
    )}
    aria-current={isActive ? 'page' : undefined}
    >
    {props.label}
    </Link>
  )
}

export default RouteNavItem