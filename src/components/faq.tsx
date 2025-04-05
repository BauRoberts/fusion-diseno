import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "faq-1",
    question: "What services do you offer exactly?",
    answer: "Our focus is on design & Webflow development of marketing websites. As part of our process we usually include strategy, branding, design, development, QA and off-boarding."
  },
  {
    id: "faq-2",
    question: "What kind of designs can Unroot Design create?",
    answer: "Web design is our speciality. This means we can create full-responsive landing pages, sales pages, marketing websites, blogs, etc. Additionally, we can design 3D if you want to achieve better visual design of your website."
  },
  {
    id: "faq-3",
    question: "What if I don't like the design?",
    answer: "No worries! We always include multiple revision rounds free of charge to make sure you're fully satisfied with the end-result."
  },
  {
    id: "faq-4",
    question: "How long does a project take?",
    answer: "Most of our custom website projects take between 2 weeks and 2 months."
  },
  {
    id: "faq-5",
    question: "Do you take on small hourly work?",
    answer: "Only with the monthly Webflow Development plan. For anything else, we only do fixed-fee projects with a minimum size of one page."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="unroot-container max-w-3xl mx-auto">
        <h2 className="text-center font-serif text-3xl md:text-4xl mb-14">FAQs</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-200 rounded-lg p-2 px-6"
            >
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-unroot-gray-dark">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
