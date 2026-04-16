import { Button } from "@/components/ui/button"
import { AGELESS_PREVIEW_LABEL, AGELESS_PREVIEW_URL } from "@/lib/ageless-preview"
import { cn } from "@/lib/utils"
import { ArrowRight, Sparkles } from "lucide-react"

type AgelessPreviewPromoProps = {
  variant?: "card" | "banner"
  className?: string
}

export function AgelessPreviewPromo({
  variant = "card",
  className,
}: AgelessPreviewPromoProps) {
  const isBanner = variant === "banner"

  return (
    <div className={cn("py-10", isBanner && "py-8", className)}>
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "rounded-2xl text-white shadow-xl",
            isBanner
              ? "border border-[#8e24aa]/35 bg-[#8e24aa] p-5"
              : "border border-[#b39ddb]/45 bg-[#8e24aa] p-6 sm:p-8"
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-4",
              isBanner ? "md:flex-row md:items-center md:justify-between" : "lg:flex-row lg:items-center lg:justify-between"
            )}
          >
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#f3d7ff]">
                <Sparkles className="h-3.5 w-3.5" />
                Ageless AI Preview
              </div>
              <h3 className={cn("font-semibold leading-tight", isBanner ? "text-xl" : "text-2xl sm:text-3xl")}>
                See your likely results before you book.
              </h3>
              <p className={cn("text-white/85", isBanner ? "text-sm sm:text-base" : "text-base sm:text-lg")}>
                Upload a photo and preview potential treatment outcomes in seconds with Ageless AI.
              </p>
            </div>

            <Button
              asChild
              size={isBanner ? "default" : "lg"}
              className="bg-white text-[#6a1b9a] hover:bg-[#f3e5f5] font-semibold"
            >
              <a href={AGELESS_PREVIEW_URL} target="_blank" rel="noopener noreferrer">
                {AGELESS_PREVIEW_LABEL}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
