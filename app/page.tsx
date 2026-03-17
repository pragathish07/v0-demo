import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { WhoItsForSection } from "@/components/who-its-for-section"
import { SpecialOfferSection } from "@/components/special-offer-section"
import { ResultsGallery } from "@/components/results-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Above the fold */}
      <div id="home">
        <HeroSection />
      </div>

      {/* High on the page — emotional connection & qualification */}
      <ProblemSection />
      <WhoItsForSection />

      {/* Signature offer */}
      <SpecialOfferSection />

      {/* Social proof */}
      {/* <ResultsGallery /> */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Process & benefits */}
      <HowItWorksSection />
      <BenefitsSection />

      {/* Trust & differentiation */}
      <WhyChooseUsSection />

      {/* FAQ */}
      <FaqSection />

      {/* Final CTA */}
      <FinalCtaSection />

      {/* Mobile sticky CTA */}
      <StickyMobileCta />
    </main>
  )
}
 