import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Car, Navigation } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Visit Our <span className="text-primary">Premium Clinic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in Ellicott City, Maryland, our state-of-the-art facility offers a luxurious and comfortable
            environment for your transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Google Map */}
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden border-2 border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.8!2d-76.8!3d39.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81f4c4c4c4c4c%3A0x4c4c4c4c4c4c4c4c!2s3525%20Ellicott%20Mills%20Dr%2C%20Ellicott%20City%2C%20MD%2021043!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MD Body Sculpting Clinic Location"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact & Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground">
                        3525 Ellicott Mills Dr
                        <br />
                        Ellicott City, MD 21043, USA
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground">
                        <a href="tel:+14105058595" className="hover:text-primary transition-colors">
                          (410) 505-8595
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Business Hours</div>
                      <div className="text-muted-foreground space-y-1">
                        <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                        <div>Saturday: 9:00 AM - 4:00 PM</div>
                        <div>Sunday: Closed</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Car className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Parking</div>
                      <div className="text-muted-foreground">
                        Free parking available in our private lot
                        <br />
                        Convenient location with easy access
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
