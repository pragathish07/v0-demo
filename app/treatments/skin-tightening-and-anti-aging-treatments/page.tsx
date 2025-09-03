"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Heart, Shield, Clock, Calendar, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SkinTighteningPage() {
  const wellnessBenefits = [
    "Increases natural collagen & elastin production",
    "Firms & tightens sagging skin", 
    "Reduces wrinkles, fine lines, and crow's feet",
    "Enhances hydration & skin elasticity",
    "Improves skin tone, texture, and smoothness"
  ]

  const beautyBenefits = [
    "Lifts & sculpts facial features",
    "Brightens dull, tired-looking skin",
    "Smooths puffiness, dark circles, and under-eye bags", 
    "Minimizes acne scars & skin blemishes",
    "Long-lasting anti-aging results without surgery"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/skin2.jpg" 
            alt="Skin Tightening Treatment Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(142, 36, 170, 0.85)'}} />
        </div>

        {/* Animated Sparkles */}
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
           
            
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold">
              Skin Tightening & Anti-Aging
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
                Restore Youthful Skin with Advanced Non-Surgical Solutions
              </p>
              
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Achieve firmer, more youthful skin with our cutting-edge skin tightening and anti-aging treatments. Whether you want to reduce fine lines, improve skin elasticity, or rejuvenate your overall complexion, our non-invasive solutions help you look and feel your best—without surgery or downtime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skin Rejuvenation Section */}
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
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{backgroundColor: '#e1bee7'}}>
                <Zap className="w-6 h-6" style={{color: '#8e24aa'}} />
                <span className="font-semibold text-lg" style={{color: '#512da8'}}>Collagen Enhancement</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{color: '#8e24aa'}}>
                Enhanced Skin Rejuvenation & Collagen Production
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Our advanced treatments, including HIFU (High-Intensity Focused Ultrasound) and RF Skin Tightening (Thermalift), work by stimulating collagen and elastin production, naturally restoring skin firmness. Experience long-lasting improvements in skin texture, hydration, and overall radiance.
              </p>
              
              <p className="text-lg font-semibold" style={{color: '#8e24aa'}}>
                Ideal for wrinkle reduction, sagging skin, and improving facial contours.
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
                  src="/skin1.jpg" 
                  alt="Skin Rejuvenation Treatment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-60 blur-xl" style={{backgroundColor: '#b39ddb'}}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smooth & Tighten Section */}
      <section className="py-24" style={{backgroundColor: 'rgba(225, 190, 231, 0.2)'}}>
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
                  src="/skin3.jpg" 
                  alt="Skin Tightening Treatment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full opacity-30 blur-lg" style={{backgroundColor: '#8e24aa'}}></div>
            </motion.div>

            {/* Text Content - Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{backgroundColor: '#8e24aa'}}>
                <Heart className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">Skin Firming</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{color: '#512da8'}}>
                Smooth & Tighten Loose Skin
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Over time, the skin loses its natural elasticity, leading to sagging and fine lines. Our treatments gently lift, firm, and sculpt your skin while reducing wrinkles, fine lines, and puffiness, giving you a naturally youthful appearance.
              </p>
              
              <p className="text-lg font-semibold" style={{color: '#8e24aa'}}>
                Perfect for treating areas like the face, neck, arms, stomach, and thighs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Non-Invasive Contouring Section */}
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
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{backgroundColor: '#b39ddb'}}>
                <Shield className="w-6 h-6" style={{color: '#8e24aa'}} />
                <span className="font-semibold text-lg" style={{color: '#512da8'}}>Non-Invasive Technology</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{color: '#8e24aa'}}>
                Non-Invasive Face & Body Contouring
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Say goodbye to surgical facelifts and painful recovery! Our skin-tightening technology penetrates deep into the dermis, creating instant tightening effects while working over time to reverse aging signs and improve skin resilience.
              </p>
              
              <p className="text-lg font-semibold" style={{color: '#8e24aa'}}>
                Popular for jawline definition, cheek enhancement, and under-eye smoothing.
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
                  src="/treatment.png" 
                  alt="Face and Body Contouring" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-50 blur-xl" style={{backgroundColor: '#e1bee7'}}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24" style={{backgroundColor: 'rgba(81, 45, 168, 0.1)'}}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full mb-8" style={{backgroundColor: '#8e24aa'}}>
              <CheckCircle className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-bold text-white">Benefits of Skin Tightening & Anti-Aging Treatments</h2>
            </div>
            
            <p className="text-2xl font-semibold" style={{color: '#512da8'}}>
              Wellness & Youthful Appearance
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
                    className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2"
                    style={{borderColor: '#b39ddb'}}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#8e24aa'}}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-sm leading-tight" style={{color: '#512da8'}}>✔ {benefit}</p>
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
              <p className="text-2xl font-semibold" style={{color: '#512da8'}}>
                Beauty & Aesthetic Enhancements
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
                    className="rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2"
                    style={{backgroundColor: '#e1bee7', borderColor: '#8e24aa'}}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#8e24aa'}}>
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-sm leading-tight" style={{color: '#512da8'}}>✔ {benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24" style={{backgroundColor: '#8e24aa'}}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="mb-8">
                <Calendar className="w-16 h-16 mx-auto mb-6" style={{color: '#8e24aa'}} />
                <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{color: '#512da8'}}>
                  Ready to Experience Skin Tightening & Anti-Aging?
                </h2>
                <p className="text-xl text-gray-700">
                  Book your skin tightening and anti-aging session today and start your journey to youthful, radiant skin.
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
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/JELMZH7CAYCTB5UPCUMEYRCY?savt=undefined"
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