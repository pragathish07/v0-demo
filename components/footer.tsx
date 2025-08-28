import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const services = [
    "Localized Cryotherapy",
    "Skin Tightening & Anti-Aging",
    "Fat Reduction & Body Contouring",
    "HIFU + Liposonix Fat Reduction",
    "Free Consultation",
    "Virtual Consultation",
  ]

  const quickLinks = ["About Us", "Our Team", "Before & After Gallery", "Testimonials", "Blog", "Contact Us"]

  return (
    <footer className="px-3 sm:px-6 bg-foreground text-background">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">MD Body Sculpting</h3>
                <p className="text-background/80 leading-relaxed text-sm sm:text-base">
                  Maryland's premier non-surgical body contouring clinic. Advanced treatments, expert care, real
                  results.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="text-background/90 text-sm sm:text-base">(410) 505-8595</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="text-background/90 text-sm sm:text-base break-all">mdbodysculpting@outlook.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-background/90 text-sm sm:text-base">3525 Ellicott Mills Dr, Ellicott City, MD 21043, USA</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3 sm:gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-8 h-8 sm:w-10 sm:h-10 p-0 bg-transparent border-background/30 hover:bg-accent hover:border-accent"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-8 h-8 sm:w-10 sm:h-10 p-0 bg-transparent border-background/30 hover:bg-accent hover:border-accent"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-8 h-8 sm:w-10 sm:h-10 p-0 bg-transparent border-background/30 hover:bg-accent hover:border-accent"
                >
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-8 h-8 sm:w-10 sm:h-10 p-0 bg-transparent border-background/30 hover:bg-accent hover:border-accent"
                >
                  <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-semibold">Our Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-background/80 hover:text-accent transition-colors text-sm sm:text-base">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-semibold">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-background/80 hover:text-accent transition-colors text-sm sm:text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg sm:text-xl font-semibold">Stay Updated</h4>
              <p className="text-background/80 text-sm sm:text-base">
                Get exclusive offers, transformation tips, and the latest news delivered to your inbox.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/30 text-background placeholder:text-background/60 text-sm sm:text-base"
                />
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base py-2 sm:py-3">Subscribe Now</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">© 2024 MD Body Sculpting. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/80 hover:text-accent transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="pb-8">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Start Your Transformation Today</h3>
            <p className="text-background/80 mb-6 max-w-2xl mx-auto">
              Ready to achieve the body you've always wanted? Book your free consultation and take the first step
              towards your transformation.
            </p>
          <a href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services" target="_blank">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
              Book Appointment Now
            </Button>
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
