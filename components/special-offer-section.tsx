"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, Star, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function SpecialOfferSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const improvements = [
    "Loose or stretched-looking abdominal skin",
    "Stubborn lower belly fullness",
    "Weakened-looking abdominal tone",
    "Overall tummy contour",
    "Confidence in fitted clothes",
  ]

  const idealFor = [
    "Want visible improvement without surgery",
    "Want a customized plan instead of random treatments",
    "Are ready to invest in themselves",
    "Want support from a team that understands postpartum body changes",
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 relative overflow-hidden bg-[#f9f5fc]">
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#b39ddb]/40 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#8e24aa]/20 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="border-2 border-[#b39ddb]/60 shadow-2xl">
            <CardContent className="p-6 sm:p-8 md:p-10 relative overflow-hidden space-y-8">
              {/* Badge */}
              <div className="flex justify-center">
                <Badge className="text-sm px-6 py-3 bg-[#8e24aa] text-white border-0 shadow-md">
                  <Sparkles className="w-4 h-4 mr-2" />
                  OUR SIGNATURE TREATMENT
                  <Star className="w-4 h-4 ml-2" />
                </Badge>
              </div>

              {/* Title */}
              <div className="space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#512da8]">
                  Mommy Tummy Rescue
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A customized non-surgical body sculpting plan designed to help improve the look of postpartum belly fullness, loose skin, and poor abdominal tone.
                </p>
                <p className="text-sm sm:text-base text-[#8e24aa] font-medium">
                  This is one of our most popular solutions for women who feel like their stomach never fully bounced back after pregnancy.
                </p>
              </div>

              {/* What it helps improve */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 text-center sm:text-left">
                  This treatment plan may help improve:
                </h3>
                <div className="grid gap-3">
                  {improvements.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-[#f3e5f5] border border-[#b39ddb]/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-[#8e24aa] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for */}
              <div className="bg-white rounded-2xl p-6 border border-[#b39ddb]/20">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#8e24aa]" />
                  Ideal for women who:
                </h3>
                <div className="grid gap-3">
                  {idealFor.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-[#8e24aa]/10 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#8e24aa]" />
                      </div>
                      <span className="text-muted-foreground text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  asChild
                  className="text-base sm:text-xl px-8 sm:px-12 py-5 sm:py-6 bg-[#8e24aa] hover:bg-[#512da8] text-white w-full sm:w-auto transform hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl font-bold"
                >
                  <a
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/ZSETUUD2WUGVRI2SWCGIBZIH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Sparkles className="w-5 h-5" />
                    Book My Mommy Tummy Consultation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
