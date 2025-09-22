"use client"

import { motion } from "framer-motion"
import { 
  CreditCard, Clock, Shield, Smartphone, CheckCircle, 
  Star, Gift, Calendar, Download, ExternalLink, AlertCircle,
  Zap, Cherry, Heart, DollarSign, Award,AlertTriangle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function PaymentPlansPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Load Cherry widget script and fonts
    const fontLink = document.createElement('link')
    fontLink.href = "https://fonts.googleapis.com/css2?family=Playfair+Display&family=Slabo+27px&family=Lato&family=Raleway&family=Montserrat&family=Oswald&family=Poppins&family=Source+Sans+Pro&family=PT+Sans&family=Open+Sans&display=swap"
    fontLink.rel = "stylesheet"
    document.head.appendChild(fontLink)

    // Cherry widget script
    const script = document.createElement('script')
    script.innerHTML = `
      (function (w, d, s, o, f, js, fjs) {
          w[o] =
              w[o] ||
              function () {
                  (w[o].q = w[o].q || []).push(arguments);
              };
          (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
          js.id = o;
          js.src = f;
          js.async = 1;
          fjs.parentNode.insertBefore(js, fjs);
      })(window, document, "script", "_hw", 'https://files.withcherry.com/widgets/widget.js');
      _hw(
          "init",
          {
              debug: false,
              variables: {
                  slug: 'maryland-body-sculpting',
                  name: "Maryland Body Sculpting",
              },
              styles: {
                  primaryColor: '#8e24aa',
                  secondaryColor: '#8e24aa10',
                  fontFamily: 'Open Sans',
              },
          },
          ["all", "hero", "howitworks", "testimony", "faq", "calculator"]
      );
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(fontLink)
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        {/* Hero Content */}
        <div className="relative z-10 text-center text-gray-800 px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 text-[#8e24aa]"
            >
              Flexible Payment Options
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-4xl mx-auto text-gray-700"
            >
              We believe everyone deserves access to treatments they love. That's why we offer multiple financing partners – making it easy to pay over time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => document.getElementById('payment-options')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 bg-[#512da8] hover:bg-[#4527a0] cursor-pointer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Explore Plans
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Payment Options Section */}

      <section id="payment-options" className="py-24 bg-gray-50 px-12" >
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#8e24aa] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Cherry className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#8e24aa] mb-3">Cherry – Quick & Easy Payment Plans</h3>
        </div>

        <div className="mb-8">
          <h4 className="font-bold text-[#512da8] mb-4 flex items-center gap-2">
            💜 Highlights
          </h4>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Apply in less than 60 seconds</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Split payments instead of paying all at once</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Applying won't affect your credit score</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700"><strong>0% APR available</strong> for qualifying patients</span>
            </div>
          </div>

         {/*  <div className="bg-purple-50 rounded-xl p-4 mb-6">
            <p className="text-[#512da8] italic text-center">
              "Our patients love using Cherry!"
            </p>
          </div>*/}
        </div> 

         <h4 className="font-bold text-[#512da8] mb-4 flex items-center gap-2">
            📱 How It Works:
          </h4>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
              <div>
                <p className="text-gray-700">Choose your Cherry payment plan — flexible monthly options</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
              <div>
                <p className="text-gray-700">Apply in seconds with instant approval</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
              <div>
                <p className="text-gray-700">Get treated today, pay over time with Cherry financing</p>
              </div>
            </div>
          </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
        <a href="#cherry-widget">
            <Button className="w-full cursor-pointer bg-[#8e24aa] hover:bg-[#7b1fa2] text-white py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300">
              <Cherry className="w-5 h-5 mr-2" />
              Apply with Cherry
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* CareCredit Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#8e24aa] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#8e24aa] mb-3">CareCredit – Pay for Care Over Time</h3>
        </div>

        <div className="mb-8">
          <h4 className="font-bold text-[#512da8] mb-4 flex items-center gap-2">
            💜 Highlights
          </h4>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Flexible monthly installment plans</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Widely accepted healthcare financing option</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Use for treatments, procedures, and follow-up care</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Quick and easy application process</span>
            </div>
          </div>
         <h4 className="font-bold text-[#512da8] mb-4 flex items-center gap-2">
            📱 How It Works:
          </h4>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
              <div>
                <p className="text-gray-700">Apply quickly and get Prequaligy in minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
              <div>
                <p className="text-gray-700">$50 Credit when you spend $300+</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
              <div>
                <p className="text-gray-700">$100 Credit when you spend $1,000+</p>
              </div>
            </div>
          </div>

        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className="w-full bg-[#8e24aa] hover:bg-[#7b1fa2] text-white py-4 text-lg cursor-pointer font-bold rounded-xl shadow-lg transition-all duration-300"
            onClick={() => window.open('https://carecredit.com/go/472VBN', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Apply with CareCredit
          </Button>
        </motion.div>
      </motion.div>

      {/* Affirm Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#8e24aa] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#8e24aa] mb-3">Affirm – Treat Today, Pay Later (via RepeatMD)</h3>
        </div>

        <div className="mb-8">
          <h4 className="font-bold text-[#512da8] mb-4 flex items-center gap-2">
            💜 Highlights
          </h4>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Choose from <strong>3 to 36 monthly payment options</strong></span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">No hard credit checks — ever</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">No hidden fees, predictable monthly payments</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8e24aa]">•</span>
              <span className="text-gray-700">Earn rewards through our app</span>
            </div>
          </div>

          <h4 className="font-bold text-[#512da8] mb-4 flex items-center gap-2">
            📱 How It Works:
          </h4>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
              <div>
                <p className="text-gray-700">Download our Practice App (quick sign-up)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
              <div>
                <p className="text-gray-700">Unlock rewards — the more you visit, the more you earn</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#8e24aa] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
              <div>
                <p className="text-gray-700">Treat today, pay later with Affirm financing</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full cursor-pointer bg-[#8e24aa] hover:bg-[#7b1fa2] text-white py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300"
            onClick={() => window.open('https://mdbodysculpting.repeatmd.app/', '_blank')}>
            <Download className="w-5 h-5 mr-2" />
            Download App
          </Button>
        </motion.div>
      </motion.div>
      
        </div>
      </section>



      {/* Cherry Widget Section */}
      <section className="py-24 bg-gradient-to-br from-[#8e24aa]/5 via-white to-[#e1bee7]/10">
        <div className="container mx-auto px-4 max-w-6xl" id="cherry-widget">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#8e24aa] mb-6">
              Get Started with Cherry
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Quick, easy, and no impact on your credit score
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            {isClient && (
              <div id="all" className="cherry-widget-container">
                {/* Cherry widget will load here */}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Payment Plans Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#8e24aa] mb-6">
              Why Choose Our Payment Plans?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              We've partnered with the best financing companies to give you maximum flexibility and peace of mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Quick Approval",
                description: "Get approved in minutes, not days"
              },
              {
                icon: Shield,
                title: "Credit Protection",
                description: "Soft credit checks won't impact your score"
              },
              {
                icon: DollarSign,
                title: "Flexible Terms",
                description: "Choose payment plans that work for your budget"
              },
              {
                icon: Award,
                title: "Trusted Partners",
                description: "Work with established, reputable financing companies"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#8e24aa] to-[#512da8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#512da8] mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16 bg-gradient-to-r from-[#e1bee7]/20 to-[#b39ddb]/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-[#8e24aa]" />
                <span className="text-lg font-bold text-[#512da8]">Important Information</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Financing options are provided by third-party partners and are subject to eligibility. Terms and conditions apply. For more details, please visit the partner websites.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#8e24aa] via-[#8e24aa] to-[#512da8]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Transformation?</h2>
            <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
              Don't let budget concerns hold you back. Choose the payment plan that works for you and begin your journey today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-white text-[#8e24aa] hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-xl shadow-lg transition-all duration-300"
                  onClick={() => document.getElementById('payment-options')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  View Payment Options
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 px-8 py-6 text-lg font-bold rounded-xl shadow-lg transition-all duration-300"
                  onClick={() => window.open('https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services', '_blank')}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}