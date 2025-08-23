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
      name: "Sarah Johnson",
      age: 34,
      location: "Miami, FL",
      treatment: "Cryotherapy + Skin Tightening",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
      review:
        "I was skeptical about non-surgical treatments, but the results speak for themselves! After just 3 sessions, I lost 4 inches around my waist and my skin feels so much tighter. The staff was incredibly professional and made me feel comfortable throughout the entire process. I would definitely recommend this clinic to anyone looking for real results without surgery.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      age: 29,
      location: "Los Angeles, CA",
      treatment: "HIFU Fat Reduction",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=MR",
      review:
        "As a busy mom of two, I didn't have time for lengthy recovery periods. This clinic offered exactly what I needed - effective treatments with no downtime. The HIFU treatment helped me get rid of stubborn belly fat that wouldn't budge despite diet and exercise. I'm thrilled with my results and feel confident in my body again!",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Jennifer Chen",
      age: 42,
      location: "New York, NY",
      treatment: "Full Body Contouring",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=JC",
      review:
        "After having three children, I thought I'd never get my pre-baby body back. The comprehensive body contouring program here changed everything. Not only did I lose inches, but my skin is firmer and I feel like myself again. The team created a personalized plan that worked perfectly for my lifestyle and goals.",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "Amanda Thompson",
      age: 38,
      location: "Chicago, IL",
      treatment: "Localized Cryotherapy",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=AT",
      review:
        "I had stubborn fat pockets that just wouldn't respond to diet and exercise. The cryotherapy treatments were comfortable and I started seeing results after the first session. The best part? No surgery, no scars, and I was back to my normal routine immediately. This clinic exceeded all my expectations!",
      date: "1 week ago",
    },
  ]

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our <span className="text-primary">Happy Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Read real reviews from clients who have transformed their bodies with our
            treatments.
          </p>

          {/* Google Rating Display */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <img src="/placeholder.svg?height=32&width=32&text=G" alt="Google" className="w-8 h-8" />
              <span className="text-2xl font-bold text-foreground">4.9</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">500+</span> Google Reviews
            </div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-primary/10 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Client Info */}
                <div className="text-center space-y-4">
                  <Avatar className="w-20 h-20 mx-auto border-4 border-primary/20">
                    <AvatarImage src={testimonials[currentTestimonial].avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-muted-foreground">
                      Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].location}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {testimonials[currentTestimonial].treatment}
                    </Badge>
                  </div>
                </div>

                {/* Review Content */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">{testimonials[currentTestimonial].date}</span>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-foreground leading-relaxed pl-6 italic">
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

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={testimonial.id} className="border border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{testimonial.review}</p>
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
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg bg-transparent">
            <ExternalLink className="w-5 h-5 mr-2" />
            Read More Reviews on Google
          </Button>
        </div>
      </div>
    </section>
  )
}
