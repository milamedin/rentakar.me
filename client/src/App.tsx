import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

// Home is eager — it's the LCP page, lazy-loading would cost a network roundtrip.
import Home from "./pages/Home";

// All other routes are lazy-loaded so the initial bundle stays small.
// Each route becomes its own chunk that loads on navigation.
const NotFound = lazy(() => import("@/pages/NotFound"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const TransferPage = lazy(() => import("./pages/TransferPage"));
const RentACarMontenegro = lazy(() => import("./pages/RentACarMontenegro"));
const RentalServicePage = lazy(() => import("./pages/RentalServicePage"));
const BlogIndex = lazy(() => import("@/pages/BlogIndex"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const TourIndex = lazy(() => import("@/pages/TourIndex"));
const TourPage = lazy(() => import("@/pages/TourPage"));

function RouteFallback() {
  // Minimal cream-colored placeholder — keeps layout from flashing white.
  return <div className="min-h-screen bg-cream" aria-busy="true" />;
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
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
    </Suspense>
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
