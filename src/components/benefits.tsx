import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    id: "benefit-1",
    title: "Stand Out In Saturated Markets",
    description: "All designs are custom to your needs, you own everything."
  },
  {
    id: "benefit-2",
    title: "Rapid Delivery, Right On Time",
    description: "Bring your ideas to the market on time without sacrificing quality."
  },
  {
    id: "benefit-3",
    title: "Clear Costs, No Surprises",
    description: "What you see is what you get. No hidden fees or add-ons."
  },
  {
    id: "benefit-4",
    title: "Proven Results",
    description: "We've designed hundreds of websites, and we'll guide you through the process."
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-unroot-gray-lighter">
      <div className="unroot-container">
        <h2 className="text-center font-serif text-3xl md:text-4xl mb-6">
          Effortlessly scalable websites,
          <span className="block"> ready in weeks <span className="line-through text-unroot-gray">months</span></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white p-8 rounded-md shadow-sm">
              <div className="mb-4">
                <CheckCircle2 className="text-unroot-green h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl mb-2">{benefit.title}</h3>
              <p className="text-unroot-gray-dark">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
