import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import { Playfair_Display, Dancing_Script } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Transform Your Body - Premium Body Sculpting Clinic",
  description:
    "Advanced non-surgical body contouring treatments. FDA-approved, safe, and effective. Book your free consultation today.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${manrope.variable} ${playfair.variable} ${dancing.variable} antialiased`}
    >
      <body className="font-sans min-h-screen floating-shapes">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-purple-400/10 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/15 to-indigo-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-pink-400/20 to-purple-400/10 rounded-full blur-xl animate-bounce delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-300/10 to-blue-300/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
