import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, MessageCircle } from "lucide-react"

export function SpecialOfferSection() {
  const benefits = [
    "Body Sculpting and Shaping",
    "Reduction of Inches and Fat Deposits",
    "Firming of Loose and Saggy Skin",
    "Contour and Define Your Silhouette",
    "Immediate and Long-Term Results",
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-2 border-accent/20 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              {/* Urgency Badge */}
              <Badge variant="destructive" className="text-sm px-4 py-2 animate-pulse">
                <Clock className="w-4 h-4 mr-2" />
                LIMITED TIME OFFER
              </Badge>

              {/* Headline */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Mommy Tummy Rescue</h2>
                <p className="text-xl md:text-2xl text-accent font-semibold">
                  SLIM DOWN & SCULPT YOUR BODY WITHOUT SURGERY!
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-4 my-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-center gap-4 my-8">
                <div className="text-4xl md:text-6xl font-bold text-accent">$249</div>
                <div className="text-left">
                  <div className="text-2xl text-muted-foreground line-through">$849</div>
                  <div className="text-sm text-muted-foreground">Usually</div>
                </div>
              </div>

              {/* Urgency Text */}
              <p className="text-lg font-semibold text-destructive">Limited Spots Available This Month</p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground w-full md:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message Us To Claim This Offer
              </Button>

              {/* Fine Print */}
              <p className="text-sm text-muted-foreground mt-4">
                *Offer valid for new clients only. Cannot be combined with other offers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
