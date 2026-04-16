"use client"

import { motion } from "framer-motion"
import { Snowflake, Zap, Heart, Shield, Clock, Calendar, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import head from "next/head"
import { AgelessPreviewPromo } from "@/components/ageless-preview-promo"

export default function CryotherapyPage() {
  const wellnessBenefits = [
    "Pain Relief & Recovery",
    "Reduced Inflammation", 
    "Accelerated Muscle Healing",
    "Improved Circulation",
    "Migraine Relief"
  ]

  const beautyBenefits = [
    "Skin Tightening & Anti-Aging",
    "Cellulite Reduction",
    "Acne & Skin Clarity", 
    "Reduced Puffiness & Dark Circles",
    "Boosted Metabolism"
  ]

  return (
  
      
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/cryo1.jpg" 
            alt="Cryotherapy Treatment Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8e24aa]/85 via-[#512da8]/75 to-[#8e24aa]/85" />
        </div>

        {/* Animated Ice Crystals */}
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
           
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
              Cryotherapy
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
                Experience the Targeted Benefits of Localized Cryotherapy
              </p>
              
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Localized cryotherapy is a powerful, precision-based treatment designed to rejuvenate your body by focusing on specific areas in need of relief. Unlike whole-body cryotherapy, this non-invasive technique uses advanced cooling technology to rapidly reduce inflammation, accelerate muscle recovery, and tighten skin for a smoother, more youthful appearance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AgelessPreviewPromo variant="banner" className="bg-white" />

      {/* Faster Recovery Section */}
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
                <Zap className="w-6 h-6 text-[#8e24aa]" />
                <span className="text-[#512da8] font-semibold text-lg">Performance Enhancement</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#8e24aa] leading-tight">
                Faster Recovery and Enhanced Performance
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Localized cryotherapy is a favorite among athletes and fitness enthusiasts for its ability to ease sore muscles, promote circulation, and enhance flexibility. By reducing inflammation and swelling, it speeds up recovery after intense workouts or injuries—helping you stay at the top of your game.
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
                  src="/cryo2.jpg" 
                  alt="Athletic Recovery Treatment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#b39ddb] to-[#e1bee7] rounded-full opacity-60 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skin Health Section */}
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
              <div className="aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/cryo3.jpg" 
                  alt="Skin Rejuvenation Treatment" 
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
                <Heart className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">Skin Rejuvenation</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#512da8] leading-tight">
                Improved Skin Health and Rejuvenation
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Cold therapy stimulates collagen production, improving skin elasticity, reducing the appearance of fine lines, and diminishing puffiness. The result? Firmer, tighter skin with a radiant, youthful glow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detoxify Section */}
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
                <Shield className="w-6 h-6 text-[#8e24aa]" />
                <span className="text-[#512da8] font-semibold text-lg">Wellness & Detox</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#8e24aa] leading-tight">
                Detoxify and Revitalize Your Body
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                This cutting-edge treatment supports lymphatic drainage, helping your body naturally flush out toxins while improving circulation. By targeting specific areas, localized cryotherapy enhances overall wellness, leaving you feeling lighter, more refreshed, and energized.
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
                  src="/cryo1.jpg" 
                  alt="Detoxification and Wellness" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-[#e1bee7] to-[#b39ddb] rounded-full opacity-50 blur-xl"></div>
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
              <h2 className="text-3xl font-bold text-white">Benefits Of Cryotherapy</h2>
            </div>
            
            <p className="text-2xl text-[#512da8] font-semibold">
              Wellness Benefits of Localized Cryotherapy
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
                Beauty & Aesthetic Benefits of Localized Cryotherapy
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
                    className="bg-gradient-to-br from-[#b39ddb]/20 to-[#e1bee7]/30 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-[#8e24aa]/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center mx-auto mb-4">
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
                  Ready to Experience Cryotherapy?
                </h2>
                <p className="text-xl text-gray-700">
                  Book your localized cryotherapy session today and start your journey to enhanced wellness and recovery.
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
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/VDUT3O6IG4WSMQRNZYCUGDRH?savt=f23b6b6d-2e98-4af4-a4a5-7d61bf31f7a7"
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