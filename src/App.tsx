import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
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
import Analytics from "./pages/dashboard/Analytics";
import Vault from "./pages/dashboard/Vault";
import Settings from "./pages/dashboard/Settings";
import Admin from "./pages/dashboard/Admin";
import Reports from "./pages/dashboard/Reports";
import Support from "./pages/dashboard/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
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
            <Route path="analytics" element={<Analytics />} />
            <Route path="vault" element={<Vault />} />
            <Route path="settings" element={<Settings />} />
            <Route path="admin" element={<Admin />} />
            <Route path="reports" element={<Reports />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
