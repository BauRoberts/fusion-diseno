import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-unroot-gray-light py-16">
      <div className="unroot-container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Something we are pretty good at
          </h2>
          <h3 className="font-serif text-2xl md:text-3xl mb-10">
            Websites, banners, 3D creatives & more
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <Link href="/call">
              <Button size="lg" className="bg-unroot-purple hover:bg-unroot-purple/90 text-white">
                Book a friendly call with Adam
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
