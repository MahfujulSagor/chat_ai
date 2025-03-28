"use client";

import * as React from "react";
import {
  Truck,
  Settings2,
  LayoutDashboard,
  Database,
  Tag,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { AISwitcher } from "@/components/ai-switcher";
import { useAppwrite } from "@/context/appwrite-context";

export function AppSidebar({ ...props }) {
  const {session} = useAppwrite();

  const data = {
    user: {
      name: session?.name || "User",
      email: session?.email || "user@gmail.com",
      avatar: session?.avatar,
    },
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard,
      },
      {
        title: "Products",
        url: "#",
        icon: Database,
      },
      {
        title: "Categories",
        url: "#",
        icon: Tag,
      },
      {
        title: "Orders",
        url: "#",
        icon: Truck,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AISwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
