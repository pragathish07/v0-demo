"use client"
import React from "react"
import { Star, Sparkles } from "lucide-react"

function Banner() {
  return (
    <>
      {/* Announcement Banner */}
      <div
        className="relative w-full z-10 overflow-hidden py-3 sm:py-4 mt-12 sm:mt-16 lg:mt-20"
        style={{
          backgroundColor: "#8e24aa",
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h40M0 20h40M0 30h40M10 0v40M20 0v40M30 0v40' stroke='white' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        {/* Sparkle decorations */}
        <div
          className="absolute top-1/2 left-4 sm:left-10"
          style={{
            transform: "translateY(-50%)",
            color: "rgba(255, 255, 255, 0.3)",
            animation: "twinkle 2s ease-in-out infinite",
          }}
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
        <div
          className="absolute top-1/2 right-4 sm:right-10"
          style={{
            transform: "translateY(-50%)",
            color: "rgba(255, 255, 255, 0.3)",
            animation: "twinkle 2s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Desktop/Tablet: animated marquee */}
          <div
            className="hidden sm:flex"
            style={{
              animation: "marquee 12s linear infinite",
            }}
          >
            {/* Repeat the content multiple times for seamless loop */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-6 px-6 sm:px-8"
                style={{ flexShrink: 0, whiteSpace: "nowrap" }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="w-2 h-2 bg-white rounded-full"
                    style={{
                      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    }}
                  ></div>
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    Grand Opening
                  </span>
                </div>

                <span className="text-xs sm:text-sm md:text-base font-semibold text-white inline-flex items-center gap-2">
                  <span className="text-base sm:text-lg">🎉</span>
                  <span>
                     New Maryland Body Sculpting location opening inside Rockwell Fitness in Severna Park
                  </span>
                </span>

                <div
                  className="inline-flex items-center bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 font-bold text-xs sm:text-sm shadow-lg"
                  style={{
                    color: "hsl(var(--primary))",
                  }}
                >
                  November 7, 2025
                </div>

                <span
                  className="text-xs sm:text-sm md:text-base font-medium inline-flex items-center gap-2"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <span className="text-base sm:text-lg">✨</span>
                  <span>Now Booking Appointments!</span>
                </span>

                <div className="inline-flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-300 text-yellow-300" />
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-300 text-yellow-300" />
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-300 text-yellow-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: static, fully visible content in two lines */}
          <div className="sm:hidden px-4 py-1 space-y-2">
            <div className="flex items-center gap-2 flex-wrap justify-center text-white">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="w-2 h-2 bg-white rounded-full"
                  style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                />
                <span className="text-xs font-bold uppercase tracking-wider">Grand Opening</span>
              </span>
              <span className="text-xs font-semibold text-white text-center">
                New Maryland Body Sculpting location opening inside Rockwell Fitness in Severna Park
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center text-white">
              <span
                className="inline-flex items-center text-[color:var(--primary)] rounded-full px-3 py-1.5 font-bold text-xs shadow-lg"
                style={{ color: "hsl(var(--primary))" }}
              >
                November 7, 2025
              </span>
              <span className="text-xs font-medium inline-flex items-center gap-2">
                <span className="text-base">✨</span>
                <span>Now Booking Appointments!</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) translateY(-50%);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) translateY(-50%);
          }
        }
      `}</style>
    </>
  )
}

export default Banner