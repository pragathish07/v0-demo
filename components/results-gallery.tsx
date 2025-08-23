"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"

export function ResultsGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real Clients, <span className="text-accent">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the incredible transformations our clients have achieved with our advanced body sculpting treatments.
          </p>
        </div>

        {/* Results Slider */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Before/After Images */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <img
                        src={results[currentSlide].beforeImage || "/placeholder.svg"}
                        alt="Before treatment"
                        className="w-full aspect-[3/4] object-cover rounded-lg"
                      />
                      <Badge className="absolute top-2 left-2 bg-muted text-muted-foreground">BEFORE</Badge>
                    </div>
                    <div className="relative">
                      <img
                        src={results[currentSlide].afterImage || "/placeholder.svg"}
                        alt="After treatment"
                        className="w-full aspect-[3/4] object-cover rounded-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">AFTER</Badge>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm" onClick={prevSlide} className="w-10 h-10 p-0 bg-transparent">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div className="flex items-center gap-2">
                      {results.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentSlide ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <Button variant="outline" size="sm" onClick={nextSlide} className="w-10 h-10 p-0 bg-transparent">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Results Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Amazing Transformation</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Treatment:</span>
                        <span className="font-medium text-foreground">{results[currentSlide].treatment}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Age:</span>
                        <span className="font-medium text-foreground">{results[currentSlide].age} years old</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Sessions:</span>
                        <span className="font-medium text-foreground">{results[currentSlide].sessions}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">Results:</span>
                        <span className="font-medium text-accent">{results[currentSlide].results}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-foreground italic">
                      "I never thought I could achieve these results without surgery. The team was professional, and the
                      treatments were comfortable. I'm so happy with my transformation!"
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">- Verified Client</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-6 text-lg bg-primary hover:bg-primary/90">
            <Eye className="w-5 h-5 mr-2" />
            See Your Transformation
          </Button>
        </div>
      </div>
    </section>
  )
}
