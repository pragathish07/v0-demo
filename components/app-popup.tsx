"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Smartphone, Sparkles, ExternalLink, Star, Gift, Calendar, Diamond } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function AppPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Show popup after 10 seconds initially,
    const initialTimer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }, 10000)


    return () => {
      clearTimeout(initialTimer)
      
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleGetAccess = () => {
    window.open("https://mdbodysculpting.repeatmd.app/signin", "_blank", "noopener,noreferrer")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-3 md:p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full mx-auto max-h-[85vh] md:max-h-[90vh] overflow-hidden"
          >
            <Card className="bg-[#8e24aa] border-0 shadow-2xl overflow-hidden relative">
              {/* Close Button - positioned absolutely over the card */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-30 shadow-lg border border-gray-200"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
              </button>

              {/* Purple Header Section */}
              <div className="p-3 md:p-4 text-center text-white relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-2 left-3 md:top-3 md:left-4">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 opacity-80" />
                  </motion.div>
                </div>
                <div className="absolute bottom-2 right-4 md:bottom-4 md:right-6">
                  <motion.div
                    animate={{ y: [-6, 6, -6], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-white/40" />
                  </motion.div>
                </div>

                {/* Logo */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", bounce: 0.5 }}
                  className="mb-2 md:mb-3"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full p-2 flex items-center justify-center">
                    <img 
                      src="/logo.webp" 
                      alt="MD Body Sculpting Logo" 
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                    Join Our New App &
                    <br />
                    <span className="text-yellow-300 text-xl md:text-2xl">Get $75 Off Any Service!</span>
                  </h2>
                  <p className="text-base md:text-lg text-white/95 font-medium">
                    Here's what you get:
                  </p>
                </motion.div>
              </div>

              <CardContent className="p-3 md:p-5 bg-white">
                {/* Benefits List */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3 md:space-y-4 mb-4 md:mb-6"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-[#8e24aa]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Free reward for new members!</h4>
                      <p className="text-gray-600 text-sm">Get instant $75 credit on your first service</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Gift className="w-5 h-5 md:w-6 md:h-6 text-[#8e24aa]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Earn rewards for visits</h4>
                      <p className="text-gray-600 text-sm">Points for every appointment and service</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#8e24aa]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Free birthday gifts</h4>
                      <p className="text-gray-600 text-sm">Special surprises on your special day</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Diamond className="w-5 h-5 md:w-6 md:h-6 text-[#8e24aa]" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-1">Member only offers</h4>
                      <p className="text-gray-600 text-sm">Exclusive deals and early access to new services</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3 md:space-y-4"
                >
                  <Button
                    onClick={handleGetAccess}
                    size="lg"
                    className="w-full bg-[#8e24aa] hover:bg-[#7b1fa2] text-white font-bold text-base md:text-lg py-4 md:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      animate={{ x: [-300, 300] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                    Get Instant Access
                  </Button>
                  
                  <p className="text-center text-gray-500 text-sm">
                    Free to download • No commitment required
                  </p>
                </motion.div>
              </CardContent>

              {/* Pulsing Border Effect */}
              <motion.div
                className="absolute inset-0 border-4 border-[#8e24aa] opacity-50 rounded-lg pointer-events-none"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}