"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Navigation, Sparkles, Star } from "lucide-react"

function LocationsPage() {
const locations = [
    {
        name: "Ellicott City",
        badge: "Main Location",
        address: "3525 Ellicott Mills Dr, Ellicott City, MD 21043",
        phone: "(443) 741-0762",
        bookingUrl:
            "https://app.squareup.com/appointments/book/2eb02510-65db-4773-9466-ebc2bf742d77/93THKJBR99KWV/start",
        hours: [
            { day: "Monday - Friday", time: "10:00 AM - 4:00 PM" },
      { day: "Saturday and Sunday", time: "By Appointments" },
      { day: "Evening & Early Morning", time: "By Appointments" }
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.8!2d-76.8!3d39.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81f4c4c4c4c4c%3A0x4c4c4c4c4c4c4c4c!2s3525%20Ellicott%20Mills%20Dr%2C%20Ellicott%20City%2C%20MD%2021043!5e0!3m2!1sen!2sus!4v1234567890",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=3525+Ellicott+Mills+Dr,+Ellicott+City,+MD+21043,+USA"
    },
    {
        name: "Severna Park",
        badge: "Opening November 7, 2025",
        isNew: true,
        address: "Inside River Reach  Shopping Center 770 Ritchie Highway,Suite W25, Severna Park, MD 21146",
        phone: "(443) 741-0762",
        bookingUrl:
            "https://app.squareup.com/appointments/book/2eb02510-65db-4773-9466-ebc2bf742d77/LW7TDSBXQV87Z/start",
        hours: [
      { day: "Monday - Friday", time: "10:00 AM - 4:00 PM" },
      { day: "Saturday and Sunday", time: "By Appointments" },
      { day: "Evening & Early Morning", time: "By Appointments" }
        ],
    mapEmbed: "https://www.google.com/maps?q=770+Ritchie+Highway,+Suite+W25,+Severna+Park,+MD+21146&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=770+Ritchie+Highway,+Severna+Park,+MD+21146"

    }
]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
              <MapPin className="w-4 h-4" />
              Find Us
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Visit Our{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
             Locations
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience world-class body sculpting treatments at our state-of-the-art facilities. 
              Now serving two convenient Maryland locations.
            </p>

            <div className="flex items-center justify-center gap-2 pt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> from 200+ clients
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {locations.map((location, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                {/* New Location Sparkle Effect */}
                {location.isNew && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="relative">
                      <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                    </div>
                  </div>
                )}

                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {location.name}
                      </h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                        location.isNew 
                          ? 'bg-gradient-to-r from-accent to-primary text-white' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {location.isNew && <Sparkles className="w-3 h-3" />}
                        {location.badge}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">Address</p>
                        <p className="text-muted-foreground text-sm">{location.address}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">Phone</p>
                        <a 
                          href={`tel:${location.phone.replace(/\D/g, '')}`}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm mb-2">Hours</p>
                        <div className="space-y-1">
                          {location.hours.map((schedule, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{schedule.day}</span>
                              <span className="text-foreground font-medium">{schedule.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="relative rounded-lg overflow-hidden border-2 border-border/50 group-hover:border-primary/30 transition-colors">
                    <div className="aspect-[16/10] bg-muted">
                      <iframe
                        src={location.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${location.name} Location Map`}
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <Button
                      size="lg"
                      asChild
                      className="bg-[#8e24aa] hover:bg-[#8e24aa] text-white font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <a
                        href={location.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        
                        Book Now
                      </a>
                    </Button>

                    <Button 
                      size="lg"
                      asChild
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white transition-all duration-300 hover:scale-105"
                    >
                      <a
                        href={location.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Directions
                      </a>
                    </Button>

                    <Button 
                      size="lg"
                      variant="outline"
                      asChild
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <a
                        href={`tel:${location.phone.replace(/\D/g, '')}`}
                        className="flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>

                  {location.isNew && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20 rounded-lg">
                      <p className="text-sm text-center font-medium text-foreground">
                        🎉 <span className="font-bold">Grand Opening Special!</span> Book your appointment today
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book your complimentary consultation at either of our convenient locations today.
            </p>
            <Button 
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              <a
                href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/JGVHU342FL56EYSJ5AT2QBRW"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Complimentary Consult
              </a>
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

export default LocationsPage