"use client";

import { packages } from "@/lib/packages";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import { Copy, ExternalLink, User, Dumbbell, Star } from "lucide-react";
import { useState } from "react";

export default function InternalPricingPage() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyLink = async (url: string) => {
    await navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const Section = ({ title, data, icon: Icon, delay = 0 }: { title: string; data: { name: string; url: string; price: string }[]; icon: React.ElementType; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-[#8e24aa] rounded-2xl shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#8e24aa]">{title}</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            className="group bg-white p-6 rounded-3xl shadow-lg border border-[#e1bee7]/50 hover:shadow-2xl hover:border-[#8e24aa]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
            </div>
            
            <p className="text-2xl font-bold text-[#8e24aa] mb-4">{pkg.price}</p>

            <div className="flex flex-col gap-3 mb-6">
              <a
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#8e24aa] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#7b1fa2] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Checkout Now
              </a>

              <button
                onClick={() => copyLink(pkg.url)}
                className={`flex items-center justify-center gap-2 border-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  copiedUrl === pkg.url
                    ? "border-green-500 text-green-600 bg-green-50"
                    : "border-[#8e24aa] text-[#8e24aa] hover:bg-[#8e24aa] hover:text-white"
                }`}
              >
                <Copy className="w-5 h-5" />
                {copiedUrl === pkg.url ? "Copied!" : "Copy Link"}
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl flex justify-center">
              <div className="p-3 bg-white rounded-xl shadow-inner">
                <QRCodeCanvas 
                  value={pkg.url} 
                  size={120}
                  level="H"
                  bgColor="#ffffff"
                  fgColor="#8e24aa"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-[#8e24aa]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-16 w-48 h-48 bg-[#8e24aa]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#8e24aa]/10 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8e24aa] mb-4">
            Tech Pricing Dashboard
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            Quick access to all package checkout links and QR codes. Click to open checkout or copy the link for customers.
          </p>
        </motion.div>

        {/* Package Sections */}
        <Section 
          title="Face Packages" 
          data={packages.face} 
          icon={User}
          delay={0.2}
        />
        
        <Section 
          title="Body Packages" 
          data={packages.body} 
          icon={Dumbbell}
          delay={0.4}
        />
        
        <Section 
          title="Ultimate Transformation (Pick Any Area)" 
          data={packages.ultimate} 
          icon={Star}
          delay={0.6}
        />

      </div>
    </div>
  );
}
