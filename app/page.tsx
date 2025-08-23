import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SpecialOfferSection } from "@/components/special-offer-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsGallery } from "@/components/results-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AppPromotionSection } from "@/components/app-promotion-section"
import { BookingSection } from "@/components/booking-section"
import { FaqSection } from "@/components/faq-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <SpecialOfferSection />
      <div id="services">
        <ServicesSection />
      </div>
      <ResultsGallery />
      <TestimonialsSection />
      <div id="membership">
        <AppPromotionSection />
      </div>
      <div id="payment">
        <BookingSection />
      </div>
      <div id="about">
        <FaqSection />
      </div>
      <LocationSection />
      <Footer />
    </main>
  )
}
