"use client"

import { motion } from "framer-motion"
import { Zap, Heart, Shield, Clock, Calendar, ExternalLink, CheckCircle, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FatReductionPage() {
  const wellnessBenefits = [
    "Reduces stubborn fat pockets",
    "Supports natural fat metabolism & elimination", 
    "Sculpts & contours problem areas",
    "Helps tighten loose skin",
    "Non-invasive with zero downtime"
  ]

  const beautyBenefits = [
    "Defines the waistline, arms, and thighs",
    "Enhances body shape & symmetry",
    "Smooths cellulite & uneven skin texture", 
    "Provides long-lasting slimming results",
    "A safe & painless alternative to liposuction"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/treatment.png" 
            alt="Body Contouring Treatment Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#8e24aa]/85" />
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5 
              }}
              className={`absolute w-4 h-4 bg-white/30 rounded-full blur-sm`}
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + i * 8}%`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
           
            
            <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold">
              Fat Reduction & Body Contouring
            </h1>
            <h1 className="text-2xl md:text-7xl lg:text-3xl font-bold mb-8">
              In Ellicott City
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12">
                Sculpt & Define Your Body Without Surgery
              </p>
              
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Achieve your dream figure with our non-invasive fat reduction and body contouring treatments. Using Ultrasonic Cavitation and Lipo Sculpt (Fat Reduction) technology, we target stubborn fat pockets, helping you slim down and tone up without surgery or downtime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Break Down Fat Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Text Content - Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-[#e1bee7] px-6 py-3 rounded-full">
                <Target className="w-6 h-6 text-[#8e24aa]" />
                <span className="text-[#512da8] font-semibold text-lg">Fat Elimination</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#8e24aa] leading-tight">
                Break Down & Eliminate Stubborn Fat
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Our treatments use advanced ultrasonic and light-based technology to break down fat cells, which are then naturally processed and eliminated through the body's metabolic system. This pain-free, non-surgical approach helps contour your body while tightening the skin for a smoother look.
              </p>
              
              <p className="text-lg text-[#8e24aa] font-semibold">
                Perfect for belly fat, love handles, thighs, arms, and back fat.
              </p>
            </motion.div>

            {/* Image - Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/fat1.jpg" 
                  alt="Ultrasonic Fat Reduction Treatment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#b39ddb] rounded-full opacity-60 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Body Sculpting Section */}
      <section className="py-24 bg-[#e1bee7]/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image - Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/treatment1.png" 
                  alt="Non-Invasive Body Sculpting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-[#8e24aa] rounded-full opacity-30 blur-lg"></div>
            </motion.div>

            {/* Text Content - Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-3 bg-[#8e24aa] px-6 py-3 rounded-full">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">Body Sculpting</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#512da8] leading-tight">
                Non-Invasive Body Sculpting & Fat Loss
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Tired of stubborn fat that won't budge despite diet and exercise? Our innovative body contouring treatments help reduce fat cells and reshape problem areas, giving you a more defined and sculpted appearance with no needles or recovery time.
              </p>
              
              <p className="text-lg text-[#8e24aa] font-semibold">
                Great for postpartum body sculpting, waistline slimming, and body reshaping.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skin Tightening Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Text Content - Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-[#b39ddb] px-6 py-3 rounded-full">
                <Shield className="w-6 h-6 text-[#8e24aa]" />
                <span className="text-[#512da8] font-semibold text-lg">Skin Tightening</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#8e24aa] leading-tight">
                Improve Skin Tightness & Firmness
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Fat loss treatments often leave behind loose skin, but our Lipo Sculpt and Ultrasonic Cavitation methods help stimulate collagen production, ensuring firmer, tighter skin while melting away fat.
              </p>
              
              <p className="text-lg text-[#8e24aa] font-semibold">
                Ideal for skin tightening in areas prone to sagging after weight loss.
              </p>
            </motion.div>

            {/* Image - Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/skin2.jpg" 
                  alt="Skin Tightening and Firmness" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#e1bee7] rounded-full opacity-50 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#512da8]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-[#8e24aa] px-8 py-4 rounded-full mb-8">
              <CheckCircle className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-bold text-white">Benefits of Fat Reduction & Body Contouring</h2>
            </div>
            
            <p className="text-2xl text-[#512da8] font-semibold">
              Health & Wellness Enhancements
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Wellness Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {wellnessBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-[#b39ddb]/30 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#8e24aa] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-[#512da8] text-sm leading-tight">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Beauty Benefits Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-2xl text-[#512da8] font-semibold">
                Aesthetic & Confidence Boosting
              </p>
            </motion.div>

            {/* Beauty Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {beautyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#b39ddb]/20 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-[#8e24aa]/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#8e24aa] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-[#512da8] text-sm leading-tight">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-[#8e24aa]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <div className="mb-8">
                <Calendar className="w-16 h-16 text-[#8e24aa] mx-auto mb-6" />
                <h2 className="text-4xl lg:text-5xl font-bold text-[#512da8] mb-4">
                  Ready to Transform Your Body?
                </h2>
                <p className="text-xl text-gray-700">
                  Book your fat reduction and body contouring session today and start sculpting your dream figure.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#512da8]"
                  style={{backgroundColor: '#8e24aa'}}
                >
                  <a
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-6 h-6" />
                    Book Online Now
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </Button>
              </motion.div>

              <p className="text-sm text-gray-500 mt-4">
                Secure online booking • Instant confirmation • Flexible scheduling
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 w-16 h-16 bg-white/20 rounded-full blur-lg"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-16 w-20 h-20 bg-white/15 rounded-full blur-xl"
          />
        </div>
      </section>
    </div>
  )
}