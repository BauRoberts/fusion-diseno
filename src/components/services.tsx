import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "web-services",
    title: "Single & Multi-Page Websites",
    features: [
      "Custom design & development",
      "Landing pages that drive conversions",
      "Interactions that make an impact"
    ],
    icon: "https://ext.same-assets.com/2675109532/1472662730.woff2",
    cta: "Estimate Cost"
  },
  {
    id: "digital-services",
    title: "Digital Products and Services",
    features: [
      "Automations and integrations",
      "Unlimited ongoing support",
      "Training for your teammates"
    ],
    icon: "https://ext.same-assets.com/2675109532/1718330237.woff2",
    cta: "Estimate Cost"
  }
]

const serviceTypes = [
  "Websites, UI/UX", "Landing Pages", "Design Systems", "Redesign",
  "SaaS Design", "3D Illustrations", "3D Design", "Creatives",
  "Presentations", "Webflow Dev", "Pitch Decks", "Social Media",
  "Icons, graphics", "NFT collections"
]

export default function Services() {
  return (
    <section id="wedo" className="py-20">
      <div className="unroot-container">
        <div className="bg-unroot-gray-light rounded-lg p-10 mb-20">
          <span className="inline-block text-sm text-unroot-purple font-medium mb-4">Something we are pretty good at</span>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Websites, banners, <br/>
            3D creatives & more
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 mt-8">
            {serviceTypes.map((service) => (
              <div key={service} className="text-sm text-unroot-gray-dark py-1">{service}</div>
            ))}
            <div className="text-sm text-unroot-gray-dark py-1">and more...</div>
          </div>
        </div>

        <div>
          <div className="mb-10">
            <span className="inline-block text-sm text-unroot-purple font-medium mb-2">WHAT WE DO</span>
            <h2 className="font-serif text-3xl md:text-4xl">
              A tight crew of digital experts that <em className="text-unroot-purple not-italic">gets it done</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-2xl mb-6">{service.title}</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-unroot-purple rounded-full mr-2.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/call">
                  <Button variant="outline" className="mt-4 border-unroot-purple text-unroot-purple hover:bg-unroot-purple hover:text-white">
                    {service.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
