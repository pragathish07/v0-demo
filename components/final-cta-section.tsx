"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function FinalCtaSection() {
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

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 relative overflow-hidden bg-[#8e24aa]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Feel Better in Your Body?
          </h2>

          <div className="space-y-3 text-lg sm:text-xl text-white/80">
            <p>You do not need to keep guessing.</p>
            <p>You do not need to feel stuck.</p>
            <p className="text-white font-medium">
              And you do not need surgery to start making changes.
            </p>
          </div>

          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
            Let us help you create a plan for the areas that matter most to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              asChild
              className="text-sm sm:text-lg px-8 py-5 sm:py-6 bg-white text-[#8e24aa] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-bold"
            >
              <a
                href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/JGVHU342FL56EYSJ5AT2QBRW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Book My Free Consultation
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="text-sm sm:text-lg px-8 py-5 sm:py-6 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <a
                href="sms:+14105058595"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Text Us a Question
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
