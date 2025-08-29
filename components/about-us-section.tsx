"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Award, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutUsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Solid Background */}
      <div className="absolute inset-0 bg-[#8e24aa]/5">
        <div className="absolute inset-0 bg-[#8e24aa]/10" />
        <div className="absolute inset-0 bg-[#8e24aa]/5" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 bg-[#8e24aa] rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-32 right-16 w-24 h-24 bg-[#8e24aa] rounded-full opacity-15 blur-sm"
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
            className="inline-flex items-center gap-2 bg-[#8e24aa]/10 px-6 py-3 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-[#8e24aa]" />
            <span className="text-[#8e24aa] font-medium">About MD Body Sculpting</span>
          </motion.div>

          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#8e24aa]">Transform Your</span>
            <br />
            <span className="text-gray-900">Body & Confidence</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of non-invasive body contouring with our cutting-edge technology and personalized
            treatment plans designed just for you.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-8">
              {/* Founded Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h3 className="font-display text-3xl font-bold text-[#8e24aa] mb-4">Founded in 2021</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Welcome to Maryland Body Sculpting, your destination for revolutionizing your wellness journey. Our clinic specializes in non-invasive body sculpting and anti-aging treatments, designed for those who prefer effective results without surgical intervention.
                </p>
              </motion.div>

              {/* Our Mission & Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#8e24aa]/20"
              >
                <h4 className="font-display text-2xl font-bold text-[#8e24aa] mb-4">Our Mission & Approach</h4>
                <p className="text-gray-700 leading-relaxed">
                  At Maryland Body Sculpting, our mission is to empower your transformation journey both physically and mentally. We believe in providing cutting-edge, non-invasive technology and utilizing our knowledge to help you become the best version of yourself. Our team is dedicated to personalizing your experience, focusing on targeted areas like thighs, upper arms, and waist, and complementing your overall health and fitness goals.
                </p>
              </motion.div>

              {/* Transformation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#8e24aa]/20"
              >
                <h4 className="font-display text-2xl font-bold text-[#8e24aa] mb-4">Transformation</h4>
                <p className="text-gray-700 leading-relaxed">
                  Your unique journey to self-confidence and well-being is at the heart of what we do. When you begin to feel more confident in your body, it positively influences every aspect of your life, from boosting self-esteem to enhancing mental health. Our treatments are more than skin-deep; they're about fostering self-love and inner happiness.
                </p>
              </motion.div>

              {/* What We Offer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#8e24aa]/20"
              >
                <h4 className="font-display text-2xl font-bold text-[#8e24aa] mb-4">What We Offer</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our suite of services includes targeted fat reduction, skin tightening, cellulite removal, breast and butt lifts, and the latest in electromagnetic muscle toning, High-Intensity Focused Ultrasound (HIFU), and Radio Frequency skin-tightening technologies. We go beyond physical treatments by integrating IV therapy, vitamin supplementation, ensuring that your journey with us contributes to a happier, healthier you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Maryland Body Sculpting isn't just about aesthetic changes; it's about empowerment. We're your partner in achieving a more confident, vibrant, and healthier lifestyle.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Appointment Booking */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#8e24aa]/20">
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Book Your Consultation</h3>
                <p className="text-gray-600">Schedule your personalized consultation today</p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://app.squareup.com/appointments/buyer/widget/2eb02510-65db-4773-9466-ebc2bf742d77/93THKJBR99KWV"
                  allow="payment app.squareup.com"
                  className="w-full h-[600px] border-none"
                  style={{ minHeight: "500px" }}
                />
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  className="w-full bg-[#8e24aa] hover:bg-[#8e24aa] text-white py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <a
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Book an Appointment
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#8e24aa] rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#8e24aa] rounded-full opacity-15 blur-lg" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "15+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#8e24aa]/20"
            >
              <div className="font-display text-3xl font-bold text-[#8e24aa] mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
