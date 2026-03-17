"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"

export function ResultsGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const results = [
    {
      id: 1,
      beforeImage: "/woman-before-sculpting.png",
      afterImage: "/placeholder-lezl3.png",
      treatment: "Abdomen Contouring",
      concern: "Postpartum belly improvement",
    },
    {
      id: 2,
      beforeImage: "/placeholder-fkszl.png",
      afterImage: "/woman-tummy-transformation.png",
      treatment: "Skin Tightening",
      concern: "Cellulite smoothing",
    },
    {
      id: 3,
      beforeImage: "/placeholder-oz0wg.png",
      afterImage: "/woman-after-contouring.png",
      treatment: "Body Contouring",
      concern: "Stubborn fat reduction",
    },
  ]

  const concerns = [
    "Abdomen contouring",
    "Postpartum belly improvement",
    "Skin tightening",
    "Cellulite smoothing",
    "Chin and jawline sculpting",
    "Stubborn fat reduction",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length)
  }

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-card relative overflow-hidden" id="before-afters">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center space-y-4 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Real Clients. Real Progress.{" "}
            <span className="text-[#8e24aa]">Real Confidence.</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe your results should look beautiful, natural, and realistic.
          </p>

          {/* Concern Tags */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {concerns.map((concern, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-[#f3e5f5] text-[#8e24aa] border border-[#b39ddb]/30 text-xs sm:text-sm px-3 py-1"
              >
                {concern}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Slider */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group">
            <CardContent className="p-4 sm:p-8">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Before/After Images */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative group/image">
                      <img
                        src={results[currentSlide].beforeImage || "/placeholder.svg"}
                        alt="Before treatment"
                        className="w-full aspect-[3/4] object-cover rounded-lg transition-all duration-500 group-hover/image:scale-105 group-hover/image:shadow-lg"
                        key={`before-${currentSlide}`}
                      />
                      <Badge className="absolute top-2 left-2 bg-muted text-muted-foreground">
                        BEFORE
                      </Badge>
                    </div>
                    <div className="relative group/image">
                      <img
                        src={results[currentSlide].afterImage || "/placeholder.svg"}
                        alt="After treatment"
                        className="w-full aspect-[3/4] object-cover rounded-lg transition-all duration-500 group-hover/image:scale-105 group-hover/image:shadow-lg"
                        key={`after-${currentSlide}`}
                      />
                      <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                        AFTER
                      </Badge>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevSlide}
                      className="w-10 h-10 p-0 bg-transparent hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div className="flex items-center gap-2">
                      {results.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextSlide}
                      className="w-10 h-10 p-0 bg-transparent hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Results Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {results[currentSlide].treatment}
                    </h3>
                    <Badge variant="secondary" className="bg-[#f3e5f5] text-[#8e24aa]">
                      {results[currentSlide].concern}
                    </Badge>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      Results vary based on the individual, the treatment plan, and consistency. A consultation helps us determine what is realistic for your body and goals.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Before & Afters
          </Button>
        </div>
      </div>
    </section>
  )
}
