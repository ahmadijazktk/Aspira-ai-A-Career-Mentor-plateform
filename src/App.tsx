import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { AIChatPage } from "./pages/AIChatPage";
import { TasksPage } from "./pages/TasksPage";
import { CoursesPage } from "./pages/CoursesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<AIChatPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/success-stories" element={<div className="p-6"><h1 className="text-2xl font-bold">Success Stories - Coming Soon</h1></div>} />
            <Route path="/community" element={<div className="p-6"><h1 className="text-2xl font-bold">Community - Coming Soon</h1></div>} />
            <Route path="/goals" element={<div className="p-6"><h1 className="text-2xl font-bold">Goals - Coming Soon</h1></div>} />
            <Route path="/analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics - Coming Soon</h1></div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
