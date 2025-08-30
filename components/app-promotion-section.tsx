"use client"

import { Button } from "@/components/ui/button"
import { Star, Gift, Calendar, Diamond, ExternalLink } from "lucide-react"

export function AppPromotionSection() {
  const appFeatures = [
    {
      icon: Star,
      title: "Free reward for new members!",
      description: "Get instant $75 credit on your first service.",
    },
    {
      icon: Gift,
      title: "Earn rewards for visits",
      description: "Points for every appointment and service.",
    },
    {
      icon: Calendar,
      title: "Free birthday gifts",
      description: "Special surprises on your special day.",
    },
    {
      icon: Diamond,
      title: "Member-only offers",
      description: "Exclusive deals and early access to new services.",
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-card">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - Phone Mockup */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div
                className="w-64 h-[500px] sm:w-80 sm:h-[600px] lg:w-96 lg:h-[700px] 
                           rounded-[2.5rem] p-2 shadow-2xl border-4 border-black"
                style={{ backgroundColor: "#8e24aa" }}
              >
                <div
                  className="w-full h-full rounded-[2rem] overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: "#8e24aa" }}
                >
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

          {/* Right Side - Popup Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Heading */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Join Our New App &{" "}
                <span className="text-[#8e24aa]">Get $75 Off Any Service!</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                Here’s what you get:
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              {appFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#b39ddb]/30 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#8e24aa]" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Button
                size="lg"
                asChild
                className="bg-[#8e24aa] hover:bg-[#7b1fa2] text-white 
                           px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold 
                           rounded-xl shadow-lg hover:shadow-xl 
                           transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <a
                  href="https://mdbodysculpting.repeatmd.app/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Get Instant Access</span>
                </a>
              </Button>
              <p className="text-center sm:text-left text-gray-500 text-sm mt-2">
                Free to download • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
