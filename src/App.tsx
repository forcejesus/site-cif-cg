
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ActualitesPage from "./pages/ActualitesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import EvenementsPage from "./pages/EvenementsPage";
import EventDetailPage from "./pages/EventDetailPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/actualites/:id" element={<ArticleDetailPage />} />
          <Route path="/evenements" element={<EvenementsPage />} />
          <Route path="/evenements/:id" element={<EventDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
