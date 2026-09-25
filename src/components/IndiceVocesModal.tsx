import React, { useState, useMemo } from 'react';
import { ALL_PARAGRAFOS } from '../data/prontuarioData';
import { Paragrafo } from '../data/prontuarioTypes';
import { X, Search, BookOpen, ArrowRight, Hash } from 'lucide-react';

interface IndiceVocesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectParagrafo: (id: number) => void;
}

export const IndiceVocesModal: React.FC<IndiceVocesModalProps> = ({
  isOpen,
  onClose,
  onSelectParagrafo,
}) => {
  const [query, setQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Sort alphabetically by title
  const sortedParagrafos = useMemo(() => {
    return [...ALL_PARAGRAFOS].sort((a, b) =>
      a.title.localeCompare(b.title, 'es', { sensitivity: 'base' })
    );
  }, []);

  // Get available first letters
  const letters = useMemo(() => {
    const set = new Set<string>();
    sortedParagrafos.forEach((p) => {
      const char = p.title.charAt(0).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (char >= 'A' && char <= 'Z') {
        set.add(char);
      }
    });
    return Array.from(set).sort();
  }, [sortedParagrafos]);

  const filtered = useMemo(() => {
    return sortedParagrafos.filter((p) => {
      const matchesQuery =
        !query.trim() ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.id.toString() === query.trim() ||
        (p.latinTitle && p.latinTitle.toLowerCase().includes(query.toLowerCase()));

      const char = p.title.charAt(0).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const matchesLetter = !selectedLetter || char === selectedLetter;

      return matchesQuery && matchesLetter;
    });
  }, [sortedParagrafos, query, selectedLetter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF8F5] w-full max-w-3xl max-h-[88vh] rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-200 bg-gradient-to-r from-amber-900 to-stone-900 text-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                Índice de Voces (A – Z)
              </h3>
              <p className="text-xs text-amber-200/80 font-sans">
                224 términos y parágrafos del Prontuario de Bernardo Periñán
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

        {/* Search & Letter bar */}
        <div className="p-4 border-b border-stone-200 bg-white space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar término, parágrafo (§) o concepto..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-stone-100/70 border border-stone-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-800 text-stone-900 placeholder:text-stone-400"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Letter filter */}
          <div className="flex flex-wrap gap-1 items-center justify-start text-xs font-serif">
            <button
              onClick={() => setSelectedLetter(null)}
              className={`px-2 py-1 rounded transition-colors cursor-pointer font-sans font-medium text-[11px] ${
                selectedLetter === null
                  ? 'bg-amber-900 text-white'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              Todos ({sortedParagrafos.length})
            </button>
            {letters.map((letra) => (
              <button
                key={letra}
                onClick={() =>
                  setSelectedLetter(selectedLetter === letra ? null : letra)
                }
                className={`w-6 h-6 rounded flex items-center justify-center transition-colors cursor-pointer font-semibold ${
                  selectedLetter === letra
                    ? 'bg-amber-800 text-white'
                    : 'hover:bg-stone-200 text-stone-700'
                }`}
              >
                {letra}
              </button>
            ))}
          </div>
        </div>

        {/* Voces List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-stone-100">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-stone-500 font-sans text-sm">
              No se encontraron términos que coincidan con «{query}»
            </div>
          ) : (
            filtered.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectParagrafo(p.id);
                  onClose();
                }}
                className="py-2.5 px-3 rounded-lg hover:bg-amber-50/70 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-800 group-hover:bg-amber-900 group-hover:text-amber-100 transition-colors">
                    § {p.id}
                  </span>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-semibold text-stone-900 group-hover:text-amber-950">
                      {p.title}
                    </h4>
                    {p.latinTitle && (
                      <span className="text-xs italic text-stone-500 font-serif">
                        {p.latinTitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-stone-400 font-mono hidden sm:inline">
                    pág. {p.page}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-sans hidden md:inline">
                    {p.bloqueTitle.split(':')[0]}
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-stone-100 border-t border-stone-200 text-xs text-stone-500 font-sans flex items-center justify-between">
          <span>Mostrando {filtered.length} de {ALL_PARAGRAFOS.length} voces</span>
          <span className="text-[11px] text-stone-400">Pulsa cualquier voz para saltar a su texto</span>
        </div>
      </div>
    </div>
  );
};
