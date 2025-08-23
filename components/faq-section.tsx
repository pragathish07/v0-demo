import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "Is the treatment safe and FDA-approved?",
      answer:
        "Yes, all our treatments use FDA-approved technology and are performed by licensed professionals. Our non-surgical body sculpting treatments have been extensively tested for safety and efficacy. We follow strict safety protocols and conduct thorough consultations to ensure each treatment is appropriate for your individual needs.",
    },
    {
      question: "How many sessions do I need?",
      answer:
        "The number of sessions varies depending on your goals, the treatment type, and your body's response. Most clients see optimal results with 3-6 sessions spaced 2-4 weeks apart. During your free consultation, we'll create a personalized treatment plan that outlines the recommended number of sessions for your specific goals.",
    },
    {
      question: "What results can I expect?",
      answer:
        "Results vary by individual, but most clients see a reduction of 1-3 inches per treatment area and noticeable skin tightening. Some clients see immediate results after the first session, with continued improvement over 2-3 months as your body naturally eliminates the treated fat cells. We'll show you before/after photos during your consultation to set realistic expectations.",
    },
    {
      question: "Is there any downtime?",
      answer:
        "No, there's no downtime required! Our non-surgical treatments allow you to return to your normal activities immediately. You may experience mild redness or tingling in the treated area, which typically resolves within a few hours. This is why our treatments are perfect for busy professionals and parents.",
    },
    {
      question: "How much do treatments cost?",
      answer:
        "Treatment costs vary depending on the specific procedure and treatment area. Our introductory Mommy Tummy Rescue treatment starts at $249 (regularly $849). We offer package deals for multiple sessions and flexible payment plans to make treatments affordable. During your free consultation, we'll provide detailed pricing for your personalized treatment plan.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes! We offer flexible payment options including interest-free payment plans, monthly installments, and package deals. We accept cash, credit cards, and work with financing partners to make your transformation affordable. Our team will discuss all payment options during your consultation to find what works best for your budget.",
    },
    {
      question: "What's included in the free consultation?",
      answer:
        "Your free consultation includes a comprehensive body assessment, discussion of your goals, explanation of recommended treatments, before/after photo review, and a personalized treatment plan with pricing. There's no pressure to book - we want you to feel completely informed and comfortable with your decision. The consultation takes about 30-45 minutes.",
    },
    {
      question: "How long do results last?",
      answer:
        "Results are long-lasting because the treatments actually destroy fat cells, which are then naturally eliminated by your body. Once fat cells are gone, they don't regenerate. However, maintaining a healthy lifestyle is important to prevent remaining fat cells from expanding. Most clients enjoy their results for years with proper maintenance.",
    },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our body sculpting treatments and what to expect.
          </p>
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
            <Button size="lg" className="px-8 py-6 text-lg bg-primary hover:bg-primary/90">
              <MessageCircle className="w-5 h-5 mr-2" />
              Still Have Questions? Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
