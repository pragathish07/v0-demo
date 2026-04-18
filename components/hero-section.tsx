"use client"

import { Button } from "@/components/ui/button"
import { AGELESS_PREVIEW_LABEL, AGELESS_PREVIEW_URL } from "@/lib/ageless-preview"
import { Star, Play, MapPin, Clock, Award, Sparkles, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <>
      <section
        className="px-3 sm:px-6 relative min-h-screen flex items-center overflow-hidden pt-8 lg:pt-8"
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
                  Non-Surgical Body Sculpting
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight animate-fade-in-up delay-500">
                  Non-Surgical Body Sculpting for{" "}
                  <span className="text-primary">
                    Postpartum Bellies, Loose Skin, and Stubborn Fat
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up delay-700">
                  Helping women in Ellicott City and Severna Park tighten loose skin, contour stubborn areas, smooth cellulite, and feel confident in their bodies again — without surgery and with no downtime.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-1100">
                <Button
                  size="lg"
                  asChild
                  className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                >
                  <a
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/JGVHU342FL56EYSJ5AT2QBRW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Book My Free Consultation</span>
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white/90 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <a
                    href={AGELESS_PREVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>{AGELESS_PREVIEW_LABEL}</span>
                  </a>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 sm:pt-4 animate-fade-in-up delay-1300">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">200+</span> 5-star reviews
                </div>
                <span className="hidden sm:inline text-muted-foreground/40">•</span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                  2 Maryland locations
                </div>
                <span className="hidden sm:inline text-muted-foreground/40">•</span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                  No downtime
                </div>
                <span className="hidden sm:inline text-muted-foreground/40">•</span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                  Personalized treatment plans
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right delay-600 z-30 mt-8 lg:mt-0">
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl p-5 sm:p-7 lg:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI Treatment Match
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                    Get matched to your best treatment plan.
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Use our smart quiz to compare options for fat reduction, skin tightening, and post-pregnancy contouring.
                  </p>

                  <div className="mt-5 rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
                    <img
                      src="/before-after-face.jpg"
                      alt="Before and after face treatment preview"
                      className="w-full h-72 sm:h-80 lg:h-[28rem] object-cover"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-primary">See what&apos;s possible before booking</span>
                    <span className="text-muted-foreground">Realistic AI preview</span>
                  </div>

                  <Button asChild size="lg" className="mt-6 w-full bg-primary hover:bg-primary/90 text-white">
                    <a href={AGELESS_PREVIEW_URL} target="_blank" rel="noopener noreferrer">
                      Start the Quiz
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
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
    </>
  )
}