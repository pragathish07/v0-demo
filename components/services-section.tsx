import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Snowflake, Sparkles, Target, Zap } from "lucide-react"

export function ServicesSection() {
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Advanced <span className="text-primary">Body Sculpting</span> Treatments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your body with our cutting-edge, non-surgical treatments designed to deliver real, lasting
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg bg-transparent">
            Learn More About Our Treatments
          </Button>
        </div>
      </div>
    </section>
  )
}
