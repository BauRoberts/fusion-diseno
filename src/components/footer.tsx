import Link from 'next/link'

const footerLinks = [
  { name: "Why", href: "/#benefits" },
  { name: "What We Do", href: "/#wedo" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Templates", href: "https://webflow.com/templates/designers/unroot-design" }
]

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/unrootdesign", icon: TwitterIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/unrootdesign/", icon: LinkedInIcon },
  { name: "Instagram", href: "https://www.instagram.com/unrootdesign/", icon: InstagramIcon }
]

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="unroot-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-grapenuts text-unroot-purple text-xl">
              unroot
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-unroot-gray-dark hover:text-unroot-purple transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-unroot-gray-dark hover:text-unroot-purple transition-colors"
                target="_blank"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-unroot-gray-dark">
          <p>© 2024 | Unroot Design</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-unroot-purple transition-colors">Terms of Use</Link>
            <Link href="/privacy-policy" className="hover:text-unroot-purple transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M22 4.01C21.21 4.34 20.35 4.57 19.46 4.67C20.38 4.13 21.07 3.29 21.4 2.29C20.53 2.78 19.58 3.14 18.56 3.34C17.75 2.5 16.59 2 15.32 2C12.95 2 11.03 3.92 11.03 6.29C11.03 6.65 11.07 6.99 11.14 7.32C7.55 7.12 4.39 5.4 2.28 2.77C1.89 3.43 1.68 4.18 1.68 4.99C1.68 6.5 2.45 7.83 3.63 8.61C2.9 8.58 2.21 8.39 1.6 8.08V8.13C1.6 10.21 3.09 11.97 5.04 12.39C4.66 12.49 4.25 12.55 3.84 12.55C3.54 12.55 3.25 12.52 2.97 12.46C3.56 14.19 5.16 15.45 7.03 15.48C5.54 16.65 3.66 17.35 1.62 17.35C1.25 17.35 0.89 17.33 0.54 17.29C2.43 18.54 4.66 19.26 7.04 19.26C15.32 19.26 19.82 12.6 19.82 6.83C19.82 6.63 19.82 6.43 19.81 6.24C20.69 5.62 21.47 4.84 22.09 3.95L22 4.01Z"
        fill="currentColor"
      />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
        fill="currentColor"
      />
    </svg>
  )
}
