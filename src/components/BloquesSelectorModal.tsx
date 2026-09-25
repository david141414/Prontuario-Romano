import React from 'react';
import { BLOQUES } from '../data/prontuarioTypes';
import { X, Layers, ArrowRight } from 'lucide-react';

interface BloquesSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBloqueId: number | null;
  onSelectBloque: (bloqueId: number | null) => void;
}

export const BloquesSelectorModal: React.FC<BloquesSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedBloqueId,
  onSelectBloque,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF8F5] w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-gradient-to-r from-stone-900 to-amber-950 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                Los Seis Bloques Temáticos del Prontuario
              </h3>
              <p className="text-xs text-amber-200/80 font-sans">
                Estructura orgánica de la obra de Bernardo Periñán Gómez
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-lg text-amber-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of 6 blocks */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          <button
            onClick={() => {
              onSelectBloque(null);
              onClose();
            }}
            className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
              selectedBloqueId === null
                ? 'bg-amber-900 text-white border-amber-800 shadow-sm'
                : 'bg-white hover:bg-stone-100 border-stone-200 text-stone-800'
            }`}
          >
            <div>
              <span className="font-sans font-bold text-xs uppercase tracking-wider opacity-80">
                Vista General Completa
              </span>
              <h4 className="font-serif text-base font-bold">
                Todos los Bloques y Parágrafos (§ 1 – § 224)
              </h4>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          {BLOQUES.map((b) => {
            const isSelected = selectedBloqueId === b.id;
            return (
              <div
                key={b.id}
                onClick={() => {
                  onSelectBloque(b.id);
                  onClose();
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer space-y-1.5 ${
                  isSelected
                    ? 'bg-amber-50/90 border-amber-500 shadow-sm ring-1 ring-amber-500'
                    : 'bg-white hover:bg-amber-50/40 border-stone-200 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-xs px-2 py-0.5 rounded bg-stone-900 text-amber-100">
                      BLOQUE {b.romanNumeral}
                    </span>
                    <span className="font-mono text-xs font-semibold text-amber-900">
                      § {b.range[0]} – § {b.range[1]}
                    </span>
                  </div>
                  <span className="text-xs text-stone-400 font-sans">
                    {b.range[1] - b.range[0] + 1} parágrafos
                  </span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                  {b.title}
                </h4>

                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
