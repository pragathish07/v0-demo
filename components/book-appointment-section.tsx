"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Phone, Sparkles, Star, CheckCircle } from "lucide-react"

export function BookAppointmentSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, 0],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-16 left-12 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, 12, 0],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6"
          >
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Book Your Appointment</span>
          </motion.div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              Ready to Start Your
            </span>
            <br />
            <span className="text-gray-900">Transformation?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Book your personalized consultation and take the first step towards your body goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Benefits & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold text-gray-900">What to Expect</h3>

              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    title: "Free Consultation",
                    description: "Comprehensive body assessment and personalized treatment plan",
                  },
                  {
                    icon: Star,
                    title: "Expert Guidance",
                    description: "Our certified specialists will guide you through every step",
                  },
                  {
                    icon: Clock,
                    title: "Flexible Scheduling",
                    description: "Choose from morning, afternoon, or evening appointment slots",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span>(410) 505-8595</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span>3525 Ellicott Mills Dr, Ellicott City, MD 21043, USA</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span>Mon-Fri: 9AM-6PM, Sat: 9AM-4PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-purple-100 text-center">
              <CardContent className="space-y-8">
                {/* Special Offer Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block"
                >
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 text-lg font-bold animate-pulse">
                    FREE Consultation Worth $150
                  </Badge>
                </motion.div>

                <div className="space-y-4">
                  <h3 className="font-display text-3xl font-bold text-gray-900">Book Now & Save</h3>
                  <p className="text-gray-600 text-lg">
                    Schedule your appointment online and get started on your transformation journey today
                  </p>
                </div>

                {/* Appointment Stats */}
                <div className="grid grid-cols-3 gap-4 py-6">
                  {[
                    { number: "15min", label: "Consultation" },
                    { number: "100%", label: "Free" },
                    { number: "24/7", label: "Online Booking" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-purple-50 rounded-xl"
                    >
                      <div className="font-display text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
                      <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full transform hover:scale-105 transition-all duration-300 shadow-2xl border-0 rounded-2xl font-bold"
                  >
                    <a
                      href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <Calendar className="w-6 h-6" />
                      Book an Appointment Now
                      <Sparkles className="w-6 h-6 animate-spin" />
                    </a>
                  </Button>
                </motion.div>

                <p className="text-gray-500 text-sm">
                  No commitment required • Instant confirmation • Easy rescheduling
                </p>
              </CardContent>
            </Card>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full opacity-15 blur-lg animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
