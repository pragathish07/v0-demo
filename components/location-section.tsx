import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Car, Navigation } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Visit <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
         With locations in Ellicott City and inside RockWell Fitness in Severna Park, our state-of-the-art facilities provide a luxurious and comfortable setting for your transformation journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Google Maps for both locations */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Ellicott City */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Ellicott City</h3>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden border-2 border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.8!2d-76.8!3d39.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81f4c4c4c4c4c%3A0x4c4c4c4c4c4c4c4c!2s3525%20Ellicott%20Mills%20Dr%2C%20Ellicott%20City%2C%20MD%2021043!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ellicott City Location Map"
                />
              </div>
              <Button size="lg" asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=3525+Ellicott+Mills+Dr,+Ellicott+City,+MD+21043,+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>

            {/* Severna Park / Annapolis */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Severna Park / Annapolis</h3>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden border-2 border-border/50">
                <iframe
                  src="https://www.google.com/maps?q=RockWell%20Fitness%2C%20551D%20Baltimore%20Annapolis%20Blvd%2C%20Severna%20Park%2C%20MD%2021146&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Severna Park / Annapolis Location Map"
                />
              </div>
              <Button size="lg" asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=RockWell+Fitness%2C+551D+Baltimore+Annapolis+Blvd%2C+Severna+Park%2C+MD+21146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}