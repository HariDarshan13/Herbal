import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// User Module
import UserRegister from "./pages/user/Register";
import UserLogin from "./pages/user/Login";
import UserProfile from "./pages/user/Profile";
import UserBookmarks from "./pages/user/Bookmarks";
import SubmitRemedy from "./pages/user/SubmitRemedy";

// Remedy Module
import RemedyListing from "./pages/remedies/Listing";
import RemedyDetail from "./pages/remedies/Detail";



// Feedback Module
import Feedback from "./pages/feedback/Feedback";
import Contact from "./pages/feedback/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* User Module Routes */}
              <Route path="/user/register" element={<UserRegister />} />
              <Route path="/user/login" element={<UserLogin />} />
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/user/bookmarks" element={<UserBookmarks />} />
              <Route path="/user/submit-remedy" element={<SubmitRemedy />} />
              
              {/* Remedy Module Routes */}
              <Route path="/remedies" element={<RemedyListing />} />
              <Route path="/remedies/:id" element={<RemedyDetail />} />
              
         
              
              {/* Feedback Module Routes */}
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
