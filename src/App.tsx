import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Administration from "./pages/Administration";
import GameDev from "./pages/courses/GameDev";
import Web from "./pages/courses/Web";
import AIBigData from "./pages/courses/AIBigData";
import FullStack from "./pages/courses/FullStack";
import Cybersecurity from "./pages/courses/Cybersecurity";
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
          <Route path="/courses" element={<Courses />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/courses/game-dev" element={<GameDev />} />
          <Route path="/courses/web" element={<Web />} />
          <Route path="/courses/ai-bigdata" element={<AIBigData />} />
          <Route path="/courses/fullstack" element={<FullStack />} />
          <Route path="/courses/cybersecurity" element={<Cybersecurity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
