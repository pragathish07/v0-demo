import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Serving Women Across <span className="text-primary">Maryland</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit Maryland Body Sculpting at one of our two convenient locations:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Ellicott City */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#8e24aa]" />
                <h3 className="text-xl font-bold text-foreground">Ellicott City</h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                For women looking for non-surgical body sculpting, skin tightening, cellulite treatments, and postpartum body support.
              </p>
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
              <Button
                size="lg"
                asChild
                className="w-full bg-[#8e24aa] hover:bg-[#7b1fa2] text-white"
              >
                <a
                  href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Book Ellicott City
                </a>
              </Button>
            </div>

            {/* Severna Park */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#8e24aa]" />
                <h3 className="text-xl font-bold text-foreground">Severna Park</h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                For women looking for customized body contouring and confidence-boosting treatments with no downtime.
              </p>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden border-2 border-border/50">
                <iframe
                  src="https://www.google.com/maps?q=Inside+River+Reach+Shopping+Center%2C+770+Ritchie+Highway%2C+Suite+W25%2C+Severna+Park%2C+MD+21146&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Severna Park Location Map"
                />
              </div>
              <Button
                size="lg"
                asChild
                className="w-full bg-[#8e24aa] hover:bg-[#7b1fa2] text-white"
              >
                <a
                  href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Book Severna Park
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}