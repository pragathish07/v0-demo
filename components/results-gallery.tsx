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
      treatment: "Cryotherapy + Skin Tightening",
      age: "32",
      sessions: "3 sessions",
      results: "Lost 4 inches, improved skin texture",
    },
    {
      id: 2,
      beforeImage: "/placeholder-fkszl.png",
      afterImage: "/woman-tummy-transformation.png",
      treatment: "HIFU Fat Reduction",
      age: "28",
      sessions: "2 sessions",
      results: "Reduced belly fat, tighter skin",
    },
    {
      id: 3,
      beforeImage: "/placeholder-oz0wg.png",
      afterImage: "/woman-after-contouring.png",
      treatment: "Full Body Contouring",
      age: "35",
      sessions: "4 sessions",
      results: "Complete body transformation",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-card relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center space-y-4 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real Clients,{" "}
            <span className="text-accent animate-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the incredible transformations our clients have achieved with our advanced body sculpting treatments.
          </p>
        </div>

        {/* Results Slider */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Before/After Images */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group/image">
                      <img
                        src={results[currentSlide].beforeImage || "/placeholder.svg"}
                        alt="Before treatment"
                        className="w-full aspect-[3/4] object-cover rounded-lg transition-all duration-500 group-hover/image:scale-105 group-hover/image:shadow-lg"
                        key={`before-${currentSlide}`}
                      />
                      <Badge className="absolute top-2 left-2 bg-muted text-muted-foreground transition-all duration-300 group-hover/image:scale-110">
                        BEFORE
                      </Badge>
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-all duration-300 rounded-lg"></div>
                    </div>
                    <div className="relative group/image">
                      <img
                        src={results[currentSlide].afterImage || "/placeholder.svg"}
                        alt="After treatment"
                        className="w-full aspect-[3/4] object-cover rounded-lg transition-all duration-500 group-hover/image:scale-105 group-hover/image:shadow-lg"
                        key={`after-${currentSlide}`}
                      />
                      <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground transition-all duration-300 group-hover/image:scale-110">
                        AFTER
                      </Badge>
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-all duration-300 rounded-lg"></div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevSlide}
                      className="w-10 h-10 p-0 bg-transparent hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 group/btn"
                    >
                      <ChevronLeft className="w-4 h-4 group-hover/btn:-translate-x-0.5 transition-transform duration-300" />
                    </Button>
                    <div className="flex items-center gap-2">
                      {results.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                            index === currentSlide ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextSlide}
                      className="w-10 h-10 p-0 bg-transparent hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 group/btn"
                    >
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>

                {/* Results Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      Amazing Transformation
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border hover:border-primary/30 transition-colors duration-300 group/item">
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                          Treatment:
                        </span>
                        <span className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-300">
                          {results[currentSlide].treatment}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border hover:border-primary/30 transition-colors duration-300 group/item">
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                          Age:
                        </span>
                        <span className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-300">
                          {results[currentSlide].age} years old
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border hover:border-primary/30 transition-colors duration-300 group/item">
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                          Sessions:
                        </span>
                        <span className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-300">
                          {results[currentSlide].sessions}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 group/item">
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                          Results:
                        </span>
                        <span className="font-medium text-accent group-hover/item:scale-105 transition-transform duration-300">
                          {results[currentSlide].results}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 group/testimonial">
                    <p className="text-sm text-foreground italic group-hover/testimonial:text-primary transition-colors duration-300">
                      "I never thought I could achieve these results without surgery. The team was professional, and the
                      treatments were comfortable. I'm so happy with my transformation!"
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 group-hover/testimonial:text-foreground transition-colors duration-300">
                      - Verified Client
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
            <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            See Your Transformation
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
