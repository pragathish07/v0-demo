"use client"

import { motion } from "framer-motion"
import { Zap, Heart, Shield, Clock, Calendar, ExternalLink, CheckCircle, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HifuLiposonixPage() {
  const benefits = [
    "Targets and eliminates stubborn fat deposits",
    "Firms and tightens loose or aging skin", 
    "Contours problem areas like abdomen, thighs, and flanks",
    "Boosts collagen production for smoother, youthful skin",
    "Non-surgical with little to no downtime"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hifu.png" 
            alt="HIFU Liposonix Treatment Room" 
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
              HIFU & Liposonix
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
                Slim, Sculpt & Tighten – No Surgery Needed
              </p>
              
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Take fat reduction to the next level with HIFU (High-Intensity Focused Ultrasound) and Liposonix. These cutting-edge, non-invasive treatments target stubborn fat and tighten skin—no needles, no downtime. Achieve a more contoured, firm, and youthful look effortlessly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Stubborn Fat Section */}
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
                <span className="text-[#512da8] font-semibold text-lg">HIFU Technology</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#8e24aa] leading-tight">
                Target Stubborn Fat Without Surgery
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Liposonix uses high-intensity focused ultrasound (HIFU) technology to permanently destroy fat cells beneath the skin—without cuts, downtime, or needles. This advanced treatment targets problem areas like the abdomen, flanks, and thighs to help contour your body and reduce inches with lasting results.
              </p>
              
              <div className="space-y-3">
                <p className="text-lg text-[#8e24aa] font-semibold">
                  Perfect for those struggling with stubborn fat that doesn't respond to diet or exercise.
                </p>
                <p className="text-lg text-[#8e24aa] font-semibold">
                  Perfect for abs, glutes, arms, thighs, and calves.
                </p>
              </div>
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
                  src="/hfu1.jpg" 
                  alt="HIFU Liposonix Treatment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#b39ddb] rounded-full opacity-60 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Burn Fat Section */}
      <section className="py-24 bg-gradient-to-br from-[#e1bee7]/20 to-[#b39ddb]/10">
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
                  src="/fat2.png" 
                  alt="Targeted Fat Reduction" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
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
                <span className="text-white font-semibold text-lg">Precision Targeting</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#512da8] leading-tight">
                Burn Fat in the Areas That Matter Most
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Liposonix precisely targets and eliminates fat cells in common problem areas like the abdomen, flanks, and thighs—without damaging surrounding tissue. This focused ultrasound energy heats and disrupts fat beneath the skin, allowing your body to naturally flush it out over time.
              </p>
              
              <p className="text-lg text-[#8e24aa] font-semibold">
                Great for sculpting your midsection, slimming your waistline, and achieving visible inch loss after just one session.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-[#512da8]/10 to-[#8e24aa]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8e24aa] to-[#512da8] px-8 py-4 rounded-full mb-8">
              <CheckCircle className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-bold text-white">Benefits of Liposonix & HIFU Body Contouring</h2>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-[#b39ddb]/30 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-[#512da8] text-lg leading-tight">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-gradient-to-br from-[#8e24aa] to-[#512da8]">
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
                  Ready to Experience HIFU & Liposonix?
                </h2>
                <p className="text-xl text-gray-700">
                  Book your HIFU and Liposonix session today and start your journey to a more contoured, sculpted body.
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
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/ZSETUUD2WUGVRI2SWCGIBZIH"
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