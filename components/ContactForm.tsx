"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, 
  User, CheckCircle, Loader2, AlertCircle 
} from "lucide-react"
import { useState } from "react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  type SubmitStatusType = {
    type: 'success' | 'error';
    message: string;
  } | null;
  
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>(null)

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = async (e: { preventDefault: () => void }) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
   
    const smsResponse = await fetch('/api/send-sms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'contact_inquiry',
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

 
    const emailResponse = await sendEmail({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      comments: formData.message,
    });

    if (smsResponse.ok && emailResponse) {
      setSubmitStatus({
        type: 'success',
        message: "✅ Thank you for your inquiry! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else {
      setSubmitStatus({
        type: 'error',
        message: '⚠️ There was an issue sending your message. Please try calling us directly.',
      });
    }
  } catch (error) {
    setSubmitStatus({
      type: 'error',
      message: '⚠️ There was an issue sending your message. Please try calling us directly.',
    });
  } finally {
    setIsSubmitting(false);
  }
};


const sendEmail = async (emailData: { 
  firstName: string; 
  lastName: string; 
  email: string; 
  phone: string; 
  subject: string;
  comments: string; 
}) => {
  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: "service_h14arps",   // replace with your EmailJS service ID
        template_id: "template_4xxwmhb", // replace with your new contact form template ID
        user_id: "YYVi9ASwA-_3_Jd3n",    // your EmailJS public key
        template_params: {
          from_name: `${emailData.firstName} ${emailData.lastName}`,
          from_email: emailData.email,
          phone: emailData.phone,
          subject: emailData.subject || "New Contact Inquiry",
          message: emailData.comments || "No message provided",
        },
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return false;
  }
};


  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-white">
      {/* Background with floating elements */}
      <div className="absolute inset-0 bg-[#8e24aa]/5" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-20 h-20 bg-[#8e24aa]/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-[#8e24aa]/15 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#8e24aa]/20 px-6 py-3 rounded-full mb-6"
          >
            <MessageSquare className="w-5 h-5 text-[#8e24aa]" />
            <span className="text-[#8e24aa] font-medium">Get in Touch</span>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#8e24aa]">Have Questions?</span>
            <br />
            <span className="text-gray-900">We're Here to Help</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Send us a message and our team will get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Reach out to us through any of these channels. We're always happy to answer your questions about our treatments and services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: "(410) 505-8595",
                  description: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
                  link: "tel:+14105058595"
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@marylandbodysculpting.com",
                  description: "We'll respond within 24 hours",
                  link: "mailto:info@marylandbodysculpting.com"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "3525 Ellicott Mills Dr",
                  description: "Ellicott City, MD 21043, USA",
                  link: "https://maps.google.com/?q=3525+Ellicott+Mills+Dr,+Ellicott+City,+MD+21043"
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: "Monday - Friday: 9AM - 6PM",
                  description: "Saturday: 9AM - 4PM • Sunday: Closed",
                  link: null
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-[#8e24aa]/40 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#8e24aa] rounded-xl flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                          {item.link ? (
                            <a 
                              href={item.link}
                              target={item.icon === MapPin ? "_blank" : undefined}
                              rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                              className="text-[#8e24aa] hover:text-[#512da8] font-medium transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-[#8e24aa] font-medium">{item.content}</p>
                          )}
                          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

           {/*
            <Card className="bg-[#f5f0fa] border-[#8e24aa]">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8e24aa]" />
                  Why Contact Us?
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8e24aa] mt-1">•</span>
                    <span>Free consultation and treatment recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8e24aa] mt-1">•</span>
                    <span>Questions about our treatments and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8e24aa] mt-1">•</span>
                    <span>Scheduling and availability inquiries</span>
                  </li>
                </ul>
              </CardContent>
            </Card> */}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-[#8e24aa]/40">
              <CardContent className="p-8 lg:p-10">
                <div className="text-center mb-8">
                  
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll respond within 24 hours
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
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="font-medium text-sm">{submitStatus.message}</span>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8e24aa]" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8e24aa]" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8e24aa]" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all disabled:opacity-50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8e24aa]" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all disabled:opacity-50"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      maxLength={200}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8e24aa] focus:border-transparent transition-all resize-vertical disabled:opacity-50"
                      placeholder="Tell us more about your inquiry..."
                    />
                    <p className="text-xs text-gray-500 text-right">{formData.message.length}/200 characters</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-[#8e24aa] hover:bg-[#7b1fa2] text-white py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-gray-500 text-xs text-center">
                    By submitting this form, you agree to receive communications from Maryland Body Sculpting
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}