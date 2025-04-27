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
      if (hash && hash.startsWith('#')) {
        setTimeout(() => {
          const targetSection = document.querySelector(hash);
          if (targetSection) {
            const headerHeight = 80;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
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
  
  // Función para manejar el scroll suave a las secciones
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Solo procesar enlaces internos que empiezan con #
    if (!targetId.startsWith('#')) return;
    
    e.preventDefault();
    
    // Verificar si estamos en la página principal
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '';
    
    if (!isHomePage) {
      // Si no estamos en la página principal, redirigir a la página principal con el hash
      window.location.href = '/' + targetId;
      return;
    }
    
    // Si estamos en la página principal, hacer scroll suave
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Cerrar el menú móvil si está abierto
      if (mobileMenuOpen) setMobileMenuOpen(false);
      
      // Calcular la posición para el scroll con un pequeño offset
      const headerHeight = 80; // altura aproximada del header
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

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
            <Link href="/nosotras" className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2">
              nosotras
            </Link>
            <a
              href="/#benefits"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={(e) => handleSmoothScroll(e, '#benefits')}
            >
              que hacemos
            </a>
            <Link
              href="/proyecto"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
            >
              trabajos
            </Link>
            <a
              href="/proyecto"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={(e) => handleSmoothScroll(e, '#services')}
            >
              servicios
            </a>
            <a
              href="/#faq"
              className="text-black hover:text-black/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={(e) => handleSmoothScroll(e, '#faq')}
            >
              faq
            </a>
          </nav>

          <div className="flex items-center">
            {/* Botón de ecommerce */}
            <a href="https://fusiondiseño.com" target="_blank" rel="noopener noreferrer" className="mr-2">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black/5 rounded-full text-xs px-4 py-1 medium hidden md:inline-flex"
              >
                compra lo que usamos
              </Button>
            </a>

            <Link href="/call">
              <Button
                variant="secondary"
                className="bg-black text-white hover:bg-black/90 rounded-full text-xs px-4 py-1 medium"
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
            {/* Enlaces actualizados para el menú móvil */}
            <a
              href="https://fusiondiseño.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              compra lo que usamos
            </a>
            <a
              href="/#benefits"
              className="text-white hover:text-white/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={(e) => {
                handleSmoothScroll(e, '#benefits');
              }}
            >
              que hacemos
            </a>
            <Link
              href="/proyecto"
              className="text-white hover:text-white/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              trabajos
            </Link>
            <a
              href="/#services"
              className="text-white hover:text-white/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={(e) => {
                handleSmoothScroll(e, '#services');
              }}
            >
              servicios
            </a>
            <Link
              href="/nosotras"
              className="text-white hover:text-white/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              nosotras
            </Link>
            <a
              href="/#faq"
              className="text-white hover:text-white/80 transition-colors duration-200 text-xs tracking-wide py-2"
              onClick={(e) => {
                handleSmoothScroll(e, '#faq');
              }}
            >
              faq
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}