import React, { useState } from 'react';
import {
  Columns,
  Search,
  BookOpen,
  Bookmark,
  BookText,
  Menu,
  X,
  Layers,
  Network,
  HelpCircle,
  Hash
} from 'lucide-react';

interface HeaderProps {
  onOpenIndice: () => void;
  onOpenAbreviaturas: () => void;
  onOpenNetwork: () => void;
  onToggleSplitView: () => void;
  isSplitViewActive: boolean;
  bookmarkedCount: number;
  onFilterBookmarks: () => void;
  isShowingBookmarksOnly: boolean;
  onSelectBloqueModal: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenIndice,
  onOpenAbreviaturas,
  onOpenNetwork,
  onToggleSplitView,
  isSplitViewActive,
  bookmarkedCount,
  onFilterBookmarks,
  isShowingBookmarksOnly,
  onSelectBloqueModal,
  searchQuery,
  onSearchChange,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Wordmark */}
        <a
          href="/"
          className="font-serif text-sm sm:text-lg font-bold tracking-tight text-amber-950 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <BookText className="w-5 h-5 text-amber-800 shrink-0" />
          <span className="hidden sm:inline">Prontuario de Jurisprudencia Romana</span>
          <span className="sm:hidden font-roman-title">Prontuario Romano</span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-sans font-medium text-stone-600 shrink-0">
          <button
            type="button"
            onClick={onOpenIndice}
            className="hover:text-amber-950 transition-colors cursor-pointer hover:underline underline-offset-4 decoration-stone-300"
          >
            Índice de Voces (A–Z)
          </button>
          <button
            type="button"
            onClick={onSelectBloqueModal}
            className="hover:text-amber-950 transition-colors cursor-pointer hover:underline underline-offset-4 decoration-stone-300"
          >
            Bloques Temáticos
          </button>
          <button
            type="button"
            onClick={onOpenNetwork}
            className="hover:text-amber-950 transition-colors cursor-pointer hover:underline underline-offset-4 decoration-stone-300"
          >
            Red de Citas
          </button>
          <button
            type="button"
            onClick={onOpenAbreviaturas}
            className="hover:text-amber-950 transition-colors cursor-pointer hover:underline underline-offset-4 decoration-stone-300"
          >
            Abreviaturas
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Desktop Search Input */}
          <div className="relative hidden md:block w-44 lg:w-56 xl:w-64">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar en el texto o §..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-100/90 hover:bg-stone-100 focus:bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-800 text-stone-900 placeholder:text-stone-400 font-sans transition-colors"
            />
          </div>

          {/* Mobile search toggle button */}
          <button
            type="button"
            onClick={() => setIsMobileSearchVisible(!isMobileSearchVisible)}
            title="Buscar"
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Bookmarks toggle */}
          {bookmarkedCount > 0 && (
            <button
              type="button"
              onClick={onFilterBookmarks}
              title={
                isShowingBookmarksOnly
                  ? 'Ver todos los parágrafos'
                  : 'Ver sólo parágrafos guardados'
              }
              className={`p-2 rounded-lg text-xs font-medium font-sans flex items-center gap-1.5 transition-colors cursor-pointer border ${
                isShowingBookmarksOnly
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-white hover:bg-stone-100 border-stone-200 text-stone-700'
              }`}
            >
              <Bookmark className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline font-mono">{bookmarkedCount}</span>
            </button>
          )}

          {/* Comparador Split-view toggle */}
          <button
            type="button"
            onClick={onToggleSplitView}
            className={`px-2.5 sm:px-3 py-1.5 text-xs font-sans font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-2xs ${
              isSplitViewActive
                ? 'bg-amber-900 text-white'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isSplitViewActive ? 'Cerrar Comparador' : 'Comparador'}
            </span>
            <span className="sm:hidden">
              {isSplitViewActive ? 'Cerrar' : 'Comparar'}
            </span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Input Drawer (expandable) */}
      {isMobileSearchVisible && (
        <div className="md:hidden px-4 py-2.5 bg-stone-100/95 border-t border-stone-200 flex items-center gap-2 animate-in slide-in-from-top-2 duration-150">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              placeholder="Buscar en el texto o número §..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-800/40 text-stone-900 placeholder:text-stone-400 font-sans"
            />
          </div>
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="text-xs text-stone-500 hover:text-stone-800 font-medium px-2 py-1"
            >
              Borrar
            </button>
          )}
        </div>
      )}

      {/* Mobile Navigation Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-[#FAF8F5] border-b border-stone-300 shadow-xl z-50 p-4 space-y-2 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="text-xs font-serif font-bold uppercase tracking-wider text-amber-950/70 px-2 py-1">
            Navegación e Índices
          </div>

          <button
            type="button"
            onClick={() => {
              onOpenIndice();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-amber-100/70 text-stone-800 text-sm font-serif font-medium text-left transition-colors cursor-pointer border border-stone-200/60 bg-white"
          >
            <div className="p-1.5 rounded-lg bg-stone-100 text-stone-700">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-stone-900">Índice de Voces (A–Z)</div>
              <div className="text-xs text-stone-500 font-sans">224 conceptos jurídicos ordenados alfabéticamente</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectBloqueModal();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-amber-100/70 text-stone-800 text-sm font-serif font-medium text-left transition-colors cursor-pointer border border-stone-200/60 bg-white"
          >
            <div className="p-1.5 rounded-lg bg-stone-100 text-stone-700">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-stone-900">Bloques Temáticos</div>
              <div className="text-xs text-stone-500 font-sans">Los 6 bloques orgánicos del Prontuario</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              onOpenNetwork();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-amber-100/70 text-stone-800 text-sm font-serif font-medium text-left transition-colors cursor-pointer border border-stone-200/60 bg-white"
          >
            <div className="p-1.5 rounded-lg bg-stone-100 text-stone-700">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-stone-900">Red de Citas Cruzadas</div>
              <div className="text-xs text-stone-500 font-sans">Grafo interactivo de relaciones doctrinales</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              onOpenAbreviaturas();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-amber-100/70 text-stone-800 text-sm font-serif font-medium text-left transition-colors cursor-pointer border border-stone-200/60 bg-white"
          >
            <div className="p-1.5 rounded-lg bg-stone-100 text-stone-700">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-stone-900">Abreviaturas Clásicas</div>
              <div className="text-xs text-stone-500 font-sans">Guía de fuentes romanas (D., Gai., Inst., C.)</div>
            </div>
          </button>

          <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500 px-2 font-sans">
            <span>224 Parágrafos Hiperenlazados</span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-amber-900 font-medium hover:underline p-1 cursor-pointer"
            >
              Cerrar menú
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
