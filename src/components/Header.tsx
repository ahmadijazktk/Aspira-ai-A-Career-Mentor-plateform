import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Bell, User, Settings, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Header() {
  const [language, setLanguage] = useState("English");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const languages = [
    { code: "en", name: "English" },
    { code: "ur", name: "اردو" },
    { code: "ar", name: "العربية" },
    { code: "zh", name: "中文" },
  ];

  const notifications = [
    {
      id: 1,
      title: "New course available",
      message: "Advanced React Patterns course is now live!",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      title: "Task completed",
      message: "You've completed 'Build a Todo App' task",
      time: "5 hours ago",
      read: false
    },
    {
      id: 3,
      title: "Achievement unlocked",
      message: "Congratulations! You've earned the JavaScript Expert badge",
      time: "1 day ago",
      read: true
    }
  ];

  const handleSignIn = () => {
    if (!isLoggedIn) {
      navigate("/");
      toast({
        title: "Please sign up or sign in",
        description: "Create an account to access all features",
      });
    }
  };

  const handleSignUp = () => {
    if (!isLoggedIn) {
      navigate("/");
      toast({
        title: "Welcome!",
        description: "Sign up to start your AI career mentoring journey",
      });
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    navigate("/");
    toast({
      title: "Signed out successfully",
      description: "Come back soon to continue your learning journey!",
    });
  };

  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block">Career Mentor</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.name)}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu open={showNotifications} onOpenChange={setShowNotifications}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-gradient-primary text-xs">
                {notifications.filter(n => !n.read).length}
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-card border border-border">
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Notifications</h4>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowNotifications(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-border last:border-b-0 hover:bg-accent cursor-pointer ${
                    !notification.read ? 'bg-accent/50' : ''
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <h5 className="font-medium text-sm">{notification.title}</h5>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border">
              <Button variant="ghost" size="sm" className="w-full">
                View all notifications
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleSignIn}>
              Sign In
            </Button>
            <Button className="btn-primary" size="sm" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}