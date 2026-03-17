"use client"

import { Button } from "@/components/ui/button"
import { Heart, Frown, Dumbbell, Salad, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProblemSection() {
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

  const painPoints = [
    {
      icon: Frown,
      text: "Your stomach has not felt the same since having kids.",
    },
    {
      icon: Dumbbell,
      text: "You lost weight but now you are dealing with loose skin.",
    },
    {
      icon: Salad,
      text: "No matter how healthy you eat or how much you exercise, there are still areas that do not respond.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 relative overflow-hidden bg-[#f9f5fc]">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#b39ddb]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#8e24aa]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e1bee7]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top header with emotional hook */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#b39ddb]/30 shadow-sm mb-6">
              <Heart className="w-4 h-4 text-[#8e24aa] fill-[#8e24aa]" />
              <span className="text-[#8e24aa] font-medium text-sm">We Understand</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              You work hard to take care of{" "}
              <span className="text-[#8e24aa]">everyone else.</span>
            </h2>
            <p className="text-xl sm:text-2xl text-[#8e24aa] font-semibold">
              It is okay to want to feel good in your body too.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left — Pain point cards */}
            <div className="space-y-4 sm:space-y-5">
              {painPoints.map((point, index) => {
                const IconComponent = point.icon
                return (
                  <div
                    key={index}
                    className={`group flex gap-4 sm:gap-5 p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#b39ddb]/20 shadow-sm hover:shadow-lg hover:border-[#8e24aa]/30 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#8e24aa]/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#8e24aa]/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#8e24aa]" />
                    </div>
                    <div className="flex items-center">
                      <p className="text-foreground text-base sm:text-lg leading-relaxed font-medium">
                        {point.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right — Reassurance card */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="relative bg-[#8e24aa] rounded-3xl p-8 sm:p-10 text-white shadow-2xl overflow-hidden">
                {/* Decorative circles inside the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>

                  <div className="space-y-3">
                    <p className="text-xl sm:text-2xl font-bold leading-snug">You are not lazy.</p>
                    <p className="text-xl sm:text-2xl font-bold leading-snug">You are not failing.</p>
                    <p className="text-xl sm:text-2xl font-bold leading-snug text-[#e1bee7]">
                      And you do not need surgery to start seeing improvement.
                    </p>
                  </div>

                  <div className="w-12 h-0.5 bg-white/30 rounded-full"></div>

                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                    At Maryland Body Sculpting, we help women target the areas that bother them most with customized non-surgical body sculpting plans designed to support visible, natural-looking results.
                  </p>

                  <Button
                    size="lg"
                    asChild
                    className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 bg-white text-[#8e24aa] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold rounded-xl w-full sm:w-auto"
                  >
                    <a
                      href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/JGVHU342FL56EYSJ5AT2QBRW"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See If I'm a Candidate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
