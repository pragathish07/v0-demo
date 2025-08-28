import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SpecialOfferSection } from "@/components/special-offer-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsGallery } from "@/components/results-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutUsSection } from "@/components/about-us-section"
import { AppPromotionSection } from "@/components/app-promotion-section"
import { GiftPromoSection } from "@/components/gift-promo-section"
import { BookAppointmentSection } from "@/components/book-appointment-section"
import { FaqSection } from "@/components/faq-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { AppPopup } from "@/components/app-popup"

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
      {/* <ResultsGallery /> */}
      <TestimonialsSection />
      <div id="about">
        <AboutUsSection />
      </div>
      <div id="membership">
        <AppPromotionSection />
      </div>
      <GiftPromoSection />
      <div id="payment">
        <BookAppointmentSection />
      </div>
      <FaqSection />
      <LocationSection />
      <Footer />
      <AppPopup />
    </main>
  )
}
