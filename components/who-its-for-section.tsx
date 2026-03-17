"use client"

import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhoItsForSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const concerns = [
    "Postpartum belly fullness or loose skin",
    "Stubborn belly fat that will not budge",
    "Cellulite on thighs or butt",
    "Loose skin after weight loss",
    "Double chin or jawline fullness",
    "Bra bulge, love handles, arms, or back fat",
    "Areas that make you feel less confident in clothes or photos",
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              This Is for You If You Are{" "}
              <span className="text-[#8e24aa]">Struggling With:</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-[#b39ddb]/30">
            <div className="grid gap-4">
              {concerns.map((concern, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-[#f9f5fc] border border-[#b39ddb]/20 transition-all duration-500 hover:shadow-md hover:scale-[1.02] ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-7 h-7 bg-[#8e24aa] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium text-base sm:text-lg">{concern}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#b39ddb]/20 text-center space-y-2">
              <p className="text-muted-foreground text-base sm:text-lg">
                You do not need a one-size-fits-all treatment.
              </p>
              <p className="text-[#8e24aa] font-semibold text-lg sm:text-xl">
                You need the right plan for your body, your goals, and your timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
