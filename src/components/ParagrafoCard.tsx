import React, { useState } from 'react';
import { Paragrafo } from '../data/prontuarioTypes';
import { getParagrafoById, getIncomingReferences } from '../data/prontuarioData';
import { InteractiveText } from './InteractiveText';
import {
  Columns,
  Share2,
  Bookmark,
  Check,
  Network,
  ArrowUpRight,
  BookOpen,
  Quote,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';

interface ParagrafoCardProps {
  paragrafo: Paragrafo;
  isActive?: boolean;
  isHighlighted?: boolean;
  isSplitPrimary?: boolean;
  isSplitSecondary?: boolean;
  isSplitOpen?: boolean;
  onSelectCard?: (id: number) => void;
  onNavigate: (id: number) => void;
  onHoverReference: (id: number, pos: { x: number; y: number }, sourceId?: number) => void;
  onLeaveReference: () => void;
  onCompare?: (targetId: number, sourceId?: number) => void;
  onSetPrimary?: (id: number) => void;
  onSetSecondary?: (id: number) => void;
  onOpenNetwork?: (id: number) => void;
  highlightQuery?: string;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: number) => void;
}

export const ParagrafoCard: React.FC<ParagrafoCardProps> = ({
  paragrafo,
  isActive,
  isHighlighted,
  isSplitPrimary,
  isSplitSecondary,
  isSplitOpen,
  onSelectCard,
  onNavigate,
  onHoverReference,
  onLeaveReference,
  onCompare,
  onSetPrimary,
  onSetSecondary,
  onOpenNetwork,
  highlightQuery,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [copied, setCopied] = useState(false);
  const incoming = getIncomingReferences(paragrafo.id);

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#p-${paragrafo.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      id={`paragrafo-${paragrafo.id}`}
      onClick={() => onSelectCard?.(paragrafo.id)}
      className={`relative bg-[#FCFBF7] rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
        isHighlighted
          ? 'ring-3 ring-amber-500/80 border-amber-400 bg-amber-50/50 shadow-xl'
          : isSplitPrimary
          ? 'ring-2 ring-stone-900 border-stone-800 bg-stone-50/40 shadow-md'
          : isSplitSecondary
          ? 'ring-2 ring-amber-700 border-amber-600 bg-amber-50/30 shadow-md'
          : isActive
          ? 'border-amber-500/90 ring-1 ring-amber-400/60 shadow-md bg-white'
          : 'border-stone-200/90 shadow-sm hover:shadow-md hover:border-amber-300'
      }`}
    >
      {/* Editorial Header */}
      <div className="px-4 sm:px-8 pt-5 sm:pt-7 pb-4 border-b border-stone-200/70 bg-gradient-to-b from-[#F9F6EE] to-transparent">
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center font-mono font-bold text-sm sm:text-base px-2.5 py-0.5 rounded-md bg-stone-900 text-amber-100 shadow-sm">
              § {paragrafo.id}
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-stone-500 font-sans font-medium">
              {paragrafo.bloqueTitle.split(':')[0]}
            </span>

            {/* Active / Comparison Badges */}
            {isSplitPrimary && (
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-stone-900 text-amber-100 font-semibold shadow-2xs">
                <Check className="w-3 h-3 text-amber-300" />
                <span>1.º en Comparador</span>
              </span>
            )}
            {isSplitSecondary && (
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-amber-900 text-amber-100 font-semibold shadow-2xs">
                <Check className="w-3 h-3 text-amber-300" />
                <span>2.º en Comparador</span>
              </span>
            )}
            {isActive && !isSplitPrimary && !isSplitSecondary && (
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-sans px-2 py-0.5 rounded bg-amber-100 border border-amber-300 text-amber-950 font-medium">
                <span>Parágrafo activo</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 text-xs text-stone-500">
            <span className="font-mono text-stone-400 text-[11px] sm:text-xs">pág. {paragrafo.page}</span>

            <div className="h-3.5 w-[1px] bg-stone-300 mx-1" />

            {/* Quick Actions & Compare Buttons */}
            {isSplitOpen ? (
              <div className="flex items-center gap-1">
                {/* Button to set as 1st (primary) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSetPrimary) {
                      onSetPrimary(paragrafo.id);
                    } else if (onCompare) {
                      onCompare(paragrafo.id);
                    }
                  }}
                  title={
                    isSplitPrimary
                      ? 'Actualmente fijado en la columna izquierda (1.º)'
                      : `Fijar § ${paragrafo.id} como 1.er término (columna izquierda) en el comparador`
                  }
                  className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-serif font-semibold transition-all cursor-pointer ${
                    isSplitPrimary
                      ? 'bg-stone-900 text-amber-100 shadow-2xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300'
                  }`}
                >
                  <Columns className="w-3.5 h-3.5" />
                  <span>{isSplitPrimary ? '✓ 1.º' : 'Poner 1.º'}</span>
                </button>

                {/* Button to set as 2nd (secondary) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSetSecondary?.(paragrafo.id);
                  }}
                  title={
                    isSplitSecondary
                      ? 'Actualmente fijado en la columna derecha (2.º)'
                      : `Fijar § ${paragrafo.id} como 2.º término (columna derecha) en el comparador`
                  }
                  className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-serif font-semibold transition-all cursor-pointer ${
                    isSplitSecondary
                      ? 'bg-amber-900 text-amber-100 shadow-2xs'
                      : 'bg-stone-100 hover:bg-amber-100 text-stone-800 border border-stone-300'
                  }`}
                >
                  <span>{isSplitSecondary ? '✓ 2.º' : 'Poner 2.º'}</span>
                </button>
              </div>
            ) : (
              onCompare && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCompare(paragrafo.id);
                  }}
                  title={`Abrir vista comparativa con § ${paragrafo.id} como primer término`}
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 hover:bg-amber-100/90 text-stone-800 hover:text-amber-950 border border-stone-300 hover:border-amber-400 rounded-md transition-colors cursor-pointer text-[11px] sm:text-xs font-serif font-semibold shadow-2xs"
                >
                  <Columns className="w-3.5 h-3.5 text-amber-800" />
                  <span>Comparar</span>
                </button>
              )
            )}

            {onOpenNetwork && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenNetwork(paragrafo.id);
                }}
                title="Ver red de relaciones conceptuales"
                className="p-1.5 hover:bg-stone-200 text-stone-600 hover:text-stone-900 rounded-md transition-colors cursor-pointer"
              >
                <Network className="w-4 h-4" />
              </button>
            )}

            {onToggleBookmark && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(paragrafo.id);
                }}
                title={isBookmarked ? 'Eliminar de guardados' : 'Guardar parágrafo'}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-100 text-amber-800'
                    : 'hover:bg-stone-200 text-stone-600 hover:text-stone-900'
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? 'fill-amber-700' : ''}`}
                />
              </button>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleCopyLink();
              }}
              title="Copiar enlace directo al parágrafo"
              className="p-1.5 hover:bg-stone-200 text-stone-600 hover:text-stone-900 rounded-md transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-3xl font-bold text-stone-900 tracking-tight text-balance leading-snug">
          {paragrafo.title}
        </h3>

        {paragrafo.latinTitle && (
          <p className="font-serif text-xs sm:text-sm italic text-amber-900/80 mt-0.5">
            {paragrafo.latinTitle}
          </p>
        )}
      </div>

      {/* Doctrinal Summary Box */}
      <div className="px-4 sm:px-8 py-3 bg-amber-50/50 border-b border-amber-100 flex items-start gap-2.5 sm:gap-3">
        <Quote className="w-4 h-4 text-amber-700/70 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans italic">
          {paragrafo.summary}
        </p>
      </div>

      {/* Main Content Body */}
      <div className="px-4 sm:px-8 py-5 sm:py-6 space-y-3.5 sm:space-y-4 text-stone-800 leading-relaxed text-sm sm:text-base font-sans">
        {paragrafo.content.map((paragraphText, idx) => (
          <p key={idx} className="text-stone-800 leading-relaxed text-justify">
            <InteractiveText
              text={paragraphText}
              onNavigate={onNavigate}
              onHoverReference={onHoverReference}
              onLeaveReference={onLeaveReference}
              highlightQuery={highlightQuery}
              currentParagrafoId={paragrafo.id}
            />
          </p>
        ))}
      </div>

      {/* Latin Legal Citations / Maxims (if available) */}
      {paragrafo.latinCitations && paragrafo.latinCitations.length > 0 && (
        <div className="px-4 sm:px-8 py-2.5 sm:py-3 bg-stone-100/60 border-t border-stone-200/80">
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-widest text-stone-500 font-semibold block mb-1">
            Fuentes y aforismos latinos
          </span>
          <div className="space-y-1">
            {paragrafo.latinCitations.map((citation, cIdx) => (
              <p
                key={cIdx}
                className="font-serif text-xs italic text-stone-700 bg-white/70 border border-stone-200/60 px-2.5 sm:px-3 py-1.5 rounded-md"
              >
                «{citation}»
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Cross-References Footer (Outgoing & Incoming) */}
      <div className="px-4 sm:px-8 py-3.5 sm:py-4 bg-[#F7F4EE] border-t border-stone-200/80 space-y-3">
        {/* Outgoing References (Citas en el texto) */}
        {paragrafo.crossReferences.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-500 font-sans uppercase tracking-wider font-semibold mb-2">
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-700" />
              <span>Remite a ({paragrafo.crossReferences.length} parágrafos):</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {paragrafo.crossReferences.map((refId) => {
                const target = getParagrafoById(refId);
                return (
                  <div
                    key={`out-${refId}`}
                    className="inline-flex items-center rounded-md bg-white border border-stone-300 hover:border-amber-600 shadow-2xs overflow-hidden transition-all group"
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(refId);
                      }}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        onHoverReference(
                          refId,
                          {
                            x: rect.left + rect.width / 2,
                            y: rect.bottom + 4,
                          },
                          paragrafo.id
                        );
                      }}
                      onMouseLeave={onLeaveReference}
                      className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 text-xs hover:bg-amber-50 text-stone-700 hover:text-amber-950 font-serif transition-colors cursor-pointer"
                    >
                      <span className="font-mono font-semibold text-amber-800">
                        § {refId}
                      </span>
                      <span className="truncate max-w-[110px] sm:max-w-[140px]">
                        {target ? target.title : `Parágrafo ${refId}`}
                      </span>
                    </button>
                    {onCompare && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onCompare(refId, paragrafo.id);
                        }}
                        title={`Comparar § ${paragrafo.id} vs § ${refId}`}
                        className="px-1.5 py-1 border-l border-stone-200 hover:bg-amber-100 text-stone-400 hover:text-amber-900 transition-colors cursor-pointer"
                      >
                        <Columns className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Incoming References (Citado por otros parágrafos) */}
        {incoming.length > 0 && (
          <div className="pt-2 border-t border-stone-200/60">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-500 font-sans uppercase tracking-wider font-semibold mb-2">
              <Network className="w-3.5 h-3.5 text-stone-600" />
              <span>Citado por ({incoming.length} parágrafos):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {incoming.slice(0, 10).map((inc) => (
                <button
                  key={`in-${inc.id}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(inc.id);
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    onHoverReference(
                      inc.id,
                      {
                        x: rect.left + rect.width / 2,
                        y: rect.bottom + 4,
                      },
                      paragrafo.id
                    );
                  }}
                  onMouseLeave={onLeaveReference}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-stone-200/70 hover:bg-stone-300 text-stone-800 font-serif transition-colors cursor-pointer"
                >
                  <span className="font-mono font-semibold">§ {inc.id}</span>
                  <span className="truncate max-w-[100px] sm:max-w-[120px]">{inc.title}</span>
                </button>
              ))}
              {incoming.length > 10 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenNetwork?.(paragrafo.id);
                  }}
                  className="text-xs text-amber-800 hover:underline font-medium px-2 py-0.5 cursor-pointer"
                >
                  +{incoming.length - 10} más en la red...
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
