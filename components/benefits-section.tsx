"use client"

import { ShieldOff, Clock, Sliders, Target, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function BenefitsSection() {
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

  const benefits = [
    {
      icon: ShieldOff,
      title: "No surgery",
      description: "No cutting, no anesthesia, and no invasive procedures.",
    },
    {
      icon: Clock,
      title: "No downtime",
      description: "You can get back to your normal routine after treatment.",
    },
    {
      icon: Sliders,
      title: "Customized to your body",
      description: "We do not believe in cookie-cutter plans. Your body and your goals are unique.",
    },
    {
      icon: Target,
      title: "Targets the areas that bother you most",
      description:
        "From postpartum belly concerns to loose skin, cellulite, jawline fullness, and stubborn fat pockets.",
    },
    {
      icon: Heart,
      title: "Designed for confidence",
      description:
        "This is not just about inches. It is about feeling better when you get dressed, take pictures, and look in the mirror.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-[#f9f5fc]">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Why Women Choose{" "}
            <span className="text-[#8e24aa]">Non-Surgical Body Sculpting</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#b39ddb]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${index >= 3 ? "sm:col-span-1 lg:col-span-1" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#8e24aa]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#8e24aa]/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-[#8e24aa]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-[#8e24aa] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
