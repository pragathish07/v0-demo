"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Sparkles, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [shouldShake, setShouldShake] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  // Handle dropdown hover with delay
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current)
    }
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 150) // Small delay to prevent flickering
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Treatments", href: "#services", hasDropdown: true },
    { name: "Membership", href: "/memberships" },
   /*  { name: "Payment Plans", href: "#payment" }, */
    { name: "Career", href: "/careers" },
  ]

  const treatmentServices = [
    { name: "Cryotherapy", href: "/treatments/cryotherapy" },
    { name: "Skin Tightening & Anti-Aging", href: "/treatments/skin-tightening-and-anti-aging-treatments" },
    { name: "Fat Reduction & Body Contouring", href: "/treatments/fat-reduction-and-body-contouring" },
    { name: "HIFU + Liposonix Fat Reduction", href: "/treatments/hifu-and-liposonix" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-white ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-primary/20"
            : "bg-gradient-to-r from-white/10 via-primary/5 to-white/10 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-12 sm:h-16 lg:h-20">
            
            {/* Logo - Compact for mobile */}
            <div className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-32">
              <img 
                src="/logo.webp" 
                alt="MD Body Sculpting" 
                className="w-full h-auto object-contain max-h-8 sm:max-h-12 lg:max-h-16" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center px-4">
              <div className="flex items-center space-x-1 xl:space-x-3">
                {navItems.map((item, index) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <div
                        ref={dropdownRef}
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          className="text-foreground hover:text-primary transition-all duration-300 font-semibold relative group py-2 px-2 xl:px-3 text-sm xl:text-base whitespace-nowrap flex items-center"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-md shadow-2xl rounded-lg border border-primary/20 overflow-hidden transition-all duration-300 ${
                          isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}>
                          {treatmentServices.map((service, serviceIndex) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium text-sm border-b border-primary/10 last:border-b-0"
                              style={{ animationDelay: `${serviceIndex * 50}ms` }}
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-all duration-300 font-semibold relative group py-2 px-2 xl:px-3 text-sm xl:text-base whitespace-nowrap"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
              <a
                href="tel:+14105058595"
                className="flex items-center text-foreground hover:text-primary transition-all duration-300 group bg-white/10 backdrop-blur-sm px-2 lg:px-3 py-2 rounded-full border border-primary/20 hover:border-primary/40"
              >
                <Phone className="w-3 lg:w-4 h-3 lg:h-4 mr-1 lg:mr-2 group-hover:animate-bounce flex-shrink-0" />
                <span className="font-semibold text-xs lg:text-sm whitespace-nowrap">(410) 505-8595</span>
              </a>
              <Button
                asChild
                className={`bg-[#8e24aa] hover:bg-[#8e24aa] text-white text-xs lg:text-lg px-3 lg:px-8 py-2 lg:py-5 rounded font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent relative overflow-hidden group ${
                  shouldShake ? "animate-shake-rotate" : ""
                }`}
              >
                <a
                  href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center whitespace-nowrap"
                >
                  <Sparkles className="w-3 lg:w-4 h-3 lg:h-4 mr-1 lg:mr-2 animate-pulse flex-shrink-0" />
                  <span className="hidden lg:inline">Book Appointment</span>
                  <span className="lg:hidden">Book</span>
                </a>
              </Button>
            </div>

            {/* Mobile Right Side - Just hamburger menu */}
            <div className="md:hidden flex items-center flex-shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-md bg-white/10 backdrop-blur-sm border border-primary/20 hover:border-primary/40"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-b border-primary/20 min-h-screen">
            <div className="px-2 sm:px-4">
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-semibold rounded-lg text-base"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMobileDropdownOpen && (
                          <div className="ml-4 mt-1 space-y-1">
                            {treatmentServices.map((service) => (
                              <a
                                key={service.name}
                                href={service.href}
                                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium rounded-lg text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-semibold rounded-lg text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-primary/20 mt-4 space-y-3">
                  <a
                    href="tel:+14105058595"
                    className="flex items-center text-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg bg-primary/5 hover:bg-primary/10"
                  >
                    <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="font-semibold text-base">(410) 505-8595</span>
                  </a>
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3 text-base rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      shouldShake ? "animate-shake-rotate" : ""
                    }`}
                  >
                    <a
                      href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                      Book Appointment
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}