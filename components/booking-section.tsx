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
import { CalendarIcon, Clock, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-2 border-accent/20">
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">Booking Confirmed!</h2>
                    <p className="text-xl text-muted-foreground">
                      Thank you for choosing our clinic. We'll contact you within 24 hours to confirm your appointment
                      details.
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Start Your <span className="text-primary">Transformation?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your consultation in under 60 seconds. Our experts will create a personalized treatment plan just for
            you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book Your Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Consultation Type */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Choose Your Consultation Type</Label>
                    <RadioGroup
                      value={consultationType}
                      onValueChange={setConsultationType}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="free" id="free" />
                        <Label htmlFor="free" className="flex-1 cursor-pointer">
                          <div className="font-medium">Free Consultation</div>
                          <div className="text-sm text-muted-foreground">30 min assessment</div>
                        </Label>
                        <Badge variant="secondary">Popular</Badge>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="virtual" id="virtual" />
                        <Label htmlFor="virtual" className="flex-1 cursor-pointer">
                          <div className="font-medium">Virtual Consultation</div>
                          <div className="text-sm text-muted-foreground">Online meeting</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="treatment" id="treatment" />
                        <Label htmlFor="treatment" className="flex-1 cursor-pointer">
                          <div className="font-medium">Direct Treatment</div>
                          <div className="text-sm text-muted-foreground">Skip to treatment</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>

                  {/* Treatment Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="treatment">Preferred Treatment</Label>
                    <Select>
                      <SelectTrigger>
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
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

                    <div className="space-y-2">
                      <Label>Preferred Time *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
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
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Tell us about your goals, concerns, or any questions you have..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                    Book My Appointment Now
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By booking, you agree to our terms of service and privacy policy. We'll contact you within 24 hours
                    to confirm your appointment.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">(555) 123-4567</div>
                    <div className="text-sm text-muted-foreground">Call us directly</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">info@bodysculpting.com</div>
                    <div className="text-sm text-muted-foreground">Email us anytime</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">123 Wellness Ave</div>
                    <div className="text-sm text-muted-foreground">Miami, FL 33101</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Mon-Fri: 9AM-6PM</div>
                    <div className="text-sm text-muted-foreground">Sat: 9AM-4PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Comprehensive body assessment</li>
                    <li>• Personalized treatment plan</li>
                    <li>• No-pressure consultation</li>
                    <li>• Expert recommendations</li>
                    <li>• Flexible payment options</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
