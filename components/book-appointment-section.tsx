"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Phone, Sparkles, Star, CheckCircle } from "lucide-react"

export function BookAppointmentSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Solid Purple Background */}
      <div className="absolute inset-0 bg-[#8e24aa]/10" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-8 sm:top-16 left-6 sm:left-12 w-12 h-12 sm:w-20 sm:h-20 bg-[#8e24aa]/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-16 h-16 sm:w-28 sm:h-28 bg-[#8e24aa]/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#8e24aa]/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#8e24aa]" />
            <span className="text-[#8e24aa] font-medium text-sm sm:text-base">Book Your Appointment</span>
          </motion.div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-[#8e24aa]">Ready to Start Your</span>
            <br />
            <span className="text-gray-900">Transformation?</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Book your personalized consultation and take the first step towards your body goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">What to Expect</h3>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: CheckCircle, title: "Free Consultation", description: "Comprehensive body assessment and personalized treatment plan" },
                  { icon: Star, title: "Expert Guidance", description: "Our certified specialists will guide you through every step" },
                  { icon: Clock, title: "Flexible Scheduling", description: "Choose from morning, afternoon, or evening appointment slots" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#8e24aa]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8e24aa] rounded-lg sm:rounded-xl flex items-center justify-center">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <Card className="bg-[#f5f0fa] border-[#8e24aa]">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Contact Information</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#8e24aa]" />
                    <span className="text-xs sm:text-sm lg:text-base">(410) 505-8595</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8e24aa] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm lg:text-base">3525 Ellicott Mills Dr, Ellicott City, MD 21043, USA</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#8e24aa]" />
                    <span className="text-xs sm:text-sm lg:text-base">Mon-Fri: 9AM-6PM, Sat: 9AM-4PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <Card className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-[#8e24aa]/40 text-center">
              <CardContent className="space-y-6 sm:space-y-8">
                {/* Special Offer Badge */}
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
                  <Badge className="bg-[#8e24aa] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-bold animate-pulse">
                    FREE Consultation Worth $150
                  </Badge>
                </motion.div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Book Now & Save</h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Schedule your appointment online and get started on your transformation journey today
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-6">
                  {[{ number: "90min", label: "Consultation" }, { number: "100%", label: "Free" }, { number: "24/7", label: "Online Booking" }].map(
                    (stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-2 sm:p-4 bg-[#8e24aa]/20 rounded-lg sm:rounded-xl"
                      >
                        <div className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-[#8e24aa] mb-1">{stat.number}</div>
                        <div className="text-gray-700 text-xs sm:text-sm font-medium">{stat.label}</div>
                      </motion.div>
                    )
                  )}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                  <Button
                    size="lg"
                    asChild
                    className="text-sm sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-[#8e24aa] hover:bg-[#7b1fa2] text-white w-full transform hover:scale-105 transition-all duration-300 shadow-2xl border-0 rounded-xl sm:rounded-2xl font-bold"
                  >
                    <a
                      href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 sm:gap-3"
                    >
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="xs:inline">Book an Appointment Now</span>
                      <span className="xs:hidden">Book Now</span>
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                    </a>
                  </Button>
                </motion.div>

                <p className="text-gray-500 text-xs sm:text-sm">
                  No commitment required • Instant confirmation • Easy rescheduling
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
