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
          {/* Left Side - Single Phone Mockup */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-[500px] sm:w-80 sm:h-[600px] lg:w-96 lg:h-[700px] rounded-[2.5rem] p-2 shadow-2xl border-4 border-black" style={{ backgroundColor: '#8e24aa' }}>
                <div className="w-full h-full rounded-[2rem] overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#8e24aa' }}>
                  {/* Logo Container */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <img 
                      src="/logo.webp" 
                      alt="MD Body Sculpting Logo" 
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
                    />
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
                  <span className="xs:inline">Get Access</span>
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