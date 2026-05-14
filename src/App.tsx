import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import ElectricalPanels from "./pages/services/ElectricalPanels.tsx";
import ElectricalRepairs from "./pages/services/ElectricalRepairs.tsx";
import EmergencyService from "./pages/services/EmergencyService.tsx";
import CircuitBreakers from "./pages/services/CircuitBreakers.tsx";
import LightingWiring from "./pages/services/LightingWiring.tsx";
import SmokeDetectors from "./pages/services/SmokeDetectors.tsx";
import EvCharger from "./pages/services/EvCharger.tsx";
import SmartHome from "./pages/services/SmartHome.tsx";

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
          <Route path="/services/electrical-panels" element={<ElectricalPanels />} />
          <Route path="/services/electrical-repairs" element={<ElectricalRepairs />} />
          <Route path="/services/emergency-service" element={<EmergencyService />} />
          <Route path="/services/circuit-breakers" element={<CircuitBreakers />} />
          <Route path="/services/lighting-wiring" element={<LightingWiring />} />
          <Route path="/services/smoke-co-detectors" element={<SmokeDetectors />} />
          <Route path="/services/ev-charger-installation" element={<EvCharger />} />
          <Route path="/services/smart-home-electrical" element={<SmartHome />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
