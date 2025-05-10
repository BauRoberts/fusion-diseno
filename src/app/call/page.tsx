"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";

// Declaración del tipo global para la ventana con Cal
declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CallPage() {
  useEffect(() => {
    // Script de inicialización de Cal.com (versión inline)
    const initCalendar = () => {
      (function (C: Window, A: string, L: string) {
        let p = function (a: any, ar: any) {
          a.q.push(ar);
        };
        let d = C.document;
        // Usando la interfaz global ampliada
        C.Cal =
          C.Cal ||
          function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || ([] as any[]);
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || ([] as Array<any>);
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      // Solo ejecutar si Cal está definido
      if (window.Cal) {
        window.Cal("init", "30min", { origin: "https://cal.com" });
        window.Cal.ns["30min"]("inline", {
          elementOrSelector: "#my-cal-inline",
          config: {
            layout: "month_view",
            theme: "auto",
            hideEventTypeDetails: true,
            hideBranding: true,
          },
          calLink: "bautista-roberts-156d64/30min",
        });
        window.Cal.ns["30min"]("ui", {
          cssVarsPerTheme: { dark: { "cal-brand": "#000000" } },
          hideEventTypeDetails: true,
          layout: "month_view",
        });
      }
    };

    // Ejecutar después de que el componente se monte
    initCalendar();

    // Limpieza (opcional)
    return () => {
      // No hay necesidad de limpiar scripts en este caso
    };
  }, []);

  return (
    <main>
      <Header />
      <section className="bg-unroot-purple pt-32 md:pt-32 pb-16 md:pb-64">
        <div className="unroot-container max-w-4xl mx-auto px-4 md:px-0">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg">
            <div className="flex items-center space-x-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-unroot-purple/20 flex items-center justify-center">
                <span className="text-unroot-purple font-medium text-sm md:text-base">BR</span>
              </div>
              <div>
                <h2 className="font-medium text-base md:text-lg">Bautista Roberts</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Consulta con el Arquitecto Principal
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 pb-2">
              <h3 className="font-medium mb-2 md:mb-3 text-sm md:text-base">
                Reunión de descubrimiento. Durante la llamada:
              </h3>
              <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span>
                    Entenderé tus necesidades y expectativas para tu espacio.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span>
                    Recibirás sugerencias iniciales y recomendaciones para tu
                    proyecto arquitectónico.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span>
                    Si puedo ayudarte, te presentaré opciones de colaboración.
                    La decisión será tuya.
                  </span>
                </li>
              </ul>

              <div className="flex items-center text-gray-500 mb-4 text-sm md:text-base">
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
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>30 minutos</span>
              </div>

              {/* Cal.com Inline Embed */}
              <div
                id="my-cal-inline"
                className="rounded-md w-full h-auto"
                style={{ minHeight: "min(800px, 100vh - 300px)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}