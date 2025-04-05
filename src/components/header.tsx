import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-unroot-purple fixed w-full top-0 z-50">
      <div className="unroot-container flex items-center justify-between py-4">
        <Link href="/" className="font-grapenuts text-white text-2xl">
          unroot
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#benefits" className="nav-link">
            Benefits
          </Link>
          <Link href="/#wedo" className="nav-link">
            what we do
          </Link>
          <Link href="/#recent-work" className="nav-link">
            Work
          </Link>
          <Link href="/#pricing" className="nav-link">
            Pricing
          </Link>
          <Link href="/#faq" className="nav-link">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center">
          <Link href="/call">
            <Button variant="secondary" className="bg-white text-unroot-purple hover:bg-white/90">
              Hire us
            </Button>
          </Link>

          <button className="ml-4 md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
