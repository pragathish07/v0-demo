import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "Is body sculpting a weight-loss treatment?",
      answer:
        "Body sculpting is not a weight-loss program. It is designed to help improve contour, shape, tone, and targeted stubborn areas.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "That depends on your body, the area being treated, and your goals. We build a personalized recommendation during your consultation.",
    },
    {
      question: "Is there downtime?",
      answer:
        "No. One of the biggest benefits of non-surgical body sculpting is that there is no downtime.",
    },
    {
      question: "When will I see results?",
      answer:
        "Some clients notice changes sooner, while others see progress gradually over a series of sessions. Your treatment plan and consistency matter.",
    },
    {
      question: "Does it hurt?",
      answer:
        "Most clients find treatments very manageable. We explain what to expect before getting started.",
    },
    {
      question: "How do I know which treatment is right for me?",
      answer:
        "That is exactly what the consultation is for. We help guide you to the right plan based on your body and concerns.",
    },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="px-8 py-6 text-lg bg-primary hover:bg-primary/90"
            >
              <a
                href="https://book.squareup.com/appointments/2eb02510-65db-4773-9466-ebc2bf742d77/location/93THKJBR99KWV/services/JGVHU342FL56EYSJ5AT2QBRW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Still Have Questions? Book a Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
