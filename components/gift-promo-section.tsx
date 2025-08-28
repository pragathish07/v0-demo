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
              <Gift className="w-5 h-5 text-gold-400" />
              <span className="text-gold-300 font-medium">Perfect Gift</span>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-sm border-2 border-gold-400/30 shadow-2xl overflow-hidden">
              <CardContent className="p-12 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold-400/20 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-tr-full" />

                <div className="relative z-10 text-center space-y-8">
                  {/* Gift Card Visual */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto w-80 h-48 bg-gradient-to-br from-gold-400 via-yellow-400 to-gold-500 rounded-2xl shadow-2xl mb-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-2xl" />
                    <div className="absolute inset-4 border-2 border-white/30 rounded-xl flex flex-col justify-center items-center text-white">
                      <Gift className="w-12 h-12 mb-2" />
                      <h3 className="font-display text-2xl font-bold">MD Body Sculpting</h3>
                      <p className="text-sm opacity-90">Gift Certificate</p>
                    </div>

                    {/* Floating sparkles */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="w-6 h-6 text-gold-300" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute -bottom-2 -left-2"
                    >
                      <Star className="w-5 h-5 text-gold-400" />
                    </motion.div>
                  </motion.div>

                  {/* Benefits */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        icon: Heart,
                        title: "Perfect for Loved Ones",
                        desc: "Show you care with the gift of confidence",
                      },
                      { icon: Sparkles, title: "Flexible Amounts", desc: "Choose any amount that fits your budget" },
                      { icon: Gift, title: "Never Expires", desc: "Use anytime with no expiration date" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Special Offer Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-block mb-6"
                  >
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 text-lg font-bold animate-pulse">
                      🎁 BONUS: Free Consultation Included
                    </Badge>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      size="lg"
                      asChild
                      className="text-xl px-12 py-6 bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-black font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-0"
                    >
                      <a
                        href="https://app.squareup.com/gift/XWX7PSPHT6V1Z/order"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Gift className="w-6 h-6" />
                        Purchase Gift Certificate
                        <Sparkles className="w-6 h-6 animate-spin" />
                      </a>
                    </Button>
                  </motion.div>

                  <p className="text-gray-400 text-sm mt-4">Digital gift certificates delivered instantly via email</p>
                </div>
              </CardContent>
            </Card>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gold-400/30 to-yellow-400/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
