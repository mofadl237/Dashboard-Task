import { Boxes, Home, ReceiptText, ShoppingCart, Truck, Users, Wallet} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
  
  {
    title: "Accounts",
    url: "/",
    icon: Wallet,
  },
  {
    title: "Customers",
    url: "/Customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    url: "/Suppliers",
    icon: Truck,
  },
  {
    title: "Inventory",
    url: "/Inventory",
    icon: Boxes	,
  },
  {
    title: "Sales",
    url: "/Sales",
    icon: ReceiptText,
  },
  {
    title: "Purchases",
    url: "/Purchases",
    icon: ShoppingCart,
  },
]

export function SideBar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard Vegetables</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}