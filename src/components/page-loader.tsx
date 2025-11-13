'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Loading inicial de la página
  useEffect(() => {
    // Simular carga de recursos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 segundos para la carga inicial

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen inicial
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          {/* Logo animado */}
          <div className="w-32 md:w-48 animate-fade-in">
            <Image
              src="/fusion-negro-2.png"
              alt="Fusion Diseño"
              width={192}
              height={192}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* Barra de progreso */}
          <div className="w-48 h-1 bg-black/10 rounded-full overflow-hidden">
            <div className="h-full bg-black rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
