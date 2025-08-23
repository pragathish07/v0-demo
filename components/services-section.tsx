"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Snowflake, Sparkles, Target, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [headerVisible, setHeaderVisible] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            
            if (element.classList.contains('header-section')) {
              setHeaderVisible(true)
            } else if (element.classList.contains('button-section')) {
              setButtonVisible(true)
            } else {
              // Handle service cards
              const cardIndex = parseInt(element.dataset.index || '0')
              setVisibleCards(prev => new Set([...prev, cardIndex]))
            }
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    )

    // Observe header
    const header = sectionRef.current?.querySelector('.header-section')
    if (header) observer.observe(header)

    // Observe cards
    const cards = sectionRef.current?.querySelectorAll('.service-card')
    cards?.forEach((card) => observer.observe(card))

    // Observe button
    const button = sectionRef.current?.querySelector('.button-section')
    if (button) observer.observe(button)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Snowflake,
      title: "Localized Cryotherapy",
      description:
        "Freeze away fat cells permanently with advanced cooling technology. Non-invasive treatment with lasting results.",
      features: ["Permanent fat reduction", "No downtime required", "FDA-approved technology"],
    },
    {
      icon: Sparkles,
      title: "Skin Tightening & Anti-Aging",
      description:
        "Restore youthful, firm skin using radiofrequency and ultrasound treatments for natural-looking results.",
      features: ["Collagen stimulation", "Wrinkle reduction", "Skin firming"],
    },
    {
      icon: Target,
      title: "Fat Reduction & Body Contouring",
      description:
        "Sculpt your ideal silhouette with targeted fat reduction treatments that reshape your body naturally.",
      features: ["Targeted fat loss", "Body reshaping", "Immediate results"],
    },
    {
      icon: Zap,
      title: "HIFU + Liposonix Fat Reduction",
      description:
        "Advanced ultrasound technology that destroys fat cells while tightening skin for comprehensive body transformation.",
      features: ["Dual-action treatment", "Deep tissue targeting", "Long-lasting results"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-transparent" id="services">
      <div className="container mx-auto px-4">
        <div 
          className={`header-section text-center space-y-4 mb-12 transition-all duration-800 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Advanced{" "}
            <span className="text-primary animate-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Body Sculpting
            </span>{" "}
            Treatments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your body with our cutting-edge, non-surgical treatments designed to deliver real, lasting
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isVisible = visibleCards.has(index)
            
            return (
              <Card
                key={index}
                data-index={index}
                className={`service-card group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-border/50 hover:border-primary/30 hover:scale-105 cursor-pointer bg-card/80 backdrop-blur-sm ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                  transitionDuration: '800ms'
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div 
          className={`button-section text-center transition-all duration-800 ease-out ${
            buttonVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg bg-transparent hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 group backdrop-blur-sm border-primary/20"
          >
            Learn More About Our Treatments
            <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
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