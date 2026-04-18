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
import { GiftPromoSection } from "@/components/gift-promo-section"
import { AgelessPreviewPromo } from "@/components/ageless-preview-promo"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Above the fold */}
      <div id="home">
        <HeroSection />
      </div>

     

      <section id="ageless-preview" className="border-y border-[#8e24aa]/15 bg-[#f3e5f5]/45">
        <div className="container mx-auto px-4 pt-8 sm:pt-10">
          
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#512da8]">
            Preview Your Results In Seconds!
          </h2>
        </div>
        <AgelessPreviewPromo variant="card" className="pt-5 sm:pt-6" />
      </section>

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
      <GiftPromoSection />
      {/* FAQ */}
      <FaqSection />

      {/* Final CTA */}
      <FinalCtaSection />

      {/* Mobile sticky CTA */}
      <StickyMobileCta />
    </main>
  )
}
 