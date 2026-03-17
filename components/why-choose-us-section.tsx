"use client"

import { Users, MessageSquare, HeartHandshake, MapPin, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhyChooseUsSection() {
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

  const reasons = [
    {
      icon: Users,
      title: "Personalized treatment plans",
      description:
        "We recommend what makes sense for your body instead of pushing a generic package.",
    },
    {
      icon: MessageSquare,
      title: "Honest guidance",
      description:
        "We are clear about what may work, what may take time, and what kind of plan is realistic for your goals.",
    },
    {
      icon: HeartHandshake,
      title: "Supportive experience",
      description:
        "We want you to feel comfortable, educated, and cared for throughout the process.",
    },
    {
      icon: MapPin,
      title: "Trusted local business",
      description:
        "We proudly serve women from Ellicott City, Severna Park, and surrounding Maryland communities.",
    },
    {
      icon: TrendingUp,
      title: "Results-focused approach",
      description:
        "Everything we do is centered around helping you feel more confident in your body.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#8e24aa]/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Why Choose{" "}
            <span className="text-[#8e24aa]">Maryland Body Sculpting</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className={`flex gap-4 sm:gap-6 p-5 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#b39ddb]/20 hover:shadow-lg hover:border-[#8e24aa]/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#8e24aa]/10 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#8e24aa]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
