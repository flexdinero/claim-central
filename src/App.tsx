import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Claims from "./pages/dashboard/Claims";
import Messages from "./pages/dashboard/Messages";
import Earnings from "./pages/dashboard/Earnings";
import Firms from "./pages/dashboard/Firms";
import Calendar from "./pages/dashboard/Calendar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="claims" element={<Claims />} />
            <Route path="messages" element={<Messages />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="firms" element={<Firms />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics</h1><p className="text-muted-foreground">Performance insights and reporting.</p></div>} />
            <Route path="vault" element={<div className="p-6"><h1 className="text-2xl font-bold">Vault</h1><p className="text-muted-foreground">Secure document storage.</p></div>} />
            <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-muted-foreground">Configure your account and preferences.</p></div>} />
            <Route path="admin" element={<div className="p-6"><h1 className="text-2xl font-bold">Admin Panel</h1><p className="text-muted-foreground">System administration.</p></div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
