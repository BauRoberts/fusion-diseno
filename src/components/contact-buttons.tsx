"use client";

import { ProductConfiguration } from "./product-customizer";
import { Button } from "./ui/button";

interface ContactButtonsProps {
  productName: string;
  configuration: ProductConfiguration;
  whatsappNumber?: string; // Número de WhatsApp (formato: 5493512345678)
  email?: string;
}

export default function ContactButtons({
  productName,
  configuration,
  whatsappNumber = "5493512345678", // Número por defecto (cambiar por el real)
  email = "info@fusiondiseno.com" // Email por defecto (cambiar por el real)
}: ContactButtonsProps) {

  // Función para generar el mensaje
  const generateMessage = (): string => {
    let message = `¡Hola! Me interesa el ${productName} con la siguiente configuración:\n\n`;
    message += `🛋️ Producto: ${productName}\n`;

    if (configuration.orientacion) {
      message += `📐 Orientación: ${configuration.orientacion.label}\n`;
    }

    if (configuration.tela) {
      message += `🎨 Tela: ${configuration.tela.nombre} (${configuration.tela.tipo})\n`;
    }

    if (configuration.medida) {
      message += `📏 Medidas: ${configuration.medida.label}\n`;
    }

    message += `\n¿Podrían darme más información sobre disponibilidad y precio?`;

    return message;
  };

  // Handler para WhatsApp - Usar número real: 549 351 769 3766
  const handleWhatsAppClick = () => {
    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5493517693766?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handler para Email
  const handleEmailClick = () => {
    const message = generateMessage();
    const subject = encodeURIComponent(`Consulta sobre ${productName}`);
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  // Verificar si hay configuración seleccionada
  const hasConfiguration = configuration.orientacion || configuration.tela || configuration.medida;

  return (
    <div className="space-y-2">
      {!hasConfiguration && (
        <p className="text-[11px] text-black/60 mb-2">
          Selecciona al menos una opción de personalización para continuar
        </p>
      )}

      <Button
        onClick={handleWhatsAppClick}
        disabled={!hasConfiguration}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 text-xs font-medium"
      >
        <svg
          className="w-4 h-4 mr-1.5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Consultar por WhatsApp
      </Button>

      <Button
        onClick={handleEmailClick}
        disabled={!hasConfiguration}
        variant="outline"
        className="w-full py-2.5 text-xs font-medium"
      >
        <svg
          className="w-4 h-4 mr-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Consultar por Email
      </Button>

      <p className="text-[10px] text-black/50 text-center pt-1">
        Te contactaremos a la brevedad para brindarte información detallada.
      </p>
    </div>
  );
}
