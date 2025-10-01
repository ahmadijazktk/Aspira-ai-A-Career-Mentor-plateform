import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Bot,
  CheckSquare,
  BookOpen,
  FileText,
  Trophy,
  Users,
  Target,
  BarChart3,
  Sparkles,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    description: "Overview & Progress",
  },
  {
    title: "AI Mentor Chat",
    url: "/chat",
    icon: Bot,
    description: "Get personalized guidance",
  },
  {
    title: "Tasks & Milestones",
    url: "/tasks",
    icon: CheckSquare,
    description: "Track your journey",
  },
  {
    title: "Suggested Courses",
    url: "/courses",
    icon: BookOpen,
    description: "Learn new skills",
  },
  {
    title: "Resume Builder",
    url: "/resume",
    icon: FileText,
    description: "Build your CV",
  },
  {
    title: "Success Stories",
    url: "/success-stories",
    icon: Trophy,
    description: "Get inspired",
  },
  {
    title: "Community",
    url: "/community",
    icon: Users,
    description: "Connect with peers",
  },
];

const additionalItems = [
  {
    title: "Goals",
    url: "/goals",
    icon: Target,
    description: "Set & track goals",
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    description: "View your progress",
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;
  const { user, logout } = useAuth();

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"}>
      <SidebarContent className="bg-card border-r">
        {/* Logo Section */}
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          {!collapsed && <span className="font-semibold text-lg">Aspira.ai</span>}
        </div>

        <Separator />

        {/* User Profile */}
        {user && !collapsed && (
          <div className="p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
          </div>
        )}

        {user && !collapsed && <Separator />}

        {/* Main Navigation */}
        <SidebarGroup className="flex-1">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-accent"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Additional Tools */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-2">
              {additionalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-accent"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Button */}
        {user && (
          <>
            <Separator />
            <div className="p-2">
              <SidebarMenuButton asChild>
                <button
                  onClick={logout}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-foreground hover:bg-accent transition-colors"
                >
                  <LogOut className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="text-sm">Logout</span>}
                </button>
              </SidebarMenuButton>
            </div>
          </>
        )}
      </SidebarContent>
    </Sidebar>
  );
}