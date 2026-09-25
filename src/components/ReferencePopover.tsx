import React from 'react';
import { getParagrafoById } from '../data/prontuarioData';
import { Paragrafo } from '../data/prontuarioTypes';
import { ArrowRight, Columns, BookOpen, ExternalLink, Hash, X } from 'lucide-react';

interface ReferencePopoverProps {
  paragrafoId: number;
  sourceId?: number;
  position: { x: number; y: number } | null;
  onNavigate: (id: number) => void;
  onCompare?: (targetId: number, sourceId?: number) => void;
  onClose: () => void;
  onMouseEnterPopover?: () => void;
  onMouseLeavePopover?: () => void;
}

export const ReferencePopover: React.FC<ReferencePopoverProps> = ({
  paragrafoId,
  sourceId,
  position,
  onNavigate,
  onCompare,
  onClose,
  onMouseEnterPopover,
  onMouseLeavePopover,
}) => {
  if (!position) return null;

  const p: Paragrafo | undefined = getParagrafoById(paragrafoId);
  if (!p) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // On desktop, calculate safe window position to prevent viewport overflow
  const popoverWidth = typeof window !== 'undefined' ? Math.min(380, window.innerWidth - 32) : 380;
  const popoverHeight = 280;
  const padding = 16;

  let left = position.x - popoverWidth / 2;
  let top = position.y + 18;

  if (typeof window !== 'undefined') {
    if (left + popoverWidth > window.innerWidth - padding) {
      left = window.innerWidth - popoverWidth - padding;
    }
    if (left < padding) {
      left = padding;
    }
    if (top + popoverHeight > window.innerHeight - padding) {
      top = position.y - popoverHeight - 14;
    }
    if (top < padding) {
      top = padding;
    }
  }

  // On Mobile: Bottom sheet card with backdrop for easy thumb access
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center p-3 bg-stone-950/40 backdrop-blur-xs animate-in fade-in duration-150">
        <div
          className="w-full max-w-md bg-[#FDFBF7] text-stone-900 border border-amber-300 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-200"
          onMouseEnter={onMouseEnterPopover}
          onMouseLeave={onMouseLeavePopover}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-stone-800 px-4 py-2.5 text-amber-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-amber-700/80 border border-amber-500/40 text-amber-100">
                § {p.id}
              </span>
              <span className="text-xs uppercase tracking-wider text-amber-200/90 font-medium truncate max-w-[180px]">
                {p.bloqueTitle.split(':')[0]}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-lg text-amber-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-2.5">
            <div>
              <h4 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                {p.title}
              </h4>
              {p.latinTitle && (
                <p className="text-xs italic text-amber-900/80 font-serif">
                  {p.latinTitle}
                </p>
              )}
            </div>

            <p className="text-xs text-stone-700 leading-relaxed line-clamp-3 font-sans border-l-2 border-amber-400/80 pl-2.5 bg-amber-50/40 py-1 rounded-r">
              {p.summary}
            </p>

            <div className="pt-2 border-t border-stone-200 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  onNavigate(p.id);
                  onClose();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm cursor-pointer"
              >
                <span>Ir a § {p.id}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {onCompare && (
                <button
                  type="button"
                  onClick={() => {
                    onCompare(p.id, sourceId);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-colors border border-stone-300 cursor-pointer"
                >
                  <Columns className="w-3.5 h-3.5 text-stone-600" />
                  <span>Comparar</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Floating Popover
  return (
    <div
      style={{
        position: 'fixed',
        left: `${left}px`,
        top: `${top}px`,
        width: `${popoverWidth}px`,
        zIndex: 9999,
      }}
      className="bg-[#FDFBF7] text-stone-900 border border-amber-200/90 rounded-xl shadow-2xl shadow-stone-900/15 overflow-hidden animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md"
      onMouseEnter={onMouseEnterPopover}
      onMouseLeave={onMouseLeavePopover}
    >
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-stone-800 px-4 py-2.5 text-amber-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-amber-700/80 border border-amber-500/40 text-amber-100">
            § {p.id}
          </span>
          <span className="text-xs uppercase tracking-wider text-amber-200/90 font-medium truncate max-w-[200px]">
            {p.bloqueTitle.split(':')[0]}
          </span>
        </div>
        <span className="text-[11px] text-amber-300/80 font-mono">
          pág. {p.page}
        </span>
      </div>

      <div className="p-4 space-y-2.5">
        <div>
          <h4 className="font-serif text-lg font-bold text-stone-900 leading-snug">
            {p.title}
          </h4>
          {p.latinTitle && (
            <p className="text-xs italic text-amber-900/80 font-serif">
              {p.latinTitle}
            </p>
          )}
        </div>

        <p className="text-xs text-stone-700 leading-relaxed line-clamp-3 font-sans border-l-2 border-amber-400/80 pl-2.5 bg-amber-50/40 py-1 rounded-r">
          {p.summary}
        </p>

        {p.latinCitations && p.latinCitations.length > 0 && (
          <div className="text-[11px] font-serif italic text-stone-600 truncate bg-stone-100/70 px-2 py-1 rounded border border-stone-200/60">
            «{p.latinCitations[0]}»
          </div>
        )}

        <div className="pt-2 border-t border-stone-200 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => {
              onNavigate(p.id);
              onClose();
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-medium transition-colors shadow-sm cursor-pointer"
          >
            <span>Ir a § {p.id}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {onCompare && (
            <button
              type="button"
              onClick={() => {
                onCompare(p.id, sourceId);
                onClose();
              }}
              title="Abrir en vista dividida para comparar"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium transition-colors border border-stone-300 cursor-pointer"
            >
              <Columns className="w-3.5 h-3.5 text-stone-600" />
              <span>Comparar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
