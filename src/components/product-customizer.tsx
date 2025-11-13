"use client";

import { useState } from "react";
import Image from "next/image";
import { OrientacionOption, TelaOption, MedidaOption } from "@/data/products";

interface ProductCustomizerProps {
  productName: string;
  orientaciones: OrientacionOption[];
  telas: TelaOption[];
  medidas?: MedidaOption[];
  onConfigurationChange: (config: ProductConfiguration) => void;
}

export interface ProductConfiguration {
  orientacion: OrientacionOption | null;
  tela: TelaOption | null;
  medida: MedidaOption | null;
}

export default function ProductCustomizer({
  productName,
  orientaciones,
  telas,
  medidas,
  onConfigurationChange
}: ProductCustomizerProps) {
  const [selectedOrientacion, setSelectedOrientacion] = useState<OrientacionOption | null>(null);
  const [selectedTela, setSelectedTela] = useState<TelaOption | null>(null);
  const [selectedMedida, setSelectedMedida] = useState<MedidaOption | null>(
    medidas && medidas.length > 0 ? medidas[0] : null
  );

  const handleOrientacionChange = (orientacion: OrientacionOption) => {
    setSelectedOrientacion(orientacion);
    onConfigurationChange({
      orientacion,
      tela: selectedTela,
      medida: selectedMedida
    });
  };

  const handleTelaChange = (tela: TelaOption) => {
    setSelectedTela(tela);
    onConfigurationChange({
      orientacion: selectedOrientacion,
      tela,
      medida: selectedMedida
    });
  };

  const handleMedidaChange = (medida: MedidaOption) => {
    setSelectedMedida(medida);
    onConfigurationChange({
      orientacion: selectedOrientacion,
      tela: selectedTela,
      medida
    });
  };

  return (
    <div className="space-y-4">
      {/* Selector de Orientación */}
      <div>
        <h3 className="text-xs font-medium uppercase tracking-wide mb-2">Orientación</h3>
        <div className="grid grid-cols-3 gap-2">
          {orientaciones.map((orientacion) => (
            <button
              key={orientacion.id}
              onClick={() => handleOrientacionChange(orientacion)}
              className={`
                p-2 border-2 rounded transition-all
                ${selectedOrientacion?.id === orientacion.id
                  ? 'border-black bg-neutral-50'
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <div className="text-center">
                {orientacion.image && (
                  <div className="w-full h-12 mb-1 flex items-center justify-center">
                    <Image
                      src={orientacion.image}
                      alt={orientacion.label}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                )}
                <p className="text-xs font-medium">{orientacion.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selector de Tela */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-medium uppercase tracking-wide">Tela</h3>
          <a
            href="#"
            className="text-[10px] text-black/60 hover:text-black underline"
          >
            Ver catálogo
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {telas.map((tela) => (
            <button
              key={tela.id}
              onClick={() => handleTelaChange(tela)}
              className={`
                p-2 border-2 rounded transition-all text-left
                ${selectedTela?.id === tela.id
                  ? 'border-black bg-neutral-50'
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <div className="flex items-center gap-2">
                {tela.color && (
                  <div
                    className="w-6 h-6 rounded-full border border-gray-300 flex-shrink-0"
                    style={{ backgroundColor: tela.color }}
                  />
                )}
                <div>
                  <p className="text-xs font-medium">{tela.nombre}</p>
                  <p className="text-[10px] text-black/50 capitalize">{tela.tipo}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selector de Medidas (opcional) */}
      {medidas && medidas.length > 0 && (
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide mb-2">Dimensiones</h3>
          <div className="space-y-2">
            {medidas.map((medida) => (
              <button
                key={medida.id}
                onClick={() => handleMedidaChange(medida)}
                className={`
                  w-full p-2 border-2 rounded transition-all text-left
                  ${selectedMedida?.id === medida.id
                    ? 'border-black bg-neutral-50'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <p className="text-xs font-medium">{medida.label}</p>
                <p className="text-[10px] text-black/60 mt-0.5">
                  {medida.medidas.ancho} × {medida.medidas.profundidad}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Resumen de configuración */}
      {(selectedOrientacion || selectedTela || selectedMedida) && (
        <div className="pt-3 border-t border-gray-200">
          <h4 className="text-[10px] font-medium text-black/60 mb-1.5">Tu configuración:</h4>
          <div className="space-y-0.5 text-[11px]">
            {selectedOrientacion && (
              <p>• Orientación: <span className="font-medium">{selectedOrientacion.label}</span></p>
            )}
            {selectedTela && (
              <p>• Tela: <span className="font-medium">{selectedTela.nombre}</span></p>
            )}
            {selectedMedida && (
              <p>• Medidas: <span className="font-medium">{selectedMedida.label}</span></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
