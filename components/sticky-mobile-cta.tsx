"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle } from "lucide-react"

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-[#b39ddb]/30 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-3 py-3">
      <div className="flex gap-2">
        <Button
          size="lg"
          asChild
          className="flex-1 bg-[#8e24aa] hover:bg-[#7b1fa2] text-white py-3 text-sm font-bold rounded-xl shadow-lg"
        >
          <a
            href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/JGVHU342FL56EYSJ5AT2QBRW"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Free Consultation
          </a>
        </Button>
     {/*    <Button
          size="lg"
          asChild
          variant="outline"
          className="border-2 border-[#8e24aa] text-[#8e24aa] py-3 text-sm font-bold rounded-xl"
        >
          <a
            href="sms:+14105058595"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Text Us
          </a>
        </Button> */}
      </div>
    </div>
  )
}
