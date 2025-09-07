"use client"

import { motion } from "framer-motion"
import { 
  MapPin, Clock, DollarSign, Star, Users, TrendingUp, Award, 
  Heart, Building, BarChart3, Target, CheckCircle, Mail, Phone, 
  Calendar, Briefcase, GraduationCap, Gift, Send, Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  type SubmitStatusType = null | {
    type: 'success' | 'error';
    message: string;
  };
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>(null)

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const sendEmail = async (emailData: { firstName: string; lastName: string; email: string; phone: string; comments: string }) => {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_h14arps',
          template_id: 'template_x1ohtae',
          user_id: 'YYVi9ASwA-_3_Jd3n',
          template_params: {
            applicant_name: `${emailData.firstName} ${emailData.lastName}`,
            applicant_email: emailData.email,
            applicant_phone: emailData.phone,
            applicant_comments: emailData.comments || 'No additional comments provided'
          }
        })
      })
      
      return response.ok
    } catch (error) {
      console.error('Email sending failed:', error)
      return false
    }
  }


    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)
        
        try {
        // Send email
        const emailSent = await sendEmail(formData)
        
        // Send SMS
        const smsResponse = await fetch("/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
        })

        const smsResult = await smsResponse.json()

        if (smsResult.success) {
        setSubmitStatus({
            type: "success",
            message:
            "Application submitted successfully! We'll get back to you within 24 hours.",
        })}
        
        if (emailSent) {
            setSubmitStatus({
            type: 'success',
            message: 'Application submitted successfully! We\'ll get back to you within 24 hours.'
            })
            
            // Reset form
            setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            comments: ''
            })
        } else {
            setSubmitStatus({
            type: 'error',
            message: 'There was an issue submitting your application. Please try again or contact us directly.'
            })
        }
        } catch (error) {
        setSubmitStatus({
            type: 'error',
            message: 'There was an issue submitting your application. Please try again or contact us directly.'
        })
        } finally {
        setIsSubmitting(false)
        }
    }

  const responsibilities = [
    "Perform non-invasive body sculpting services such as CryoSlimming, EMSculpting, Thermalift, and more (training provided)",
    "Deliver excellent client care and help clients feel confident and comfortable",
    "Explain treatment benefits and answer client questions clearly",
    "Support front desk with basic administrative or booking tasks as needed",
    "Maintain cleanliness, professionalism, and a relaxing treatment space",
    "Help with upselling packages and promoting membership options"
  ]

  const requirements = [
    "Experience in esthetics, body contouring, wellness, or customer service",
    "Positive attitude and genuine passion for helping clients transform",
    "Sales-minded and confident in educating clients about treatments",
    "Reliable, self-motivated, and a great communicator",
    "Able to work weekends or evenings as needed",
    "Licensed estheticians or medical assistants are a plus (but not required)"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Body Sculpting Career Opportunity" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8e24aa]/90 via-[#8e24aa]/85 to-[#512da8]/90" />
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4 + i * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.3 
              }}
              className="absolute w-4 h-4 bg-white/30 rounded-full blur-sm"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 3) * 25}%`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full mb-8 border border-white/30"
            >
              <Briefcase className="w-6 h-6" />
              <span className="font-semibold text-lg">Now Hiring</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text"
            >
              Body Sculpting Technician
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-4xl mx-auto text-white/95"
            >
              Join Maryland's premier body sculpting team and help women transform their confidence with cutting-edge treatments
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 text-lg mb-12"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" />
                <span>Ellicott City, MD</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>Part-Time/Contract</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <DollarSign className="w-5 h-5" />
                <span>$30/treatment + bonuses</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl bg-gradient-to-r from-[#512da8] to-[#7b1fa2] hover:from-[#4527a0] hover:to-[#6a1b9a] border-2 border-white/20"
              >
                <Send className="w-5 h-5 mr-2" />
                Apply Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#8e24aa] mb-6">
              About Maryland Body Sculpting
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We help women—especially moms—look and feel amazing in their own skin using non-invasive, cutting-edge body contouring treatments. Located in Ellicott City, MD, our clinic is known for its personalized care, high standards, and transformative results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Growing Team",
                description: "Join a rapidly expanding body sculpting brand with incredible growth opportunities"
              },
              {
                icon: Award,
                title: "High Standards",
                description: "Deliver personalized care and achieve transformative results for every client"
              },
              {
                icon: BarChart3,
                title: "Career Growth",
                description: "Build your career in a high-demand, high-impact field with endless possibilities"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#e1bee7]/20 to-[#e1bee7]/5 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#512da8] mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Details Section */}
      <section className="py-24 bg-gradient-to-br from-[#512da8]/5 via-[#8e24aa]/3 to-[#e1bee7]/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8e24aa] to-[#512da8] px-8 py-4 rounded-full mb-8 shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-bold text-white">Role Details</h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You'll Do */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#8e24aa]">What You'll Do</h3>
              </div>
              
              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What We're Looking For */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-[#512da8] to-[#8e24aa] rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#512da8]">What We're Looking For</h3>
              </div>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-gradient-to-r from-[#b39ddb]/10 to-[#e1bee7]/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-[#512da8] to-[#8e24aa] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{requirement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Section */}
      <section className="py-24 bg-gradient-to-br from-[#e1bee7]/20 via-white to-[#e1bee7]/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8e24aa] to-[#512da8] px-8 py-4 rounded-full mb-8 shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-bold text-white">Compensation & Perks</h2>
            </div>
            <p className="text-xl text-[#512da8] font-semibold">
              Competitive pay with growth opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Base Pay",
                amount: "$30",
                description: "per treatment"
              },
              {
                icon: Gift,
                title: "Weekly Bonuses",
                amount: "$100-$300",
                description: "typical performance bonuses"
              },
              {
                icon: Heart,
                title: "Tips from Clients",
                amount: "+",
                description: "Additional earnings from satisfied clients"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#512da8] mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-[#8e24aa] mb-2">{item.amount}</div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: GraduationCap,
                title: "Paid Training",
                description: "Hands-on training in body sculpting techniques"
              },
              {
                icon: TrendingUp,
                title: "Growth Opportunities",
                description: "Advance in a booming industry"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#b39ddb]/20 to-[#e1bee7]/20 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#512da8] to-[#8e24aa] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#512da8] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maryland Body Sculpting Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8e24aa] to-[#512da8] px-8 py-4 rounded-full mb-8 shadow-lg">
              <Star className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-bold text-white">Why Maryland Body Sculpting?</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Empowering Environment",
                description: "Join a team that's passionate about empowering women and work in a supportive, woman-led workplace."
              },
              {
                icon: Building,
                title: "Beautiful Setting",
                description: "Work in a beautiful, spa-like setting in the heart of Ellicott City with state-of-the-art equipment."
              },
              {
                icon: BarChart3,
                title: "High-Demand Field",
                description: "Build your career in a high-demand, high-impact field with endless growth potential."
              },
              {
                icon: Award,
                title: "Recognition & Rewards",
                description: "Be recognized and rewarded for your talent and drive in a rapidly growing company."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#512da8] mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-24 bg-gradient-to-br from-[#512da8]/5 via-[#8e24aa]/3 to-[#e1bee7]/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#512da8] to-[#8e24aa] px-8 py-4 rounded-full mb-8 shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-bold text-white">Job Details</h2>
            </div>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#8e24aa] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Schedule & Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Expected Hours:</span>
                    <span className="text-[#512da8] font-semibold">20-30 per week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Schedule:</span>
                    <span className="text-[#512da8] font-semibold">Weekdays & Weekends</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Flexibility:</span>
                    <span className="text-[#512da8] font-semibold">Flexible shifts available</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#8e24aa] mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Additional Pay
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Tips:</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Commissions:</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Performance Bonuses:</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Application Form Section */}
      <section id="application-form" className="py-24 bg-gradient-to-br from-[#8e24aa] via-[#8e24aa] to-[#512da8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full mb-8 border border-white/30">
              <Mail className="w-6 h-6 text-white" />
              <h2 className="text-3xl font-bold text-white">Ready to Apply?</h2>
            </div>
            <p className="text-xl text-white/95 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#512da8] mb-3">Application Form</h3>
              <p className="text-gray-600 text-center">
                Tell us a bit about yourself and why you'd be perfect for our team
              </p>
            </div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Mail className="w-5 h-5 text-red-600" />
                  )}
                  <span className="font-medium">{submitStatus.message}</span>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm disabled:opacity-50"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm disabled:opacity-50"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm disabled:opacity-50"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Tell us about yourself (Optional)
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm resize-vertical disabled:opacity-50"
                  placeholder="Tell us about your experience, why you're interested in this role, and what makes you a great fit for our team..."
                />
              </div>

              <motion.div
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="text-center pt-4"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto text-white px-12 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-r from-[#8e24aa] to-[#512da8] hover:from-[#7b1fa2] hover:to-[#4527a0] disabled:opacity-50 disabled:cursor-not-allowed border-2 border-transparent hover:border-white/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </motion.div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-[#512da8] font-semibold text-sm leading-relaxed">
                This is your opportunity to grow with a rapidly expanding body sculpting brand, earn great income, and work in a supportive and empowering environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#8e24aa] mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about the role or want to learn more about our team? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#512da8] mb-4">Call Us</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Speak directly with our hiring team to learn more about this exciting opportunity and ask any questions you might have.
                </p>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-[#8e24aa]">
                    (410) 555-0123
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 10:00 AM - 4:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="mt-4 bg-gradient-to-r from-[#8e24aa] to-[#512da8] hover:from-[#7b1fa2] hover:to-[#4527a0] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
                      onClick={() => window.open('tel:+14105550123')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Visit Us Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#512da8] to-[#8e24aa] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#512da8] mb-4">Visit Our Clinic</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Come see our beautiful facility and meet the team in person. We'd love to show you around and discuss this opportunity face-to-face.
                </p>
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-[#8e24aa]">
                    Maryland Body Sculpting
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    3525 Ellicott Mills Dr<br />
                    Ellicott City, MD 21043, USA
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>By Appointment Only</div>
                    <div>Free Consultation Available</div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="mt-4 bg-gradient-to-r from-[#512da8] to-[#8e24aa] hover:from-[#4527a0] hover:to-[#7b1fa2] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
                      onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=3525+Ellicott+Mills+Dr,+Ellicott+City,+MD+21043,+USA', '_blank')}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-[#e1bee7]/20 to-[#b39ddb]/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-[#512da8] mb-4">Questions About the Application Process?</h4>
              <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                We're here to help! Reach out if you need assistance with your application or want to learn more about what it's like to work with our team.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>careers@marylandbodysculpting.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}