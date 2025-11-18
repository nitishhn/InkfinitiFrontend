



import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import TshirtCustomizer from "./pages/TshirtCustomizer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import LoginScreen from "./pages/Login";
import { AuthProvider } from "../src/pages/Authcontext"; // Import AuthProvider
import ProtectedRoute from "../src/pages/ProtectedRoute"; // Import ProtectedRoute
import SignupScreen from "./pages/Signup";
import AdminDashboard from "./pages/Admindashboard";
import ProductDetails from "./pages/Productdetails";
import TShirtShowcase from "./pages/Tshirtshowcase";
import TShirtPreview from "./pages/Tshirtpreview";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider> {/* Wrap with AuthProvider */}
          <BrowserRouter>
            <MainContent />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/tshirtshowcase" element={<TShirtShowcase/>}/>
        {/* <Route path="/tshirtPreview" element={<TShirtPreview/>}/> */}
    
        <Route 
          path="/customise" 
          element={
            <ProtectedRoute requiredRole="admin">
              <TshirtCustomizer />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default App;


