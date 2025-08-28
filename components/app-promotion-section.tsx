import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Calendar, TrendingUp, Bell, ExternalLink } from "lucide-react"

export function AppPromotionSection() {
  const appFeatures = [
    {
      icon: Calendar,
      title: "Book appointments 24/7",
      description: "Schedule your treatments anytime, anywhere with our easy-to-use booking system.",
    },
    {
      icon: TrendingUp,
      title: "Track your progress",
      description: "Monitor your transformation journey with before/after photos and measurements.",
    },
    {
      icon: Bell,
      title: "Treatment reminders",
      description: "Never miss an appointment with smart notifications and reminders.",
    },
    {
      icon: Smartphone,
      title: "Exclusive app-only offers",
      description: "Get access to special discounts and promotions available only to app users.",
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-card">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - App Mockups */}
          <div className="relative order-2 lg:order-1">
            <div className="flex justify-center items-center gap-2 sm:gap-4">
              {/* Phone Mockup 1 */}
              <div className="relative">
                <div className="w-40 h-80 sm:w-52 sm:h-[420px] lg:w-64 lg:h-[500px] bg-foreground rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
                    <div className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold">Book Treatment</h3>
                        <Badge variant="secondary" className="text-xs">New</Badge>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="h-8 sm:h-10 lg:h-12 bg-primary/10 rounded-md sm:rounded-lg flex items-center px-2 sm:px-3 lg:px-4">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary mr-2 sm:mr-3" />
                          <span className="text-xs sm:text-sm">Select Date & Time</span>
                        </div>
                        <div className="h-8 sm:h-10 lg:h-12 bg-muted rounded-md sm:rounded-lg flex items-center px-2 sm:px-3 lg:px-4">
                          <span className="text-xs sm:text-sm text-muted-foreground">Choose Treatment</span>
                        </div>
                        <div className="h-8 sm:h-10 lg:h-12 bg-muted rounded-md sm:rounded-lg flex items-center px-2 sm:px-3 lg:px-4">
                          <span className="text-xs sm:text-sm text-muted-foreground">Personal Details</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary text-xs sm:text-sm py-2 sm:py-3">Book Now</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 2 - Slightly offset */}
              <div className="relative -ml-4 sm:-ml-6 lg:-ml-8 mt-4 sm:mt-6 lg:mt-8">
                <div className="w-40 h-80 sm:w-52 sm:h-[420px] lg:w-64 lg:h-[500px] bg-foreground rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
                    <div className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold">Progress Tracker</h3>
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-accent" />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="h-12 sm:h-16 lg:h-20 bg-accent/10 rounded-md sm:rounded-lg p-2 sm:p-3">
                          <div className="text-xs text-muted-foreground">Inches Lost</div>
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-accent">-4.2"</div>
                        </div>
                        <div className="h-12 sm:h-16 lg:h-20 bg-primary/10 rounded-md sm:rounded-lg p-2 sm:p-3">
                          <div className="text-xs text-muted-foreground">Sessions Completed</div>
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">3/6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - App Benefits */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Take Control with Our <span className="text-primary">Mobile App</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                Manage your transformation journey with our comprehensive mobile app designed for your convenience.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              {appFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="pt-2 sm:pt-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <a
                  href="https://mdbodysculpting.repeatmd.app/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">Get Access</span>
                  <span className="xs:hidden">Get App</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
