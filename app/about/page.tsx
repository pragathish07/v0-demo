"use client"

import { motion } from "framer-motion"
import { Award, Target, Heart, Zap } from "lucide-react"
import Head from 'next/head'

// JSON-LD structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Maryland Body Sculpting",
  "description": "Maryland Body Sculpting specializes in non-invasive body sculpting and anti-aging treatments, designed for those who prefer effective results without surgical intervention.",
  "foundingDate": "2021",
  "url": "https://marylandbodysculpting.com",
  "logo": "https://marylandbodysculpting.com/logo.png",
  "image": [
    "https://marylandbodysculpting.com/bed.jpg",
    "https://marylandbodysculpting.com/treatment1.png",
    "https://marylandbodysculpting.com/woman-before-sculpting.png"
  ],
  "serviceType": [
    "Body Sculpting",
    "Anti-Aging Treatments",
    "Fat Reduction",
    "Skin Tightening",
    "Cellulite Removal",
    "HIFU Treatment",
    "Radio Frequency Treatment",
    "Electromagnetic Muscle Toning"
  ],
  "medicalSpecialty": "Cosmetic Medicine",
  "priceRange": "$$",
  "areaServed": {
    "@type": "State",
    "name": "Maryland"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Body Sculpting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Non-Invasive Body Sculpting",
          "description": "Targeted fat reduction focusing on thighs, upper arms, and waist"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Anti-Aging Treatments",
          "description": "Skin tightening and rejuvenation treatments"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HIFU Treatment",
          "description": "High-Intensity Focused Ultrasound for skin tightening"
        }
      }
    ]
  }
}

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>About Maryland Body Sculpting | Non-Invasive Body Sculpting & Anti-Aging Treatments</title>
        <meta name="description" content="Welcome to Maryland Body Sculpting, your destination for revolutionizing your wellness journey. We specialize in non-invasive body sculpting and anti-aging treatments, designed for effective results without surgical intervention." />
        <meta name="keywords" content="Maryland Body Sculpting, non-invasive body sculpting, anti-aging treatments, body transformation, wellness journey, fat reduction, skin tightening, cellulite removal, HIFU, Radio Frequency, electromagnetic muscle toning, Maryland wellness clinic" />
        <meta name="author" content="Maryland Body Sculpting" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About Maryland Body Sculpting | Non-Invasive Body Sculpting & Anti-Aging Treatments" />
        <meta property="og:description" content="Welcome to Maryland Body Sculpting, your destination for revolutionizing your wellness journey. We specialize in non-invasive body sculpting and anti-aging treatments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marylandbodysculpting.com/about" />
        <meta property="og:site_name" content="Maryland Body Sculpting" />
        <meta property="og:image" content="https://marylandbodysculpting.com/bed.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Maryland Body Sculpting Clinic - Modern Body Sculpting Equipment" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Maryland Body Sculpting | Non-Invasive Body Sculpting & Anti-Aging Treatments" />
        <meta name="twitter:description" content="Welcome to Maryland Body Sculpting, your destination for revolutionizing your wellness journey. We specialize in non-invasive body sculpting and anti-aging treatments." />
        <meta name="twitter:image" content="https://marylandbodysculpting.com/bed.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://marylandbodysculpting.com/about" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e1bee7]/10 via-white to-[#b39ddb]/10"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-20 h-20 bg-[#b39ddb]/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 25, 0],
                x: [0, 15, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-32 right-16 w-32 h-32 bg-[#e1bee7]/15 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, -10, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#8e24aa]/10 rounded-full blur-lg"
            />
            <motion.div
              animate={{
                y: [0, 35, 0],
                rotate: [0, -15, 0],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-[#512da8]/10 rounded-full blur-xl"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 bg-[#8e24aa] bg-clip-text text-transparent">
                About Us
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-700">
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
            <div className="w-8 h-12 border-2 border-[#8e24aa]/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#8e24aa]/60 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Founded in 2021 Section */}
        <section className="py-24 bg-white" itemScope itemType="https://schema.org/Organization">
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
                  <span className="text-[#512da8] font-semibold text-lg" itemProp="foundingDate">Founded in 2021</span>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-bold text-[#8e24aa] leading-tight" itemProp="name">
                  Welcome to Maryland Body Sculpting
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed" itemProp="description">
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
                    alt="Modern Body Sculpting Clinic equipment at Maryland Body Sculpting" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    itemProp="image"
                    loading="lazy"
                    width="600"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#b39ddb] to-[#e1bee7] rounded-full opacity-60 blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Approach Section */}
        <section className="py-24 bg-gradient-to-br from-[#e1bee7]/20 to-[#b39ddb]/10" itemScope itemType="https://schema.org/Service">
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
                    alt="Personalized Treatment Approach at Maryland Body Sculpting" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width="800"
                    height="600"
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
                
                <p className="text-xl text-gray-700 leading-relaxed" itemProp="description">
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
                <div className="inline-flex items-center gap-3 border-[#8e24aa] border-2  px-6 py-3 rounded-full">
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
                    alt="Transformation Journey - Body sculpting results and wellness at Maryland Body Sculpting" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width="600"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-[#e1bee7] to-[#b39ddb] rounded-full opacity-50 blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-24 bg-gradient-to-br from-[#512da8]/10 to-[#8e24aa]/5" itemScope itemType="https://schema.org/Service">
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
                
                <h2 className="text-5xl lg:text-6xl font-bold text-[#512da8] leading-tight" itemProp="name">
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
                  <div className="space-y-8" itemProp="description">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Our suite of services includes <span itemProp="serviceType">targeted fat reduction, skin tightening, cellulite removal, breast and butt lifts</span>, and the latest in <span itemProp="serviceType">electromagnetic muscle toning, High-Intensity Focused Ultrasound (HIFU), and Radio Frequency skin tightening technologies</span>. We go beyond physical treatments by integrating a holistic approach to your wellness, ensuring that your journey with us contributes to a happier, healthier you.
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
                  <a
                    href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                    aria-label="Start your transformation journey — go to booking"
                    target="_blank"
                    className="block bg-[#8e24aa] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b39ddb] focus-visible:ring-offset-2 focus-visible:ring-offset-white group"
                  >
                    <p className="text-xl font-semibold text-white text-center transition-transform group-hover:scale-[1.02]">
                      Ready to start your transformation journey?
                    </p>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}