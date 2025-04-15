
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import DeckListPage from "./pages/DeckListPage";
import CardViewPage from "./pages/CardViewPage";
import ModuleListPage from "./pages/ModuleListPage";
import ModuleFormPage from "./pages/ModuleFormPage";
import ModuleStudentsPage from "./pages/ModuleStudentsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/decks" element={<DeckListPage />} />
          <Route path="/decks/:deckId" element={<CardViewPage />} />
          <Route path="/modules" element={<ModuleListPage />} />
          <Route path="/modules/:moduleId" element={<ModuleFormPage />} />
          <Route path="/modules/:moduleId/edit" element={<ModuleFormPage />} />
          <Route path="/modules/:moduleId/students" element={<ModuleStudentsPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
