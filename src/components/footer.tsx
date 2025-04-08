import Link from "next/link";
import Image from "next/image";
import React from "react";

const footerLinks = [
  { name: "beneficios", href: "/#benefits" },
  { name: "que hacemos", href: "/#wedo" },
  { name: "trabajos", href: "/#recent-work" },
  { name: "precios", href: "/#pricing" },
  { name: "faq", href: "/#faq" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/fusion.diseno/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/fusion.diseno/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.5 15.5C11.184 15.5 10.102 14.846 9.5 13.859C9.5 13.859 8.945 16.111 8.771 16.807C8.492 17.93 7.823 19.052 7.73 19.193C7.665 19.288 7.538 19.305 7.49 19.193C7.42 19.033 7 17.492 7.16 16.18C7.242 15.532 8.08 11.142 8.08 11.142C8.08 11.142 7.81 10.6 7.81 9.826C7.81 8.596 8.476 7.68 9.31 7.68C10.014 7.68 10.355 8.217 10.355 8.867C10.355 9.59 9.889 10.694 9.648 11.716C9.445 12.572 10.048 13.273 10.892 13.273C12.413 13.273 13.558 11.618 13.558 9.222C13.558 7.323 12.296 5.95 10.153 5.95C7.739 5.95 6.232 7.789 6.232 9.917C6.232 10.675 6.492 11.261 6.879 11.727C7.018 11.894 7.035 11.975 6.989 12.175C6.958 12.322 6.881 12.645 6.851 12.785C6.809 12.977 6.654 13.042 6.48 12.967C5.382 12.506 4.818 11.125 4.818 9.573C4.818 7.075 6.766 4.6 10.363 4.6C13.234 4.6 15.47 6.71 15.47 9.284C15.47 12.175 13.679 14.469 11.037 14.469C10.166 14.469 9.35 14.015 9.052 13.477C9.052 13.477 8.583 15.222 8.483 15.584C8.291 16.285 7.757 17.21 7.475 17.747C8.29 18.024 9.157 18.17 10.061 18.17C15.028 18.17 19.05 14.149 19.05 9.181C19.05 4.213 15.028 0.193 10.061 0.193C5.093 0.193 1.07 4.213 1.07 9.181C1.07 14.149 5.093 18.17 10.061 18.17H12.5V15.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Houzz",
    href: "https://www.houzz.com/fusion.diseno",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12.9998 17.2978V9.79778L7.99976 13.0478V20.5478L12.9998 17.2978ZM12.9998 3.49778V11.0478L7.99976 7.79778V0.247779L12.9998 3.49778ZM13.9998 11.0478L18.9998 7.79778V15.3478L13.9998 18.5978V11.0478Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="block w-20">
              <Image
                src="/f.on-negro.png"
                alt="Fusion Diseño Logo"
                width={80}
                height={24}
                className="h-auto w-full"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black/70 hover:text-black transition-colors text-xs tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center justify-center md:justify-end gap-5">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black/70 hover:text-black transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-black/50 mb-4 md:mb-0">
            © 2025 Fusion Diseño | Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="text-xs text-black/50 hover:text-black transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-xs text-black/50 hover:text-black transition-colors"
            >
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
