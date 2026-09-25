import React, { useState } from 'react';
import { ABREVIATURAS } from '../data/prontuarioTypes';
import { BOOK_METADATA } from '../data/prontuarioData';
import { X, BookOpen, Info, Search } from 'lucide-react';

interface AbreviaturasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AbreviaturasModal: React.FC<AbreviaturasModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = ABREVIATURAS.filter(
    (item) =>
      item.abbr.toLowerCase().includes(query.toLowerCase()) ||
      item.full.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF8F5] w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-200 bg-gradient-to-r from-stone-900 to-amber-950 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                Abreviaturas de Fuentes y Juristas
              </h3>
              <p className="text-xs text-amber-200/80 font-sans">
                Guía de citación clásica del Prontuario (Bernardo Periñán Gómez)
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

        {/* Filter bar */}
        <div className="p-3 border-b border-stone-200 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar abreviatura (ej. D., Gai., C.J., Ulp.)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-sm bg-stone-100/70 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-800 text-stone-900 placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-stone-100 space-y-1">
          {filtered.map((item, idx) => (
            <div key={idx} className="py-2.5 px-3 rounded-lg hover:bg-amber-50/60 transition-colors">
              <div className="flex items-baseline gap-3">
                <span className="font-mono font-bold text-amber-900 text-sm w-28 shrink-0">
                  {item.abbr}
                </span>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">
                    {item.full}
                  </h4>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Bio Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 text-xs text-stone-600 font-sans space-y-1">
          <p className="font-semibold text-stone-900">
            {BOOK_METADATA.title} · {BOOK_METADATA.edition}
          </p>
          <p className="text-[11px] text-stone-500 leading-normal">
            {BOOK_METADATA.authorBio}
          </p>
        </div>
      </div>
    </div>
  );
};
