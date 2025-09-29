"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, 
  User, CheckCircle, Loader2, AlertCircle 
} from "lucide-react"
import { useState } from "react"
import { ContactFormSection } from "@/components/ContactForm"

export default function ContactUsPage() {


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
    <section className="relative py-20 pt-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[#8e24aa] max-w-4xl mx-auto"
        >

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-[#8e24aa]/80 leading-relaxed">
          Have questions about our treatments? We're here to help you on your transformation journey.
        </p>
        </motion.div>
      </div>
    </section>

      {/* Contact Form Section */}
      <ContactFormSection/>
    </div>
  )
}