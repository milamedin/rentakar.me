import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import LocationPage from "./pages/LocationPage";
import TransferPage from "./pages/TransferPage";
import RentACarMontenegro from "./pages/RentACarMontenegro";
import RentalServicePage from "./pages/RentalServicePage";
import BlogIndex from "@/pages/BlogIndex";
import BlogPost from "@/pages/BlogPost";
import TourIndex from "@/pages/TourIndex";
import TourPage from "@/pages/TourPage";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/rent-a-car-montenegro" component={RentACarMontenegro} />
      <Route path="/transfer-aerodrom-crna-gora" component={TransferPage} />
      <Route path="/rent-a-car/:slug" component={LocationPage} />
      {/* Rental service pages */}
      <Route path="/rental/:slug" component={RentalServicePage} />
      {/* Blog */}
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      {/* Tours */}
      <Route path="/ture" component={TourIndex} />
      <Route path="/ture/:slug" component={TourPage} />
      <Route path="/tours" component={TourIndex} />
      <Route path="/tours/:slug" component={TourPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <ScrollToTop />
            <Router />
            <WhatsAppFloat />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
