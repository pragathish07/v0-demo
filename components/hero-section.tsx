"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Award, Play } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && imageRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        imageRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="px-3 sm:px-6 relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 pt-20 lg:pt-24"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up z-30 relative">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-fade-in-down delay-300">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                #1 Body Sculpting Clinic
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight animate-fade-in-up delay-500">
                Transform Your Body{" "}
                <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text animate-gradient">
                  Without Surgery
                </span>
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up delay-700">
                Advanced body sculpting treatments that reduce fat, tighten skin, and contour your silhouette. Trusted
                by 500+ clients with guaranteed results.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 animate-fade-in-up delay-900">
              <Badge
                variant="secondary"
                className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300 bg-primary/10 text-primary border-primary/20"
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                FDA-Approved
              </Badge>
              <Badge
                variant="secondary"
                className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300 bg-accent/10 text-accent border-accent/20"
              >
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Licensed Professionals
              </Badge>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 animate-fade-in-up delay-1100">
              <Button
                size="lg"
                asChild
                className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
              >
                <a
                  href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="xs:inline">Book Consultation</span>
                  <span className="xs:hidden">Book Consultation</span>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Link href="#testimonials" scroll={true}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  View Real Results
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in-up delay-1300">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary animate-bounce"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> from 500+ clients
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right delay-600 z-30 mt-8 lg:mt-0" ref={imageRef}>
            {/* Main hero image */}
            <div className="relative z-40 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <img
                src="/elegant-spa-woman.png"
                alt="Beautiful woman in spa setting"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-white rounded-xl p-2 sm:p-4 shadow-lg animate-float z-50 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">500+ Transformations</span>
              </div>
            </div>

            <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white rounded-xl p-2 sm:p-4 shadow-lg animate-float delay-1000 z-50 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary animate-pulse">98%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>

            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg animate-fade-in delay-1500 z-50 hover:bg-white transition-colors duration-300">
              <div className="flex gap-1 sm:gap-2">
                <div className="w-8 h-10 sm:w-12 sm:h-16 bg-muted rounded overflow-hidden transform hover:scale-110 transition-transform duration-300">
                  <img src="/woman-before-sculpting.png" alt="Before" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-10 sm:w-12 sm:h-16 bg-muted rounded overflow-hidden transform hover:scale-110 transition-transform duration-300">
                  <img src="/woman-after-contouring.png" alt="After" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-xs text-center mt-1 font-medium">Real Results</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1300 { animation-delay: 1.3s; }
        .delay-1500 { animation-delay: 1.5s; }
      `}</style>
    </section>
  )
}
