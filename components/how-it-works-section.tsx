"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ClipboardList, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HowItWorksSection() {
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

  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Book Your Consultation",
      description:
        "We start by learning about your body goals, the areas bothering you most, and what kind of result you want to achieve.",
    },
    {
      number: "2",
      icon: ClipboardList,
      title: "Get Your Customized Plan",
      description:
        "We recommend the best treatment approach based on your body, your concerns, and your timeline.",
    },
    {
      number: "3",
      icon: Sparkles,
      title: "Start Your Sculpting Sessions",
      description:
        "Your treatment plan is designed to help tighten, contour, smooth, and support your confidence over time.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            How It <span className="text-[#8e24aa]">Works</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className={`relative text-center space-y-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step number */}
                <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24">
                  <div className="absolute inset-0 bg-[#8e24aa]/10 rounded-full"></div>
                  <div className="absolute inset-2 bg-[#8e24aa] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl sm:text-3xl font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Connecting line (hidden on mobile, between cards on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 sm:top-12 left-[60%] w-[80%] h-0.5 bg-[#8e24aa]/20"></div>
                )}

                <div className="mx-auto w-12 h-12 bg-[#f9f5fc] rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-[#8e24aa]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="text-sm sm:text-lg px-8 py-5 sm:py-6 bg-[#8e24aa] hover:bg-[#7b1fa2] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/JGVHU342FL56EYSJ5AT2QBRW"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start With a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
