import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, MessageCircle, Sparkles, Star } from "lucide-react"

export function SpecialOfferSection() {
  const benefits = [
    "Body Sculpting and Shaping",
    "Reduction of Inches and Fat Deposits",
    "Firming of Loose and Saggy Skin",
    "Contour and Define Your Silhouette",
    "Immediate and Long-Term Results",
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-[#f9f5fc]">
      {/* Subtle floating accents */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#b39ddb]/40 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#8e24aa]/20 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <Card className="border-2 border-[#b39ddb]/60 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 md:p-10 relative overflow-hidden space-y-6">
                
                {/* Badge */}
                <div className="flex justify-center lg:justify-start">
                  <Badge
                    className="text-sm px-6 py-3 bg-[#8e24aa] text-white border-0 shadow-md"
                  >
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    LIMITED TIME OFFER
                    <Clock className="w-4 h-4 ml-2" />
                  </Badge>
                </div>

                {/* Title */}
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#512da8]">
                    Mommy Tummy Rescue
                  </h2>
                  <p className="text-xl md:text-2xl font-bold text-[#8e24aa]">
                    SLIM DOWN & SCULPT YOUR BODY WITHOUT SURGERY!
                  </p>
                  <div className="flex justify-center lg:justify-start items-center gap-2 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-2 text-lg font-semibold text-gray-700">5.0 (2,00+ Reviews)</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid gap-4 my-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-left p-4 rounded-xl bg-[#f3e5f5] border border-[#b39ddb] transform hover:scale-105 transition-all duration-300 shadow-sm"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center shadow-md">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-800 font-semibold text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="relative p-8 rounded-2xl bg-[#f3e5f5] border-2 border-[#b39ddb] shadow-xl">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#8e24aa] text-white px-4 py-2 text-lg font-bold shadow-md">
                      SAVE 70%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center gap-6 my-4">
                    <div className="text-5xl md:text-6xl font-bold text-[#512da8]">
                      $249
                    </div>
                    <div className="text-left">
                      <div className="text-3xl text-gray-500 line-through">$849</div>
                      <div className="text-lg text-gray-600 font-semibold">Usually</div>
                    </div>
                  </div>
                </div>

                {/* Urgency */}
                <div className="bg-[#fce4ec] p-4 rounded-xl border-2 border-[#f48fb1]">
                  <p className="text-xl font-bold text-[#8e24aa] animate-pulse">
                    🔥 Only 3 Spots Left This Month! 🔥
                  </p>
                </div>

                {/* Button */}
                <Button
                  size="lg"
                  asChild
                  className="text-xl px-12 py-6 bg-[#8e24aa] hover:bg-[#512da8] text-white w-full transform hover:scale-110 transition-all duration-300 shadow-2xl rounded-2xl font-bold"
                >
                  <a
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6 animate-bounce" />
                    Book an Appointment Now
                    <Sparkles className="w-6 h-6 animate-spin" />
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground text-center lg:text-left">
                  *Offer valid for new clients only. Cannot be combined with other offers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
