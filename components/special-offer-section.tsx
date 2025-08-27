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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-blue-600/25"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/25 rounded-full blur-lg animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <Card className="glass-effect neon-glow border-2 border-purple-300/30 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-tr-full"></div>

                <div className="space-y-6 relative z-10">
                  <div className="flex justify-center lg:justify-start">
                    <Badge
                      variant="destructive"
                      className="text-sm px-6 py-3 animate-pulse bg-gradient-to-r from-red-500 to-pink-500 border-0 shadow-lg"
                    >
                      <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                      LIMITED TIME OFFER
                      <Clock className="w-4 h-4 ml-2" />
                    </Badge>
                  </div>

                  <div className="space-y-4 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text animate-pulse">Mommy Tummy Rescue</h2>
                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      SLIM DOWN & SCULPT YOUR BODY WITHOUT SURGERY!
                    </p>
                    <div className="flex justify-center lg:justify-start items-center gap-2 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                      <span className="ml-2 text-lg font-semibold text-gray-700">5.0 (2,847 Reviews)</span>
                    </div>
                  </div>

                  <div className="grid gap-4 my-8">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 text-left p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 transform hover:scale-105 transition-all duration-300 shadow-md"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-800 font-semibold text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative p-8 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300/50 shadow-xl">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-lg font-bold shadow-lg">
                        SAVE 70%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-6 my-4">
                      <div className="text-5xl md:text-6xl font-bold gradient-text animate-pulse">$249</div>
                      <div className="text-left">
                        <div className="text-3xl text-gray-500 line-through">$849</div>
                        <div className="text-lg text-gray-600 font-semibold">Usually</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-xl border-2 border-red-300/50">
                    <p className="text-xl font-bold text-red-600 animate-pulse">🔥 Only 3 Spots Left This Month! 🔥</p>
                  </div>

                  <Button
                    size="lg"
                    asChild
                    className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full transform hover:scale-110 transition-all duration-300 shadow-2xl border-0 rounded-2xl font-bold"
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
