
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import DriverPartnership from "./pages/DriverPartnership";
import DownloadApps from "./pages/DownloadApps";
import Contact from "./pages/Contact";
import DeliveryBooking from "./pages/DeliveryBooking";
import TaxiBooking from "./pages/TaxiBooking";
import CustomerRegistration from "./pages/CustomerRegistration";
import AgentRegistration from "./pages/AgentRegistration";
import LandingPage from "./pages/LandingPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/driver-partnership" element={<DriverPartnership />} />
          <Route path="/download-apps" element={<DownloadApps />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery-booking" element={<DeliveryBooking />} />
          <Route path="/taxi-booking" element={<TaxiBooking />} />
          <Route path="/customer-registration" element={<CustomerRegistration />} />
          <Route path="/agent-registration" element={<AgentRegistration />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
