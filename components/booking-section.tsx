"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, Phone, Mail, MapPin, CheckCircle, Sparkles, Heart, Shield } from "lucide-react"
import { format } from "date-fns"

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [consultationType, setConsultationType] = useState("free")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const treatments = [
    "Free Consultation",
    "Localized Cryotherapy",
    "Skin Tightening & Anti-Aging",
    "Fat Reduction & Body Contouring",
    "HIFU + Liposonix Fat Reduction",
    "Full Body Assessment",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would typically send the form data to your backend
  }

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-2 border-primary/20 shadow-2xl bg-white/95 backdrop-blur-sm animate-fade-in-up">
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto animate-bounce shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-ping opacity-20"></div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-up delay-300">
                      Booking Confirmed!
                    </h2>
                    <p className="text-xl text-muted-foreground animate-fade-in-up delay-500">
                      Thank you for choosing our clinic. We'll contact you within 24 hours to confirm your appointment
                      details.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/20 animate-fade-in-up delay-700">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      <span className="font-semibold text-foreground">What's Next?</span>
                      <Sparkles className="w-5 h-5 text-accent animate-pulse delay-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Check your email for confirmation details and preparation instructions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
      id="booking"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20 w-full">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold animate-bounce">
            <Heart className="w-4 h-4 fill-current animate-pulse" />
            Start Your Journey Today
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight font-fancy">
            Ready to Start Your{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text animate-gradient">
              Transformation?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Book your consultation in under 60 seconds. Our experts will create a personalized treatment plan just for
            you.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up delay-300">
              <Shield className="w-4 h-4 text-primary" />
              <span>100% Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up delay-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>24hr Response Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up delay-700">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-2 animate-fade-in-left">
            <Card className="border-2 border-primary/20 shadow-2xl bg-white/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 relative z-10">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
                <CardTitle className="text-3xl text-foreground flex items-center gap-3 font-fancy">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <CalendarIcon className="w-4 h-4 text-white" />
                  </div>
                  Book Your Appointment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Consultation Type */}
                  <div className="space-y-4">
                    <Label className="text-lg font-bold text-foreground flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      Choose Your Consultation Type
                    </Label>
                    <RadioGroup
                      value={consultationType}
                      onValueChange={setConsultationType}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="relative">
                        <Label
                          htmlFor="free"
                          className="flex items-center space-x-3 border-2 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-white to-primary/5 hover:shadow-lg hover:scale-105 cursor-pointer relative z-10"
                        >
                          <RadioGroupItem value="free" id="free" className="border-2 border-primary flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-bold text-foreground">Free Consultation</div>
                            <div className="text-sm text-muted-foreground">30 min assessment</div>
                          </div>
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white animate-pulse ml-2 flex-shrink-0">
                            Popular
                          </Badge>
                        </Label>
                      </div>

                      <div className="relative">
                        <Label
                          htmlFor="virtual"
                          className="flex items-center space-x-3 border-2 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 bg-gradient-to-br from-white to-accent/5 hover:shadow-lg hover:scale-105 cursor-pointer relative z-10"
                        >
                          <RadioGroupItem
                            value="virtual"
                            id="virtual"
                            className="border-2 border-accent flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="font-bold text-foreground">Virtual Consultation</div>
                            <div className="text-sm text-muted-foreground">Online meeting</div>
                          </div>
                        </Label>
                      </div>

                      <div className="relative">
                        <Label
                          htmlFor="treatment"
                          className="flex items-center space-x-3 border-2 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 bg-gradient-to-br from-white to-secondary/5 hover:shadow-lg hover:scale-105 cursor-pointer relative z-10"
                        >
                          <RadioGroupItem
                            value="treatment"
                            id="treatment"
                            className="border-2 border-secondary flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="font-bold text-foreground">Direct Treatment</div>
                            <div className="text-sm text-muted-foreground">Skip to treatment</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 group">
                      <Label htmlFor="firstName" className="text-base font-semibold text-foreground">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                        className="h-12 border-2 border-muted focus:border-primary transition-all duration-300 group-hover:border-primary/50"
                      />
                    </div>
                    <div className="space-y-3 group">
                      <Label htmlFor="lastName" className="text-base font-semibold text-foreground">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                        className="h-12 border-2 border-muted focus:border-primary transition-all duration-300 group-hover:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 group">
                      <Label htmlFor="email" className="text-base font-semibold text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="h-12 border-2 border-muted focus:border-primary transition-all duration-300 group-hover:border-primary/50"
                      />
                    </div>
                    <div className="space-y-3 group">
                      <Label htmlFor="phone" className="text-base font-semibold text-foreground">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        className="h-12 border-2 border-muted focus:border-primary transition-all duration-300 group-hover:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Treatment Selection */}
                  <div className="space-y-3">
                    <Label htmlFor="treatment" className="text-base font-semibold text-foreground">
                      Preferred Treatment
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 border-muted hover:border-primary/50 transition-all duration-300">
                        <SelectValue placeholder="Select a treatment (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {treatments.map((treatment) => (
                          <SelectItem key={treatment} value={treatment.toLowerCase().replace(/\s+/g, "-")}>
                            {treatment}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-base font-semibold text-foreground">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full h-12 justify-start text-left font-normal bg-transparent border-2 border-muted hover:border-primary/50 transition-all duration-300"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-semibold text-foreground">Preferred Time *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="h-12 border-2 border-muted hover:border-primary/50 transition-all duration-300">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-3">
                    <Label htmlFor="notes" className="text-base font-semibold text-foreground">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Tell us about your goals, concerns, or any questions you have..."
                      rows={4}
                      className="border-2 border-muted focus:border-primary transition-all duration-300 hover:border-primary/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-xl py-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                      Book My Appointment Now
                      <Heart className="w-6 h-6 group-hover:animate-bounce" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                  </Button>

                  <p className="text-sm text-muted-foreground text-center bg-muted/30 p-4 rounded-lg">
                    🔒 By booking, you agree to our terms of service and privacy policy. We'll contact you within 24
                    hours to confirm your appointment.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6 animate-fade-in-right">
            <Card className="shadow-xl bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-2xl transition-all duration-500 relative z-10">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-primary/20">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">(555) 123-4567</div>
                    <div className="text-sm text-muted-foreground">Call us directly</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">info@bodysculpting.com</div>
                    <div className="text-sm text-muted-foreground">Email us anytime</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">123 Wellness Ave</div>
                    <div className="text-sm text-muted-foreground">Miami, FL 33101</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Mon-Fri: 9AM-6PM</div>
                    <div className="text-sm text-muted-foreground">Sat: 9AM-4PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-500 relative z-10">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">What to Expect</h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Comprehensive body assessment",
                      "Personalized treatment plan",
                      "No-pressure consultation",
                      "Expert recommendations",
                      "Flexible payment options",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-foreground animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  )
}
