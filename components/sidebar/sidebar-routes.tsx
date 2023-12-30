"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";


import { navigation, navigation2 } from "@/lib/helper";
import { SidebarRouteItem } from "./sidebar-route-item";





export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.includes("/admin");

  const routes = isAdminPage ? navigation2 : navigation;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarRouteItem
          key={route.href}
        //   icon={route.icon}
          label={route.name}
          href={route.href}
        />
      ))}
    </div>
  )
}