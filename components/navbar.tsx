"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Sparkles } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [shouldShake, setShouldShake] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShouldShake(true)
      setTimeout(() => setShouldShake(false), 500)
    }, 5000)

    return () => clearInterval(shakeInterval)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Membership", href: "#membership" },
    { name: "Payment Plans", href: "#payment" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-primary/20"
          : "bg-gradient-to-r from-white/10 via-primary/5 to-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24">
          <div className="flex-shrink-0 group min-w-0">
            <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold cursor-pointer font-heading">
              <span className="text-foreground group-hover:text-primary transition-colors duration-300">Body</span>
              <span className="text-transparent bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text animate-pulse script-text text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl ml-1">
                Sculpt
              </span>
            </div>
            <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
          </div>

          <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold relative group py-2 px-2 xl:px-3 text-sm xl:text-base whitespace-nowrap"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center text-foreground hover:text-primary transition-all duration-300 group bg-white/10 backdrop-blur-sm px-2 xl:px-4 py-2 rounded-full border border-primary/20 hover:border-primary/40"
            >
              <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2 group-hover:animate-bounce" />
              <span className="font-semibold text-xs xl:text-sm hidden lg:inline">(123) 456-7890</span>
              <span className="font-semibold text-xs xl:text-sm lg:hidden">Call</span>
            </a>
            <Button
              className={`bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-4 lg:px-6 xl:px-8 py-2 xl:py-3 text-sm xl:text-base rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20 relative overflow-hidden group ${
                shouldShake ? "animate-shake-rotate" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Sparkles className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2 animate-pulse" />
              <span className="hidden lg:inline">Book Consultation</span>
              <span className="lg:hidden">Book</span>
            </Button>
          </div>

          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-all duration-300 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:scale-110 touch-manipulation"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`xl:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="py-4 sm:py-6 space-y-1 sm:space-y-2 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl mt-2 sm:mt-4 shadow-2xl border border-primary/20 mx-1 sm:mx-0">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 sm:px-6 py-3 sm:py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-semibold rounded-lg mx-2 group text-base sm:text-lg touch-manipulation"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center justify-between">
                  {item.name}
                  <span className="w-0 h-0.5 bg-primary group-hover:w-4 sm:group-hover:w-6 transition-all duration-300"></span>
                </span>
              </a>
            ))}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-primary/20 mt-3 sm:mt-4 space-y-3 sm:space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center text-foreground hover:text-primary transition-all duration-300 p-3 sm:p-3 rounded-lg bg-primary/5 hover:bg-primary/10 touch-manipulation"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                <span className="font-semibold text-sm sm:text-base">(123) 456-7890</span>
              </a>
              <Button
                className={`w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3 sm:py-4 text-base sm:text-lg rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group touch-manipulation ${
                  shouldShake ? "animate-shake-rotate" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-pulse" />
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
