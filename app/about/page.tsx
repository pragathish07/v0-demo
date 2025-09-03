"use client"

import { motion } from "framer-motion"
import { Award, Target, Heart, Zap } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Maryland Body Sculpting Clinic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8e24aa]/80 via-[#512da8]/70 to-[#8e24aa]/80" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-20 h-20 bg-[#b39ddb]/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, 15, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 right-16 w-32 h-32 bg-[#e1bee7]/20 rounded-full blur-2xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8">
              About Us
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                Maryland Body Sculpting, your destination for revolutionizing your wellness journey.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Founded in 2021 Section */}
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
                <Award className="w-6 h-6 text-[#8e24aa]" />
                <span className="text-[#512da8] font-semibold text-lg">Founded in 2021</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-[#8e24aa] leading-tight">
                Welcome to Maryland Body Sculpting
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Welcome to Maryland Body Sculpting, your destination for revolutionizing your wellness journey. Our clinic specializes in non-invasive body sculpting and anti-aging treatments, designed for those who prefer effective results without surgical intervention.
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
                  src="/bed.jpg" 
                  alt="Modern Body Sculpting Clinic" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#b39ddb] to-[#e1bee7] rounded-full opacity-60 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Approach Section */}
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
                  src="/treatment1.png" 
                  alt="Personalized Treatment Approach" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#8e24aa] to-[#512da8] rounded-full opacity-30 blur-lg"></div>
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
                <Target className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">Our Mission & Approach</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-[#512da8] leading-tight">
                Empowering Your Transformation
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                At Maryland Body Sculpting, our mission is to empower your transformation journey both physically and mentally. We believe in providing cutting-edge, non-invasive solutions coupled with expert knowledge to help you become the best version of yourself. Our team is dedicated to personalizing your experience, focusing on targeted areas like thighs, upper arms, and waist, and complementing your overall health and wellness regimen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
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
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#b39ddb] to-[#e1bee7] px-6 py-3 rounded-full">
                <Heart className="w-6 h-6 text-[#8e24aa]" />
                <span className="text-[#512da8] font-semibold text-lg">Transformation</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-[#8e24aa] leading-tight">
                Your Journey to Self-Confidence
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Your unique journey to self-confidence and well-being is at the heart of what we do. We understand that when you feel confident in your body, it positively influences every aspect of your life, from boosting self-esteem to enhancing mental health. Our treatments are more than skin-deep; they're about fostering self-love and happiness.
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
                  src="/woman-before-sculpting.png" 
                  alt="Transformation Journey" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-[#e1bee7] to-[#b39ddb] rounded-full opacity-50 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-gradient-to-br from-[#512da8]/10 to-[#8e24aa]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 mb-16"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8e24aa] to-[#512da8] px-6 py-3 rounded-full">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">What We Offer</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-[#512da8] leading-tight">
                Comprehensive Wellness Solutions
              </h2>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-[#b39ddb]/30">
                <div className="space-y-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our suite of services includes targeted fat reduction, skin tightening, cellulite removal, breast and butt lifts, and the latest in electromagnetic muscle toning, High-Intensity Focused Ultrasound (HIFU), and Radio Frequency skin tightening technologies. We go beyond physical treatments by integrating a holistic approach to your wellness, ensuring that your journey with us contributes to a happier, healthier you.
                  </p>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Maryland Body Sculpting isn't just about offering treatments; it's about changing lives. We're committed to being your partner in achieving a more confident, vibrant, and healthier self.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <div className="bg-gradient-to-r from-[#8e24aa] to-[#512da8] rounded-2xl p-6 shadow-xl">
                  <p className="text-xl font-semibold text-white text-center">
                    Ready to start your transformation journey?
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}