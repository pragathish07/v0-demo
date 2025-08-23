import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Calendar, TrendingUp, Bell, Download } from "lucide-react"

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
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - App Mockups */}
          <div className="relative">
            <div className="flex justify-center items-center gap-4">
              {/* Phone Mockup 1 */}
              <div className="relative">
                <div className="w-64 h-[500px] bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Book Treatment</h3>
                        <Badge variant="secondary">New</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 bg-primary/10 rounded-lg flex items-center px-4">
                          <Calendar className="w-5 h-5 text-primary mr-3" />
                          <span className="text-sm">Select Date & Time</span>
                        </div>
                        <div className="h-12 bg-muted rounded-lg flex items-center px-4">
                          <span className="text-sm text-muted-foreground">Choose Treatment</span>
                        </div>
                        <div className="h-12 bg-muted rounded-lg flex items-center px-4">
                          <span className="text-sm text-muted-foreground">Personal Details</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary">Book Now</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 2 - Slightly offset */}
              <div className="relative -ml-8 mt-8">
                <div className="w-64 h-[500px] bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Progress Tracker</h3>
                        <TrendingUp className="w-5 h-5 text-accent" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-20 bg-accent/10 rounded-lg p-3">
                          <div className="text-xs text-muted-foreground">Inches Lost</div>
                          <div className="text-2xl font-bold text-accent">-4.2"</div>
                        </div>
                        <div className="h-20 bg-primary/10 rounded-lg p-3">
                          <div className="text-xs text-muted-foreground">Sessions Completed</div>
                          <div className="text-2xl font-bold text-primary">3/6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - App Benefits */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Take Control with Our <span className="text-primary">Mobile App</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Manage your transformation journey with our comprehensive mobile app designed for your convenience.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {appFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="flex items-center gap-3 bg-foreground text-background hover:bg-foreground/90"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-3 bg-transparent">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
