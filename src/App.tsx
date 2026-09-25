/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ALL_PARAGRAFOS,
  PARAGRAFO_MAP,
  BLOQUES,
  BOOK_METADATA,
  getParagrafoById,
  searchParagrafos,
} from './data/prontuarioData';
import { Paragrafo } from './data/prontuarioTypes';
import { Header } from './components/Header';
import { ParagrafoCard } from './components/ParagrafoCard';
import { ReferencePopover } from './components/ReferencePopover';
import { SplitViewComparator } from './components/SplitViewComparator';
import { NavigationHistoryBanner } from './components/NavigationHistoryBanner';
import { IndiceVocesModal } from './components/IndiceVocesModal';
import { AbreviaturasModal } from './components/AbreviaturasModal';
import { ReferenceNetworkModal } from './components/ReferenceNetworkModal';
import { BloquesSelectorModal } from './components/BloquesSelectorModal';
import {
  BookOpen,
  Search,
  Layers,
  Sparkles,
  ArrowRight,
  Filter,
  Columns,
  Bookmark,
  ChevronDown,
  Info,
  Check,
  Compass
} from 'lucide-react';

export default function App() {
  // Navigation & selection state
  const [activeId, setActiveId] = useState<number>(1);
  const [highlightedId, setHighlightedId] = useState<number | null>(null);
  const [navigationHistory, setNavigationHistory] = useState<number[]>([]);
  const [selectedBloqueId, setSelectedBloqueId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'continuous' | 'focus'>('continuous');

  // Split-view comparison state
  const [splitPrimaryId, setSplitPrimaryId] = useState<number>(1);
  const [splitSecondaryId, setSplitSecondaryId] = useState<number>(2);
  const [isSplitViewOpen, setIsSplitViewOpen] = useState<boolean>(false);
  const [syncComparatorWithReading, setSyncComparatorWithReading] = useState<boolean>(true);

  // Popover state for hover preview
  const [hoveredRef, setHoveredRef] = useState<{
    id: number;
    pos: { x: number; y: number };
    sourceId?: number;
  } | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isOverPopoverRef = useRef<boolean>(false);

  // Modals state
  const [isIndiceOpen, setIsIndiceOpen] = useState<boolean>(false);
  const [isAbreviaturasOpen, setIsAbreviaturasOpen] = useState<boolean>(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState<boolean>(false);
  const [networkFocusId, setNetworkFocusId] = useState<number | null>(1);
  const [isBloquesModalOpen, setIsBloquesModalOpen] = useState<boolean>(false);

  // Bookmarks state (persistent in localStorage)
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('prontuario_bookmarks');
      return saved ? JSON.parse(saved) : [1, 2, 33, 74, 186];
    } catch {
      return [1, 2, 33, 74, 186];
    }
  });
  const [showBookmarksOnly, setShowBookmarksOnly] = useState<boolean>(false);

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('prontuario_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn('Could not save bookmarks to localStorage', e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: number) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((bId) => bId !== id) : [...prev, id]
    );
  };

  // URL Hash handling on initial load (e.g. #p-33)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/#p-(\d+)/);
      if (match) {
        const id = parseInt(match[1], 10);
        if (PARAGRAFO_MAP.has(id)) {
          handleNavigate(id, false);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Filtered list of paragraphs
  const filteredParagrafos = useMemo(() => {
    let list = ALL_PARAGRAFOS;

    // Filter by Bloque
    if (selectedBloqueId !== null) {
      list = list.filter((p) => p.bloqueId === selectedBloqueId);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      list = searchParagrafos(searchQuery);
      if (selectedBloqueId !== null) {
        list = list.filter((p) => p.bloqueId === selectedBloqueId);
      }
    }

    // Filter by Bookmarks
    if (showBookmarksOnly) {
      list = list.filter((p) => bookmarkedIds.includes(p.id));
    }

    return list;
  }, [selectedBloqueId, searchQuery, showBookmarksOnly, bookmarkedIds]);

  // Main navigation action: jump smoothly to a paragraph and highlight it!
  const handleNavigate = (targetId: number, recordHistory = true) => {
    if (!PARAGRAFO_MAP.has(targetId)) return;

    // Record jump in navigation history if jumping from another paragraph
    if (recordHistory && activeId !== targetId) {
      setNavigationHistory((prev) => [...prev, activeId]);
    }

    setActiveId(targetId);
    setHighlightedId(targetId);

    // If comparator is open, update first item to the selected/navigated item!
    if (isSplitViewOpen) {
      setSplitPrimaryId(targetId);
    }

    // If target is in a different bloque currently hidden by filter, reset filter so it's visible
    const target = getParagrafoById(targetId);
    if (target && selectedBloqueId !== null && target.bloqueId !== selectedBloqueId) {
      setSelectedBloqueId(null);
    }
    if (showBookmarksOnly && !bookmarkedIds.includes(targetId)) {
      setShowBookmarksOnly(false);
    }

    // Update URL hash
    window.history.replaceState(null, '', `#p-${targetId}`);

    // Close hover popover
    setHoveredRef(null);

    // Smooth scroll to target card if in continuous mode
    setTimeout(() => {
      const el = document.getElementById(`paragrafo-${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);

    // Remove highlight pulse after 3 seconds
    setTimeout(() => {
      setHighlightedId(null);
    }, 3200);
  };

  // Card selection in continuous mode:
  // Selecting a card sets it as active AND immediately updates the first item of the comparator!
  const handleSelectCard = (id: number) => {
    setActiveId(id);
    if (isSplitViewOpen) {
      setSplitPrimaryId(id);
    }
  };

  const handleSetSplitPrimary = (id: number) => {
    setSplitPrimaryId(id);
    setActiveId(id);
    if (!isSplitViewOpen) {
      setIsSplitViewOpen(true);
    }
  };

  const handleSetSplitSecondary = (id: number) => {
    setSplitSecondaryId(id);
    if (!isSplitViewOpen) {
      setIsSplitViewOpen(true);
    }
  };

  // Continuous mode scroll observer: automatically updates activeId and syncs primary comparator if enabled
  useEffect(() => {
    if (viewMode !== 'continuous') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          const match = visible.target.id.match(/^paragrafo-(\d+)$/);
          if (match) {
            const id = parseInt(match[1], 10);
            setActiveId(id);
            if (isSplitViewOpen && syncComparatorWithReading) {
              setSplitPrimaryId(id);
            }
          }
        }
      },
      {
        rootMargin: '-15% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    const cards = document.querySelectorAll('[id^="paragrafo-"]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [viewMode, filteredParagrafos, isSplitViewOpen, syncComparatorWithReading]);

  // History back action
  const handleHistoryBack = () => {
    if (navigationHistory.length === 0) return;
    const lastId = navigationHistory[navigationHistory.length - 1];
    setNavigationHistory((prev) => prev.slice(0, prev.length - 1));
    handleNavigate(lastId, false);
  };

  // Hover handlers for paragraph reference callouts
  const handleHoverReference = (id: number, pos: { x: number; y: number }, sourceId?: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredRef({ id, pos, sourceId });
  };

  const handleLeaveReference = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isOverPopoverRef.current) {
        setHoveredRef(null);
      }
    }, 280);
  };

  const handleMouseEnterPopover = () => {
    isOverPopoverRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseLeavePopover = () => {
    isOverPopoverRef.current = false;
    setHoveredRef(null);
  };

  // Compare side-by-side action: compares source with target, or sets target with its primary cross reference
  const handleCompare = (targetId: number, sourceId?: number) => {
    if (sourceId !== undefined && sourceId !== targetId) {
      setSplitPrimaryId(sourceId);
      setSplitSecondaryId(targetId);
    } else {
      setSplitPrimaryId(targetId);
      const targetP = getParagrafoById(targetId);
      const firstRef = targetP?.crossReferences[0];
      const fallback = targetId === 1 ? 2 : 1;
      setSplitSecondaryId(firstRef ?? fallback);
    }
    setIsSplitViewOpen(true);
  };

  const handleSwapSplitSides = () => {
    const prevPrimary = splitPrimaryId;
    const prevSecondary = splitSecondaryId;
    setSplitPrimaryId(prevSecondary);
    setSplitSecondaryId(prevPrimary);
  };

  const handleOpenNetwork = (targetId?: number) => {
    setNetworkFocusId(targetId || activeId);
    setIsNetworkModalOpen(true);
  };

  const activeParagrafo = getParagrafoById(activeId) || ALL_PARAGRAFOS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 selection:bg-amber-200">
      {/* Top Bar Header */}
      <Header
        onOpenIndice={() => setIsIndiceOpen(true)}
        onOpenAbreviaturas={() => setIsAbreviaturasOpen(true)}
        onOpenNetwork={() => handleOpenNetwork(activeId)}
        onToggleSplitView={() => {
          if (!isSplitViewOpen) {
            handleCompare(activeId);
          } else {
            setIsSplitViewOpen(false);
          }
        }}
        isSplitViewActive={isSplitViewOpen}
        bookmarkedCount={bookmarkedIds.length}
        onFilterBookmarks={() => setShowBookmarksOnly(!showBookmarksOnly)}
        isShowingBookmarksOnly={showBookmarksOnly}
        onSelectBloqueModal={() => setIsBloquesModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Strip / Instructions banner for hypertext navigation */}
      <section className="border-b border-stone-200/80 bg-gradient-to-r from-[#F6F2E8] via-[#FAF7F0] to-[#F6F2E8] py-2.5 sm:py-3.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-stone-700">
            <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse shrink-0" />
            <span className="font-serif font-bold text-amber-950 text-xs sm:text-sm">
              Lector Hipertextual:
            </span>
            <span className="font-sans text-stone-600 text-xs sm:text-sm">
              Toca o pasa sobre cualquier llamada <strong className="text-amber-900 font-serif font-semibold">(§ X)</strong> para previsualizar o saltar.
            </span>
          </div>

          {/* Quick Bloque Badges */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedBloqueId(null)}
              className={`px-2.5 py-1 rounded-md text-xs font-serif font-semibold transition-colors cursor-pointer shrink-0 ${
                selectedBloqueId === null
                  ? 'bg-amber-950 text-amber-100 shadow-xs'
                  : 'bg-stone-200/70 hover:bg-stone-300 text-stone-700'
              }`}
            >
              Todos (224)
            </button>
            {BLOQUES.map((b) => (
              <button
                key={b.id}
                onClick={() =>
                  setSelectedBloqueId(selectedBloqueId === b.id ? null : b.id)
                }
                title={b.title}
                className={`px-2 py-1 rounded-md text-xs font-serif font-semibold transition-colors cursor-pointer shrink-0 ${
                  selectedBloqueId === b.id
                    ? 'bg-amber-900 text-amber-50 shadow-xs'
                    : 'bg-white hover:bg-amber-100/60 border border-stone-200 text-stone-700'
                }`}
              >
                Bloque {b.romanNumeral}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Split-View Comparator Bar */}
      {isSplitViewOpen && (
        <SplitViewComparator
          primaryId={splitPrimaryId}
          secondaryId={splitSecondaryId}
          onSelectPrimary={(id) => setSplitPrimaryId(id)}
          onSelectSecondary={(id) => setSplitSecondaryId(id)}
          onSwapSides={handleSwapSplitSides}
          onClose={() => setIsSplitViewOpen(false)}
          onNavigateToMain={(id) => handleNavigate(id)}
          onHoverReference={handleHoverReference}
          onLeaveReference={handleLeaveReference}
          syncWithReading={syncComparatorWithReading}
          onToggleSyncWithReading={() => setSyncComparatorWithReading((prev) => !prev)}
          activeReadingId={activeId}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-6 py-4 sm:py-8">
        {/* Active Filter Bar (if searching or filtering) */}
        {(selectedBloqueId !== null || searchQuery.trim() || showBookmarksOnly) && (
          <div className="mb-4 sm:mb-6 p-3 bg-amber-50/80 border border-amber-200 rounded-xl flex flex-wrap items-center justify-between gap-2.5 text-xs font-sans">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-amber-800 shrink-0" />
              <span className="font-semibold text-amber-950">Filtro aplicado:</span>
              {selectedBloqueId !== null && (
                <span className="px-2 py-0.5 rounded bg-white border border-amber-300 text-amber-900 font-medium">
                  {BLOQUES.find((b) => b.id === selectedBloqueId)?.title}
                </span>
              )}
              {searchQuery.trim() && (
                <span className="px-2 py-0.5 rounded bg-white border border-amber-300 text-amber-900 font-medium">
                  Búsqueda: «{searchQuery}»
                </span>
              )}
              {showBookmarksOnly && (
                <span className="px-2 py-0.5 rounded bg-white border border-amber-300 text-amber-900 font-medium">
                  Sólo parágrafos guardados
                </span>
              )}
            </div>

            <button
              onClick={() => {
                setSelectedBloqueId(null);
                setSearchQuery('');
                setShowBookmarksOnly(false);
              }}
              className="text-amber-900 font-semibold hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* View Mode Switcher & Counter */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-stone-200/80">
          <div className="flex items-center gap-2 sm:gap-3">
            <h2 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 truncate">
              {selectedBloqueId !== null
                ? BLOQUES.find((b) => b.id === selectedBloqueId)?.title
                : 'Cuerpo de Jurisprudencia Romana'}
            </h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-200/80 text-stone-700 shrink-0">
              {filteredParagrafos.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="text-xs text-stone-500 font-sans hidden sm:inline">
              Modo:
            </span>
            <div className="flex items-center p-0.5 sm:p-1 bg-stone-200/60 rounded-lg text-xs font-sans font-medium">
              <button
                onClick={() => setViewMode('continuous')}
                className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'continuous'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Continuo
              </button>
              <button
                onClick={() => setViewMode('focus')}
                className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'focus'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Foco (§ {activeId})
              </button>
            </div>
          </div>
        </div>

        {/* Quick selector / jumper strip available in both Continuous and Focus mode */}
        {filteredParagrafos.length > 0 && (
          <div className="mb-4 sm:mb-6 pb-2 border-b border-stone-200/90">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-serif font-bold text-stone-700 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-800" />
                <span>Navegador Rápido:</span>
              </span>
              <span className="text-[11px] font-sans text-stone-500 hidden sm:inline">
                {viewMode === 'continuous'
                  ? 'Pulsa un parágrafo para desplazarte y seleccionarlo (columna 1.ª en comparador)'
                  : 'Pulsa para enfocar y comparar'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
              {filteredParagrafos.map((p) => (
                <button
                  key={`nav-strip-${p.id}`}
                  onClick={() => {
                    handleNavigate(p.id);
                    if (isSplitViewOpen) {
                      setSplitPrimaryId(p.id);
                    }
                  }}
                  title={`§ ${p.id}. ${p.title} (${p.bloqueTitle})`}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer ${
                    activeId === p.id
                      ? 'bg-amber-900 text-white shadow-2xs ring-2 ring-amber-700/60'
                      : isSplitViewOpen && splitSecondaryId === p.id
                      ? 'bg-amber-100 border border-amber-400 text-amber-950 font-bold'
                      : 'bg-white hover:bg-stone-100 border border-stone-200 text-stone-700'
                  }`}
                >
                  § {p.id}
                  <span className="hidden md:inline font-serif font-normal ml-1 text-[11px]">
                    {p.title.length > 18 ? p.title.slice(0, 16) + '...' : p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Paragraphs Display */}
        {filteredParagrafos.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-sm">
            <BookOpen className="w-12 h-12 text-stone-300 mx-auto" />
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-800">
              No se encontraron parágrafos
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto font-sans">
              No hay resultados que coincidan con los criterios de búsqueda actuales. Intenta limpiar el buscador o seleccionar otro bloque temático.
            </p>
            <button
              onClick={() => {
                setSelectedBloqueId(null);
                setSearchQuery('');
                setShowBookmarksOnly(false);
              }}
              className="px-4 py-2 bg-amber-900 text-white rounded-lg text-xs font-sans font-medium cursor-pointer"
            >
              Ver todos los parágrafos
            </button>
          </div>
        ) : viewMode === 'continuous' ? (
          /* Continuous book reading mode */
          <div className="space-y-6 sm:space-y-8">
            {filteredParagrafos.map((paragrafo) => (
              <ParagrafoCard
                key={paragrafo.id}
                paragrafo={paragrafo}
                isActive={activeId === paragrafo.id}
                isHighlighted={highlightedId === paragrafo.id}
                isSplitPrimary={isSplitViewOpen && splitPrimaryId === paragrafo.id}
                isSplitSecondary={isSplitViewOpen && splitSecondaryId === paragrafo.id}
                isSplitOpen={isSplitViewOpen}
                onSelectCard={handleSelectCard}
                onNavigate={handleNavigate}
                onHoverReference={handleHoverReference}
                onLeaveReference={handleLeaveReference}
                onCompare={handleCompare}
                onSetPrimary={handleSetSplitPrimary}
                onSetSecondary={handleSetSplitSecondary}
                onOpenNetwork={handleOpenNetwork}
                highlightQuery={searchQuery}
                isBookmarked={bookmarkedIds.includes(paragrafo.id)}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        ) : (
          /* Single focus mode */
          <div className="space-y-4">
            <ParagrafoCard
              paragrafo={activeParagrafo}
              isActive={true}
              isHighlighted={highlightedId === activeParagrafo.id}
              isSplitPrimary={isSplitViewOpen && splitPrimaryId === activeParagrafo.id}
              isSplitSecondary={isSplitViewOpen && splitSecondaryId === activeParagrafo.id}
              isSplitOpen={isSplitViewOpen}
              onSelectCard={handleSelectCard}
              onNavigate={handleNavigate}
              onHoverReference={handleHoverReference}
              onLeaveReference={handleLeaveReference}
              onCompare={handleCompare}
              onSetPrimary={handleSetSplitPrimary}
              onSetSecondary={handleSetSplitSecondary}
              onOpenNetwork={handleOpenNetwork}
              highlightQuery={searchQuery}
              isBookmarked={bookmarkedIds.includes(activeParagrafo.id)}
              onToggleBookmark={toggleBookmark}
            />
          </div>
        )}
      </main>

      {/* Floating Popover on reference hover/tap */}
      {hoveredRef && (
        <ReferencePopover
          paragrafoId={hoveredRef.id}
          sourceId={hoveredRef.sourceId}
          position={hoveredRef.pos}
          onNavigate={handleNavigate}
          onCompare={handleCompare}
          onClose={() => setHoveredRef(null)}
          onMouseEnterPopover={handleMouseEnterPopover}
          onMouseLeavePopover={handleMouseLeavePopover}
        />
      )}

      {/* Floating Navigation History Banner ("Volver a § X") */}
      <NavigationHistoryBanner
        historyStack={navigationHistory}
        onBack={handleHistoryBack}
        onClearHistory={() => setNavigationHistory([])}
      />

      {/* A-Z Index Modal */}
      <IndiceVocesModal
        isOpen={isIndiceOpen}
        onClose={() => setIsIndiceOpen(false)}
        onSelectParagrafo={(id) => handleNavigate(id)}
      />

      {/* Latin Abbreviations Modal */}
      <AbreviaturasModal
        isOpen={isAbreviaturasOpen}
        onClose={() => setIsAbreviaturasOpen(false)}
      />

      {/* Interactive Conceptual Network Modal */}
      <ReferenceNetworkModal
        paragrafoId={networkFocusId}
        isOpen={isNetworkModalOpen}
        onClose={() => setIsNetworkModalOpen(false)}
        onNavigate={(id) => handleNavigate(id)}
      />

      {/* Thematic Blocks Selector Modal */}
      <BloquesSelectorModal
        isOpen={isBloquesModalOpen}
        onClose={() => setIsBloquesModalOpen(false)}
        selectedBloqueId={selectedBloqueId}
        onSelectBloque={setSelectedBloqueId}
      />

      {/* Scholarly Footer */}
      <footer className="mt-12 sm:mt-16 border-t border-stone-200/90 bg-[#F5F2EB] py-8 sm:py-10 px-4 sm:px-6 text-stone-600 text-xs font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-serif font-bold text-stone-900 text-sm">
              {BOOK_METADATA.title} · {BOOK_METADATA.edition}
            </p>
            <p className="text-stone-500">
              Autor: {BOOK_METADATA.author} · Catedrático de Derecho Romano (UPO Sevilla)
            </p>
            <p className="text-stone-400 text-[11px]">
              {BOOK_METADATA.publisher} · 224 Parágrafos Hiperenlazados · Sistema de Navegación Cruzada
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-stone-600">
            <button
              onClick={() => setIsIndiceOpen(true)}
              className="hover:text-amber-900 hover:underline cursor-pointer py-1"
            >
              Índice de Voces (A–Z)
            </button>
            <button
              onClick={() => setIsBloquesModalOpen(true)}
              className="hover:text-amber-900 hover:underline cursor-pointer py-1"
            >
              Bloques Temáticos
            </button>
            <button
              onClick={() => setIsAbreviaturasOpen(true)}
              className="hover:text-amber-900 hover:underline cursor-pointer py-1"
            >
              Abreviaturas Clásicas
            </button>
            <button
              onClick={() => handleOpenNetwork(activeId)}
              className="hover:text-amber-900 hover:underline cursor-pointer py-1"
            >
              Red de Citas
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
