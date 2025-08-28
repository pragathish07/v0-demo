"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ExternalLink } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Shelly Johnson",
      location: "Maryland",
      treatment: "Cryotherapy",
      rating: 5,
      review: "Received a cryotherapy and saw results just from the first treatment. The employees are very knowledgeable, friendly, and professional. They gave their recommendations for treatment and I couldn't be happier. Can't wait to see the results when all of my treatments have been completed.",
      date: "6 months ago",
    },
    {
      id: 2,
      name: "Tina Tran Steinhardt",
      location: "Maryland", 
      treatment: "Personalized Body Sculpting",
      rating: 5,
      review: "I had an incredible experience with Maryland Body Sculpting. From the moment I walked in, Karen made me feel so comfortable and at ease. She genuinely cares about finding treatments that are tailored to your personal goals, and she took the time to explain everything thoroughly.",
      date: "10 months ago",
    },
    {
      id: 3,
      name: "Katie H.",
      location: "Maryland",
      treatment: "Thermalift Treatments",
      rating: 5,
      review: "I have been for the equivalent of 2 thermalift treatments. My face is so much less aged in appearance. I also lost the dreaded under neck fat. Each time the staff is friendly and the atmosphere is clean. Not a stuffy or intimidating environment at all.",
      date: "1 year ago",
    },
    {
      id: 4,
      name: "Bemi Ukuedojor",
      location: "Maryland",
      treatment: "Body Sculpting",
      rating: 5,
      review: "Happy to have found this place. Treatment rooms and waiting area is clean and comfortable. The services provided were explained well. The equipment is top notch. I'm looking forward to seeing my results.",
      date: "9 months ago",
    },
    {
      id: 5,
      name: "Kim Rodriguez",
      location: "Maryland",
      treatment: "Consultation & Treatment",
      rating: 5,
      review: "Knowledge, friendly, welcoming and spent a fair amount of time with me. I'm looking forward to future services. Sharfie and Nina were wonderful.",
      date: "4 months ago",
    },
    {
      id: 6,
      name: "Lyn Goeke",
      location: "Maryland",
      treatment: "Facial Treatment",
      rating: 5,
      review: "This was such an enjoyable experience. The staff is enthusiastic and truly supportive as soon as you arrive for your appointment. I cannot complement enough. 5 stars + My facial was flawless. I am looking forward to returning soon.",
      date: "6 months ago",
    }
  ]

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-8 sm:py-16 px-3 sm:px-4 bg-background" id="testimonials">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            What Our <span className="text-primary">Happy Clients</span> Say
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Don't just take our word for it. Read real reviews from clients who have transformed their bodies with our
            treatments.
          </p>

          {/* Google Rating Display */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="flex items-center gap-2">
              <img src="/google-color.png" alt="Google" className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-xl sm:text-2xl font-bold text-foreground">4.8</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">
              <span className="font-semibold text-foreground">200+</span> Google Reviews
            </div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="border-2 border-primary/10 shadow-lg">
            <CardContent className="p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
                {/* Client Info */}
                <div className="text-center space-y-3 sm:space-y-4">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto border-4 border-primary/20">
                    <AvatarFallback className="text-base sm:text-lg font-semibold bg-primary/10 text-primary">
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <Badge variant="secondary" className="mt-2 text-xs sm:text-sm">
                      {testimonials[currentTestimonial].treatment}
                    </Badge>
                  </div>
                </div>

                {/* Review Content */}
                <div className="md:col-span-2 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                    ))}
                    <span className="text-xs sm:text-sm text-muted-foreground ml-2">{testimonials[currentTestimonial].date}</span>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 text-primary/20" />
                    <p className="text-foreground leading-relaxed pl-4 sm:pl-6 italic text-sm sm:text-base">
                      {testimonials[currentTestimonial].review}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Badge variant="outline" className="text-xs">
                      Verified Google Review
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation Dots - Smaller on mobile */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-1 h-1 sm:w-1 sm:h-1 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={testimonial.id} className="border border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs sm:text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-4">{testimonial.review}</p>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.treatment}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg bg-transparent w-full sm:w-auto">
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="sm:inline">Read More Reviews on Google</span>
            <span className="sm:hidden">More Reviews</span>
          </Button>
        </div>
      </div>
    </section>
  )
}