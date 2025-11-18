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

    // Manejar navegación con hash al cargar la página
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#")) {
        setTimeout(() => {
          const targetSection = document.querySelector(hash);
          if (targetSection) {
            const headerHeight = 80;
            const targetPosition =
              targetSection.getBoundingClientRect().top +
              window.pageYOffset -
              headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }, 100); // Pequeño delay para asegurar que el DOM está listo
      }
    };

    // Ejecutar cuando se carga la página
    handleHashNavigation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      <div
        className={`container mx-auto ${
          scrolled ? "p-0 max-w-full" : "py-2 px-4"
        } transition-all duration-300`}
      >
        <div
          className={`${
            scrolled
              ? "bg-white py-4 rounded-none w-full"
              : "bg-white rounded-lg py-3"
          } flex items-center justify-between px-4 lg:px-6 shadow-lg transition-all duration-300`}
        >
          <Link href="/" className="text-black">
            <div className="w-24 h-auto py-2">
              <Image
                src="/fusion-negro-2.png"
                alt="Fusion Logo"
                width={192}
                height={192}
                className="w-full h-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2 transition-all duration-300">
            <Link
              href="/"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
            >
              home
            </Link>
            <Link
              href="/nosotras"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
            >
              nosotras
            </Link>
            <Link
              href="/que-hacemos"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
            >
              que hacemos
            </Link>
            <Link
              href="/proyecto"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
            >
              proyectos
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Botones Desktop - solo texto */}
            <Link href="/lo-que-usamos" className="hidden md:inline-flex">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black/5 rounded-full text-xs px-4 py-1 medium"
              >
                compra lo que usamos
              </Button>
            </Link>

            <Link href="/call" className="hidden md:inline-flex">
              <Button
                variant="secondary"
                className="bg-black text-white hover:bg-black/90 rounded-full text-xs px-4 py-1 medium"
              >
                contratanos
              </Button>
            </Link>

            {/* Botón productos para móvil - con iconos */}
            <Link href="/lo-que-usamos" className="md:hidden">
              <Button
                variant="outline"
                className={`border-black text-black hover:bg-black/5 rounded-full text-xs medium transition-all duration-500 ease-in-out ${
                  scrolled ? "px-4 py-1" : "w-9 h-9 p-0"
                }`}
              >
                <div className="relative flex items-center justify-center">
                  <span
                    className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
                      scrolled
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0 w-0"
                    }`}
                  >
                    productos
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-500 ease-in-out ${
                      scrolled
                        ? "opacity-0 scale-0 absolute"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
              </Button>
            </Link>

            <Link href="/call" className="md:hidden">
              <Button
                variant="secondary"
                className={`bg-black text-white hover:bg-black/90 rounded-full text-xs medium transition-all duration-500 ease-in-out ${
                  scrolled ? "px-4 py-1" : "w-9 h-9 p-0"
                }`}
              >
                <div className="relative flex items-center justify-center">
                  <span
                    className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
                      scrolled
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0 w-0"
                    }`}
                  >
                    contratanos
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-500 ease-in-out ${
                      scrolled
                        ? "opacity-0 scale-0 absolute"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
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
              ? "bg-white"
              : "mt-1 mx-4 bg-white rounded-lg"
          } py-3 px-4 border-t border-black/10 shadow-lg`}
        >
          <nav className="flex flex-col space-y-3">
            {/* Enlaces actualizados para el menú móvil */}
            <Link
              href="/"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              home
            </Link>
            <Link
              href="/que-hacemos"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              que hacemos
            </Link>
            <Link
              href="/proyecto"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              proyectos
            </Link>
            <Link
              href="/nosotras"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              nosotras
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
