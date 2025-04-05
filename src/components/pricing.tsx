import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    id: "landing-page",
    title: "Landing page",
    description: "High-converting landing page with custom design and easy to use editor.",
    features: [
      "Onepager",
      "Webflow/Framer development",
      "Design revisions if not liked",
      "Weekly calls",
      "Shared Slack channel",
      "CMS onboarding"
    ],
    cta: "Book a friendly call with Adam",
    availability: "1 spot left"
  },
  {
    id: "full-website",
    title: "Full Website",
    description: "Multipage outstanding website with user-friendly CMS, excellent performance and SEO optimization",
    features: [
      "Multi-page",
      "Webflow/Framer development",
      "Design revisions if not liked",
      "Weekly calls",
      "Shared Slack channel",
      "CMS onboarding"
    ],
    cta: "Book a friendly call with Adam",
    availability: "1 spot left"
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-unroot-purple text-white">
      <div className="unroot-container">
        <h2 className="text-center font-serif text-3xl md:text-4xl mb-6">Ready to get started?</h2>
        <p className="text-center text-white/80 mb-16 max-w-xl mx-auto">
          We only take on 3-4 projects each month to focus on quality over quantity
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="font-serif text-2xl mb-2">{plan.title}</h3>
              <p className="text-white/70 mb-6">{plan.description}</p>

              <h4 className="mb-4 font-medium">What's included:</h4>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 flex-shrink-0 text-unroot-green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link href="/call">
                  <Button className="w-full bg-white text-unroot-purple hover:bg-white/90 mb-2">
                    {plan.cta}
                  </Button>
                </Link>
                <p className="text-center text-white/60">{plan.availability}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
