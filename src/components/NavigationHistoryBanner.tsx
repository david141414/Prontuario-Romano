import React from 'react';
import { getParagrafoById } from '../data/prontuarioData';
import { ArrowLeft, History, X } from 'lucide-react';

interface NavigationHistoryBannerProps {
  historyStack: number[];
  onBack: () => void;
  onClearHistory: () => void;
}

export const NavigationHistoryBanner: React.FC<NavigationHistoryBannerProps> = ({
  historyStack,
  onBack,
  onClearHistory,
}) => {
  if (historyStack.length === 0) return null;

  const previousId = historyStack[historyStack.length - 1];
  const previousParagrafo = getParagrafoById(previousId);
  if (!previousParagrafo) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-lg w-[92%] sm:w-auto animate-in slide-in-from-bottom-3 duration-200">
      <div className="bg-stone-900 text-amber-50 px-4 py-2.5 rounded-full shadow-2xl flex items-center justify-between gap-3 border border-amber-600/30 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs font-sans">
          <History className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="text-stone-300">Saltaste desde</span>
          <span className="font-mono font-bold text-amber-300">§ {previousId}</span>
          <span className="text-stone-300 truncate max-w-[130px] hidden sm:inline">
            ({previousParagrafo.title})
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-sans font-semibold rounded-full text-xs transition-colors cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Volver a § {previousId}</span>
          </button>

          <button
            onClick={onClearHistory}
            title="Descartar historial de saltos"
            className="p-1 hover:bg-stone-800 text-stone-400 hover:text-stone-200 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
