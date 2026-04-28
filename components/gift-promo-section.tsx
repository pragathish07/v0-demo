"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Sparkles, Heart, Star } from "lucide-react"

export function GiftPromoSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-gold-400/20 to-yellow-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-100/20 to-yellow-100/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-gold-300/30"
            >
              <Gift className="w-5 h-5 text-gold-400 text-white" />
              <span className="text-gold-300 font-medium text-white">Perfect Gift</span>
            </motion.div>

            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-gold-400 via-yellow-400 to-gold-500 bg-clip-text text-transparent">
                Gift the Gift of
              </span>
              <br />
              <span className="text-white">Confidence</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Give someone special the ultimate gift of transformation with our premium body sculpting treatments
            </p>
          </motion.div>

          {/* Main Gift Card */}
          
        </div>
      </div>
      {/* Embedded purchase experience */}
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="text-white text-xl sm:text-2xl font-bold">Buy a Gift Card Online</h3>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-gray-300 text-sm">Secure checkout</span>
              <a
                href="https://mdbodysculpting.repeatmd.app/gift-cards/purchase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition"
              >
                Open Full Page
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            <div className="relative w-full h-[82vh] sm:h-[70vh] md:aspect-[16/9] md:h-auto">

                  
                  <img
                    src="/gift-card.png" 
                    alt="Gift Card Checkout Preview"
                    className="absolute inset-0 w-full h-full"
                  />

                  
                  <div
                    className="absolute bg-white"
                    style={{
                      bottom: "6rem",
                      left: "6.7rem",
                      width: "260px",
                      height: "30px",
                      borderRadius: "0.75rem",
                    }}
                  />

                 
                  <a
                    href="https://mdbodysculpting.repeatmd.app/gift-cards/purchase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label="Open secure gift card checkout"
                  />
                </div>

          </div>
          {/* <p className="text-gray-300 text-xs sm:text-sm mt-3 text-center">
            Tip: You can scroll inside the window on mobile to see the full checkout.
          </p> */}
        </div>
      </div>


    </section>
  )
}
