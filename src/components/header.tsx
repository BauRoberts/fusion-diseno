"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      <div
        className={`container mx-auto ${
          scrolled ? "p-0 max-w-full" : "py-0.5 px-4"
        } transition-all duration-300`}
      >
        <div
          className={`${
            scrolled
              ? "bg-white py-1.5 rounded-none w-full"
              : "bg-white/60 backdrop-blur-sm rounded-lg py-1"
          } flex items-center justify-between px-4 lg:px-6 shadow-lg transition-all duration-300`}
        >
          <Link href="/" className="text-black">
            <div className="w-16 py-1">
              <Image
                src="/f.on-negro.png"
                alt="Fusion Logo"
                width={64}
                height={20}
                className="h-auto w-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2 transition-all duration-300">
            <Link
              href="/#benefits"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
            >
              beneficios
            </Link>
            <Link
              href="/#wedo"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
            >
              que hacemos
            </Link>
            <Link
              href="/#recent-work"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
            >
              trabajos
            </Link>
            <Link
              href="/#pricing"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
            >
              precios
            </Link>
            <Link
              href="/#faq"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
            >
              faq
            </Link>
          </nav>

          <div className="flex items-center">
            <Link href="/call">
              <Button
                variant="secondary"
                className="bg-black text-white hover:bg-black/90 rounded-full text-xs px-4 py-1 font-medium"
              >
                contratanos
              </Button>
            </Link>

            <button
              className="ml-3 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${
            scrolled
              ? "bg-black"
              : "mt-1 mx-4 bg-black/90 backdrop-blur-sm rounded-lg"
          } py-3 px-4 border-t border-black/10 shadow-lg`}
        >
          <nav className="flex flex-col space-y-3">
            <Link
              href="/#benefits"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              beneficios
            </Link>
            <Link
              href="/#wedo"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              que hacemos
            </Link>
            <Link
              href="/#recent-work"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              trabajos
            </Link>
            <Link
              href="/#pricing"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              precios
            </Link>
            <Link
              href="/#faq"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs  tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              faq
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
