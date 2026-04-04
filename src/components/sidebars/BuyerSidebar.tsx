import { LayoutDashboard, ShoppingBag, ShoppingCart, RotateCcw, BarChart3, Key, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Leaf } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Portfolio", url: "/buyer", icon: LayoutDashboard },
  { title: "Marketplace", url: "/buyer/marketplace", icon: ShoppingBag },
  { title: "Orders", url: "/buyer/orders", icon: ShoppingCart },
  { title: "Retirements", url: "/buyer/retirements", icon: RotateCcw },
  { title: "Reports", url: "/buyer/reports", icon: BarChart3 },
  { title: "API Keys", url: "/buyer/api-keys", icon: Key },
  { title: "Settings", url: "/buyer/settings", icon: Settings },
];

export function BuyerSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex items-center justify-center shrink-0">
            <Leaf className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && <span className="font-bold text-sidebar-foreground">CarbonStack</span>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Buyer Console</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end={item.url === "/buyer"} className="hover:bg-sidebar-accent/50" activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
