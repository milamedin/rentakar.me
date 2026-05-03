/*
 * Design: Montenegrin Trust & Warmth
 * Home page: Full storytelling flow - Hero → Trust → How → Locations → Services → Blog → FAQ → CTA → Footer
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import LocationsSection from "@/components/LocationsSection";
import RentalServicesSection from "@/components/RentalServicesSection";
import ToursPreview from "@/components/ToursPreview";
import BlogPreview from "@/components/BlogPreview";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <HowItWorks />
        <LocationsSection />
        <RentalServicesSection />
        <ToursPreview />
        <BlogPreview />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
