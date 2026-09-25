import React, { useState } from 'react';
import { Paragrafo } from '../data/prontuarioTypes';
import { ALL_PARAGRAFOS, getParagrafoById } from '../data/prontuarioData';
import { InteractiveText } from './InteractiveText';
import {
  X,
  ArrowLeftRight,
  Columns,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Quote,
  Sparkles,
  Link as LinkIcon,
  Check
} from 'lucide-react';

interface SplitViewComparatorProps {
  primaryId: number;
  secondaryId: number;
  onSelectPrimary: (id: number) => void;
  onSelectSecondary: (id: number) => void;
  onSwapSides: () => void;
  onClose: () => void;
  onNavigateToMain: (id: number) => void;
  onHoverReference: (id: number, pos: { x: number; y: number }, sourceId?: number) => void;
  onLeaveReference: () => void;
  syncWithReading?: boolean;
  onToggleSyncWithReading?: () => void;
  activeReadingId?: number;
}

export const SplitViewComparator: React.FC<SplitViewComparatorProps> = ({
  primaryId,
  secondaryId,
  onSelectPrimary,
  onSelectSecondary,
  onSwapSides,
  onClose,
  onNavigateToMain,
  onHoverReference,
  onLeaveReference,
  syncWithReading = true,
  onToggleSyncWithReading,
  activeReadingId,
}) => {
  const primary = getParagrafoById(primaryId) || ALL_PARAGRAFOS[0];
  const secondary = getParagrafoById(secondaryId) || ALL_PARAGRAFOS[1];

  // Mobile tab view state: 'primary' | 'secondary' | 'both'
  const [mobileTab, setMobileTab] = useState<'both' | 'primary' | 'secondary'>('both');

  return (
    <section className="bg-[#F8F5EE] border-y-2 border-amber-900/30 shadow-2xl p-3 sm:p-6 transition-all duration-300">
      {/* Comparator Top Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 sm:pb-4 mb-4 sm:mb-5 border-b border-stone-300/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-900 text-amber-100 shadow-sm shrink-0">
              <Columns className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-xl text-stone-900 leading-snug flex items-center gap-2 flex-wrap">
                <span>Comparador Doctrinal en Paralelo</span>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-stone-900 text-amber-100">
                  § {primary.id} vs § {secondary.id}
                </span>
              </h3>
              <p className="text-xs text-stone-600 font-sans hidden sm:block">
                Contrastando <strong className="text-amber-950 font-serif">§ {primary.id} ({primary.title})</strong> con <strong className="text-amber-950 font-serif">§ {secondary.id} ({secondary.title})</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Sync with reading position toggle */}
            {onToggleSyncWithReading && (
              <button
                type="button"
                onClick={onToggleSyncWithReading}
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-serif font-semibold transition-all border cursor-pointer ${
                  syncWithReading
                    ? 'bg-amber-100/90 border-amber-400 text-amber-950 shadow-2xs'
                    : 'bg-white border-stone-300 text-stone-600 hover:text-stone-900'
                }`}
                title={
                  syncWithReading
                    ? 'Sincronización activa: La columna izquierda sigue automáticamente al parágrafo que seleccionas o lees en el modo continuo.'
                    : 'Sincronización pausada: La columna izquierda queda fija en § ' + primary.id
                }
              >
                <LinkIcon className={`w-3.5 h-3.5 ${syncWithReading ? 'text-amber-800' : 'text-stone-400'}`} />
                <span className="hidden sm:inline">
                  {syncWithReading ? 'Sincronizar con lectura: Activo' : 'Sincronizar con lectura: Pausado'}
                </span>
                <span className="sm:hidden">
                  {syncWithReading ? 'Sincronizado' : 'Fijado'}
                </span>
              </button>
            )}

            {/* Swap Sides button */}
            <button
              type="button"
              onClick={onSwapSides}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white border border-stone-300 hover:border-amber-700 hover:bg-amber-50 text-stone-700 hover:text-amber-950 text-xs font-serif font-semibold transition-all shadow-2xs cursor-pointer"
              title="Intercambiar columna izquierda y derecha"
            >
              <ArrowLeftRight className="w-3.5 h-3.5 text-amber-800" />
              <span className="hidden sm:inline">Intercambiar columnas</span>
              <span className="sm:hidden">Invertir</span>
            </button>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 hover:bg-stone-200/90 rounded-lg text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              title="Cerrar vista comparativa"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Smartphone Tab Switcher (Visible only on small screens < 1024px) */}
        <div className="lg:hidden flex items-center justify-center p-1 bg-stone-200/80 rounded-xl mb-4 text-xs font-serif font-semibold">
          <button
            type="button"
            onClick={() => setMobileTab('primary')}
            className={`flex-1 py-1.5 px-2 rounded-lg transition-colors cursor-pointer text-center ${
              mobileTab === 'primary'
                ? 'bg-stone-900 text-amber-100 shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            1.º · § {primary.id}
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('secondary')}
            className={`flex-1 py-1.5 px-2 rounded-lg transition-colors cursor-pointer text-center ${
              mobileTab === 'secondary'
                ? 'bg-amber-900 text-amber-100 shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            2.º · § {secondary.id}
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('both')}
            className={`flex-1 py-1.5 px-2 rounded-lg transition-colors cursor-pointer text-center ${
              mobileTab === 'both'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Ambos
          </button>
        </div>

        {/* 2-Column Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* LEFT COLUMN: Primary Paragraph */}
          <div
            className={`bg-[#FCFBF8] rounded-2xl border-2 border-stone-800/80 p-4 sm:p-6 shadow-sm flex flex-col justify-between ${
              mobileTab === 'secondary' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            <div className="space-y-4">
              {/* Column Control Bar & Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-900 text-amber-100 shadow-2xs">
                    1.º Término · § {primary.id}
                  </span>
                  <span className="text-xs font-sans uppercase tracking-wider text-stone-600 font-semibold">
                    Columna Izquierda
                  </span>
                </div>

                {/* Dropdown selector for Left side */}
                <div className="flex items-center gap-1.5 w-full sm:w-auto">
                  <label htmlFor="left-select" className="text-xs text-stone-500 font-sans sr-only">
                    Elegir parágrafo izquierdo
                  </label>
                  <select
                    id="left-select"
                    value={primary.id}
                    onChange={(e) => onSelectPrimary(parseInt(e.target.value, 10))}
                    className="w-full sm:w-auto text-xs font-serif font-semibold bg-white border border-stone-300 rounded-md px-2.5 py-1.5 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-700 cursor-pointer max-w-full sm:max-w-[240px] shadow-2xs"
                  >
                    {ALL_PARAGRAFOS.map((p) => (
                      <option key={`left-${p.id}`} value={p.id}>
                        § {p.id}. {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Title & Metadata */}
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-1">
                  <span>{primary.bloqueTitle}</span>
                  <span>pág. {primary.page}</span>
                </div>
                <h4 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                  {primary.title}
                </h4>
                {primary.latinTitle && (
                  <p className="font-serif text-xs sm:text-sm italic text-amber-900/90 mt-0.5">
                    {primary.latinTitle}
                  </p>
                )}
              </div>

              {/* Summary */}
              <blockquote className="text-xs sm:text-sm font-sans text-stone-700 border-l-2 border-stone-800 pl-3 bg-stone-100/60 py-1.5 rounded-r">
                {primary.summary}
              </blockquote>

              {/* Full Text Content with Interactive Links */}
              <div className="space-y-3 text-xs sm:text-sm text-stone-800 leading-relaxed font-sans max-h-[340px] sm:max-h-[380px] overflow-y-auto pr-2 border-t border-stone-100 pt-3">
                {primary.content.map((paragraphText, i) => (
                  <p key={i}>
                    <InteractiveText
                      text={paragraphText}
                      onNavigate={onSelectPrimary}
                      onHoverReference={onHoverReference}
                      onLeaveReference={onLeaveReference}
                      currentParagrafoId={primary.id}
                    />
                  </p>
                ))}
              </div>

              {/* Latin citations if any */}
              {primary.latinCitations && primary.latinCitations.length > 0 && (
                <div className="text-xs font-serif italic text-stone-600 bg-stone-100/70 p-2.5 rounded-lg border border-stone-200/80">
                  <div className="font-sans not-italic text-[10px] uppercase text-stone-400 font-semibold mb-1">
                    Cita en fuentes:
                  </div>
                  «{primary.latinCitations[0]}»
                </div>
              )}
            </div>

            {/* Column Footer: Related references to contrast right */}
            <div className="mt-5 pt-3 border-t border-stone-200">
              <div className="text-[11px] font-sans uppercase tracking-wider text-stone-500 font-semibold mb-2">
                Citas doctrinales de § {primary.id} (cargar en columna derecha →):
              </div>
              <div className="flex flex-wrap gap-1.5">
                {primary.crossReferences.slice(0, 8).map((refId) => {
                  const target = getParagrafoById(refId);
                  return (
                    <button
                      key={`left-ref-${refId}`}
                      type="button"
                      onClick={() => onSelectSecondary(refId)}
                      className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded border transition-colors cursor-pointer ${
                        secondary.id === refId
                          ? 'bg-amber-900 text-white border-amber-900 font-bold'
                          : 'bg-white hover:bg-amber-100/70 border-stone-300 text-stone-700 font-medium'
                      }`}
                      title={`Cargar § ${refId} (${target?.title}) en la columna derecha`}
                    >
                      <span>§ {refId}</span>
                      <ArrowRight className="w-3 h-3 text-stone-400" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => onNavigateToMain(primary.id)}
                  className="inline-flex items-center gap-1 text-xs text-amber-900 hover:text-amber-950 font-serif font-semibold hover:underline cursor-pointer py-1"
                >
                  <span>Ver § {primary.id} en el lector continuo</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Secondary Paragraph */}
          <div
            className={`bg-[#FAF7F0] rounded-2xl border-2 border-amber-700/80 p-4 sm:p-6 shadow-sm flex flex-col justify-between ${
              mobileTab === 'primary' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            <div className="space-y-4">
              {/* Column Control Bar & Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-amber-200/80">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-900 text-amber-100 shadow-2xs">
                    2.º Término · § {secondary.id}
                  </span>
                  <span className="text-xs font-sans uppercase tracking-wider text-amber-950 font-semibold">
                    Columna Derecha
                  </span>
                </div>

                {/* Dropdown selector for Right side */}
                <div className="flex items-center gap-1.5 w-full sm:w-auto">
                  <label htmlFor="right-select" className="text-xs text-stone-500 font-sans sr-only">
                    Elegir parágrafo derecho
                  </label>
                  <select
                    id="right-select"
                    value={secondary.id}
                    onChange={(e) => onSelectSecondary(parseInt(e.target.value, 10))}
                    className="w-full sm:w-auto text-xs font-serif font-semibold bg-white border border-amber-300 rounded-md px-2.5 py-1.5 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-700 cursor-pointer max-w-full sm:max-w-[240px] shadow-2xs"
                  >
                    {ALL_PARAGRAFOS.map((p) => (
                      <option key={`right-${p.id}`} value={p.id}>
                        § {p.id}. {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Title & Metadata */}
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-1">
                  <span>{secondary.bloqueTitle}</span>
                  <span>pág. {secondary.page}</span>
                </div>
                <h4 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                  {secondary.title}
                </h4>
                {secondary.latinTitle && (
                  <p className="font-serif text-xs sm:text-sm italic text-amber-900/90 mt-0.5">
                    {secondary.latinTitle}
                  </p>
                )}
              </div>

              {/* Summary */}
              <blockquote className="text-xs sm:text-sm font-sans text-stone-700 border-l-2 border-amber-600 pl-3 bg-amber-50/60 py-1.5 rounded-r">
                {secondary.summary}
              </blockquote>

              {/* Full Text Content with Interactive Links */}
              <div className="space-y-3 text-xs sm:text-sm text-stone-800 leading-relaxed font-sans max-h-[340px] sm:max-h-[380px] overflow-y-auto pr-2 border-t border-amber-100 pt-3">
                {secondary.content.map((paragraphText, i) => (
                  <p key={i}>
                    <InteractiveText
                      text={paragraphText}
                      onNavigate={onSelectSecondary}
                      onHoverReference={onHoverReference}
                      onLeaveReference={onLeaveReference}
                      currentParagrafoId={secondary.id}
                    />
                  </p>
                ))}
              </div>

              {/* Latin citations if any */}
              {secondary.latinCitations && secondary.latinCitations.length > 0 && (
                <div className="text-xs font-serif italic text-stone-600 bg-white/70 p-2.5 rounded-lg border border-amber-200/80">
                  <div className="font-sans not-italic text-[10px] uppercase text-stone-400 font-semibold mb-1">
                    Cita en fuentes:
                  </div>
                  «{secondary.latinCitations[0]}»
                </div>
              )}
            </div>

            {/* Column Footer: Related references */}
            <div className="mt-5 pt-3 border-t border-amber-200/80">
              <div className="text-[11px] font-sans uppercase tracking-wider text-amber-900 font-semibold mb-2">
                Citas doctrinales de § {secondary.id} (cargar en columna izquierda ←):
              </div>
              <div className="flex flex-wrap gap-1.5">
                {secondary.crossReferences.slice(0, 8).map((refId) => {
                  const target = getParagrafoById(refId);
                  return (
                    <button
                      key={`right-ref-${refId}`}
                      type="button"
                      onClick={() => onSelectPrimary(refId)}
                      className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded border transition-colors cursor-pointer ${
                        primary.id === refId
                          ? 'bg-stone-900 text-white border-stone-900 font-bold'
                          : 'bg-white hover:bg-stone-100 border-amber-200 text-stone-700 font-medium'
                      }`}
                      title={`Cargar § ${refId} (${target?.title}) en la columna izquierda`}
                    >
                      <ArrowLeft className="w-3 h-3 text-stone-400" />
                      <span>§ {refId}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => onNavigateToMain(secondary.id)}
                  className="inline-flex items-center gap-1 text-xs text-amber-900 hover:text-amber-950 font-serif font-semibold hover:underline cursor-pointer py-1"
                >
                  <span>Ver § {secondary.id} en el lector continuo</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
