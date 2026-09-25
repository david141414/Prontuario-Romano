import React, { useState } from 'react';
import { Paragrafo } from '../data/prontuarioTypes';
import {
  getParagrafoById,
  getIncomingReferences,
  getOutgoingReferences,
} from '../data/prontuarioData';
import { X, Network, ArrowUpRight, ArrowDownLeft, ArrowRight, BookOpen } from 'lucide-react';

interface ReferenceNetworkModalProps {
  paragrafoId: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: number) => void;
}

export const ReferenceNetworkModal: React.FC<ReferenceNetworkModalProps> = ({
  paragrafoId,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [activeId, setActiveId] = useState<number | null>(paragrafoId);

  // Sync state when prop changes
  React.useEffect(() => {
    setActiveId(paragrafoId);
  }, [paragrafoId]);

  if (!isOpen || activeId === null) return null;

  const current = getParagrafoById(activeId);
  if (!current) return null;

  const outgoing = getOutgoingReferences(activeId);
  const incoming = getIncomingReferences(activeId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF8F5] w-full max-w-4xl max-h-[88vh] rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-gradient-to-r from-stone-900 to-amber-950 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Network className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                Red Hipertextual de Relaciones Jurídicas
              </h3>
              <p className="text-xs text-amber-200/80 font-sans">
                Conexiones doctrinales y citas cruzadas de § {current.id}. {current.title}
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

        {/* Focus Node Card */}
        <div className="p-4 bg-white border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-900 text-amber-100">
                § {current.id}
              </span>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                {current.title}
              </h4>
              {current.latinTitle && (
                <span className="font-serif text-xs italic text-stone-500 hidden sm:inline">
                  ({current.latinTitle})
                </span>
              )}
            </div>
            <p className="text-xs text-stone-600 line-clamp-1 max-w-xl font-sans">
              {current.summary}
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate(current.id);
              onClose();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer shadow-sm"
          >
            <span>Ir a este parágrafo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Network Columns: Cita a / Citado por */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Outgoing References */}
          <div className="bg-white rounded-xl border border-stone-200 p-4 space-y-3">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
              <ArrowUpRight className="w-4 h-4 text-amber-700" />
              <h5 className="font-serif font-bold text-stone-900 text-sm">
                Remite a ({outgoing.length} parágrafos)
              </h5>
            </div>
            <p className="text-xs text-stone-500 font-sans">
              Conceptos citados expresamente en el texto de § {current.id}:
            </p>

            {outgoing.length === 0 ? (
              <p className="text-xs text-stone-400 italic py-4">
                Este parágrafo no contiene remisiones expresas.
              </p>
            ) : (
              <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
                {outgoing.map((p) => (
                  <div
                    key={`out-${p.id}`}
                    onClick={() => setActiveId(p.id)}
                    className="p-2 rounded-lg border border-stone-100 hover:border-amber-400 hover:bg-amber-50/70 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono text-xs font-semibold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 group-hover:bg-amber-800 group-hover:text-amber-100">
                        § {p.id}
                      </span>
                      <span className="font-serif text-sm font-medium text-stone-900 truncate">
                        {p.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-stone-400 shrink-0">
                      pág. {p.page}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Incoming References */}
          <div className="bg-white rounded-xl border border-stone-200 p-4 space-y-3">
            <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
              <ArrowDownLeft className="w-4 h-4 text-emerald-700" />
              <h5 className="font-serif font-bold text-stone-900 text-sm">
                Citado por ({incoming.length} parágrafos)
              </h5>
            </div>
            <p className="text-xs text-stone-500 font-sans">
              Otros parágrafos del Prontuario que remiten a § {current.id}:
            </p>

            {incoming.length === 0 ? (
              <p className="text-xs text-stone-400 italic py-4">
                Ningún otro parágrafo cita a este término directamente.
              </p>
            ) : (
              <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
                {incoming.map((p) => (
                  <div
                    key={`in-${p.id}`}
                    onClick={() => setActiveId(p.id)}
                    className="p-2 rounded-lg border border-stone-100 hover:border-emerald-400 hover:bg-emerald-50/60 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono text-xs font-semibold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 group-hover:bg-emerald-800 group-hover:text-emerald-100">
                        § {p.id}
                      </span>
                      <span className="font-serif text-sm font-medium text-stone-900 truncate">
                        {p.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-stone-400 shrink-0">
                      pág. {p.page}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-stone-100 border-t border-stone-200 text-xs text-stone-500 font-sans flex items-center justify-between">
          <span>Haz clic en cualquier nodo para centrar la red en él</span>
          <span className="font-mono text-[11px] text-stone-400">
            Total en la red: {outgoing.length + incoming.length} conexiones
          </span>
        </div>
      </div>
    </div>
  );
};
