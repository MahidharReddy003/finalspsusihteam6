import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "./utils/index.js";
import { 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Building2, 
  BarChart3,
  User,
  Bell,
  Settings,
  LogOut
} from "lucide-react";
import { useAuth } from "./src/AuthContext.jsx";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: BarChart3,
  },
  {
    title: "My Profile",
    url: createPageUrl("Profile"),
    icon: User,
  },
  {
    title: "Browse Internships",
    url: createPageUrl("Internships"),
    icon: Briefcase,
  },
  {
    title: "Recommendations",
    url: createPageUrl("Recommendations"),
    icon: TrendingUp,
  },
  {
    title: "My Applications",
    url: createPageUrl("Applications"),
    icon: Users,
  },
  {
    title: "Company Portal",
    url: createPageUrl("CompanyPortal"),
    icon: Building2,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-slate-100">
        <Sidebar className="border-r border-slate-200 bg-white shadow-lg">
          <SidebarHeader className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg">MCA Internship</h2>
                <p className="text-xs text-slate-500 font-medium">PM Scheme Portal</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
                Main Menu
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 rounded-lg ${
                          location.pathname === item.url ? 'bg-blue-50 text-blue-700 shadow-sm' : 'text-slate-600'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-2.5">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-8">
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
                Quick Stats
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-3 py-2 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-700">Active Internships</p>
                      <p className="text-2xl font-bold text-blue-600">0</p>
                    </div>
                    <Briefcase className="w-8 h-8 text-blue-600 opacity-60" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-700">Applications</p>
                      <p className="text-2xl font-bold text-emerald-600">0</p>
                    </div>
                    <Users className="w-8 h-8 text-emerald-600 opacity-60" />
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-slate-200 p-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 text-sm truncate">Student</p>
                <p className="text-xs text-slate-500 truncate">MCA Candidate</p>
              </div>
                             <div className="flex gap-1">
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="text-slate-400 hover:text-slate-600"
                   onClick={() => navigate('/settings')}
                 >
                   <Settings className="w-4 h-4" />
                 </Button>
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="text-slate-400 hover:text-red-600"
                   onClick={handleLogout}
                 >
                   <LogOut className="w-4 h-4" />
                 </Button>
               </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          {/* Header with mobile trigger */}
          <header className="bg-white border-b border-slate-200 px-6 py-4 md:hidden shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200" />
              <div className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h1 className="text-lg font-bold text-slate-900">MCA Internship Portal</h1>
              </div>
                             <div className="ml-auto flex items-center gap-2">
                 <Button 
                   variant="ghost" 
                   size="icon" 
                   className="text-slate-400"
                   onClick={() => {
                     alert('Notifications feature coming soon!');
                     // Here you would typically open notifications panel
                   }}
                 >
                   <Bell className="w-5 h-5" />
                 </Button>
               </div>
            </div>
          </header>

          {/* Main content area */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}