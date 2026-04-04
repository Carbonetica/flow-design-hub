import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

import DevDashboard from "./pages/developer/DevDashboard";
import DevProjects from "./pages/developer/DevProjects";
import NewProject from "./pages/developer/NewProject";
import ProjectDetail from "./pages/developer/ProjectDetail";
import DevMrv from "./pages/developer/DevMrv";
import DevCredits from "./pages/developer/DevCredits";
import DevDocuments from "./pages/developer/DevDocuments";
import DevApiKeys from "./pages/developer/DevApiKeys";
import DevSettings from "./pages/developer/DevSettings";

import BuyerPortfolio from "./pages/buyer/BuyerPortfolio";
import BuyerMarketplace from "./pages/buyer/BuyerMarketplace";
import BuyerOrders from "./pages/buyer/BuyerOrders";
import BuyerRetirements from "./pages/buyer/BuyerRetirements";
import BuyerReports from "./pages/buyer/BuyerReports";

import VerifierDashboard from "./pages/verifier/VerifierDashboard";
import AuditDetail from "./pages/verifier/AuditDetail";
import VerifierCompleted from "./pages/verifier/VerifierCompleted";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminKyb from "./pages/admin/AdminKyb";
import AdminDisputes from "./pages/admin/AdminDisputes";
import AdminAuditTrail from "./pages/admin/AdminAuditTrail";
import AdminArticle6 from "./pages/admin/AdminArticle6";
import AdminCompliance from "./pages/admin/AdminCompliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Developer */}
            <Route path="/developer" element={<DevDashboard />} />
            <Route path="/developer/projects" element={<DevProjects />} />
            <Route path="/developer/projects/new" element={<NewProject />} />
            <Route path="/developer/projects/:id" element={<ProjectDetail />} />
            <Route path="/developer/mrv" element={<DevMrv />} />
            <Route path="/developer/credits" element={<DevCredits />} />
            <Route path="/developer/documents" element={<DevDocuments />} />
            <Route path="/developer/api-keys" element={<DevApiKeys />} />
            <Route path="/developer/settings" element={<DevSettings />} />

            {/* Buyer */}
            <Route path="/buyer" element={<BuyerPortfolio />} />
            <Route path="/buyer/marketplace" element={<BuyerMarketplace />} />
            <Route path="/buyer/orders" element={<BuyerOrders />} />
            <Route path="/buyer/retirements" element={<BuyerRetirements />} />
            <Route path="/buyer/reports" element={<BuyerReports />} />

            {/* Verifier */}
            <Route path="/verifier" element={<VerifierDashboard />} />
            <Route path="/verifier/audit/:id" element={<AuditDetail />} />
            <Route path="/verifier/completed" element={<VerifierCompleted />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/kyb" element={<AdminKyb />} />
            <Route path="/admin/disputes" element={<AdminDisputes />} />
            <Route path="/admin/audit-trail" element={<AdminAuditTrail />} />
            <Route path="/admin/article6" element={<AdminArticle6 />} />
            <Route path="/admin/compliance" element={<AdminCompliance />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
