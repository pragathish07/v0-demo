"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Smartphone, Sparkles, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function AppPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Show popup after 10 seconds initially, then every 60 seconds
    const initialTimer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }, 10000)

    // Set up recurring popup every 60 seconds
    const recurringTimer = setInterval(() => {
      setIsVisible(true)
    }, 60000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full"
          >
            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 text-center text-white relative">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Floating Elements */}
                <div className="absolute top-2 left-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 text-yellow-300 opacity-70" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 right-8">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Smartphone className="w-8 h-8 text-white/50" />
                  </motion.div>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto"
                  >
                    <Smartphone className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Get Our Mobile App!</h3>
                    <p className="text-white/90 text-lg">
                      Book appointments, track progress, and get exclusive offers on the go!
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 text-sm text-white/80">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                      <span>24/7 Appointment Booking</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                      <span>Progress Tracking & Photos</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                      <span>Exclusive App-Only Deals</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      onClick={handleGetAccess}
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-white/90 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Get Access Now
                    </Button>
                  </motion.div>

                  <p className="text-xs text-white/60">Free to download • No commitment required</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
