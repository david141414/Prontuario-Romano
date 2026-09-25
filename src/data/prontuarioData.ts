import { Paragrafo, Bloque, BLOQUES, ABREVIATURAS } from './prontuarioTypes';
import { BLOQUE_1_PARAGRAFOS } from './bloques/bloque1';
import { BLOQUE_2_PARAGRAFOS } from './bloques/bloque2';
import { BLOQUE_3_PARAGRAFOS } from './bloques/bloque3';
import { BLOQUE_4_PARAGRAFOS } from './bloques/bloque4';
import { BLOQUE_5_PARAGRAFOS } from './bloques/bloque5';
import { BLOQUE_6_PARAGRAFOS } from './bloques/bloque6';

export * from './prontuarioTypes';

export const ALL_PARAGRAFOS: Paragrafo[] = [
  ...BLOQUE_1_PARAGRAFOS,
  ...BLOQUE_2_PARAGRAFOS,
  ...BLOQUE_3_PARAGRAFOS,
  ...BLOQUE_4_PARAGRAFOS,
  ...BLOQUE_5_PARAGRAFOS,
  ...BLOQUE_6_PARAGRAFOS,
].sort((a, b) => a.id - b.id);

// Ensure all textual references in content are included in crossReferences
ALL_PARAGRAFOS.forEach(p => {
  const contentText = p.content.join(' ');
  const numRegex = /§§?\s*(\d+)/g;
  let m;
  const set = new Set(p.crossReferences);
  while ((m = numRegex.exec(contentText)) !== null) {
    const num = parseInt(m[1], 10);
    if (num >= 1 && num <= 224 && num !== p.id) {
      set.add(num);
    }
  }
  p.crossReferences = Array.from(set).sort((a, b) => a - b);
});

export const PARAGRAFO_MAP = new Map<number, Paragrafo>();
ALL_PARAGRAFOS.forEach(p => PARAGRAFO_MAP.set(p.id, p));

// Pre-compute incoming cross references (who cites paragraph X)
export const INCOMING_REFERENCES_MAP = new Map<number, number[]>();
ALL_PARAGRAFOS.forEach(p => {
  p.crossReferences.forEach(targetId => {
    const current = INCOMING_REFERENCES_MAP.get(targetId) || [];
    if (!current.includes(p.id)) {
      current.push(p.id);
      INCOMING_REFERENCES_MAP.set(targetId, current);
    }
  });
});

export function getParagrafoById(id: number): Paragrafo | undefined {
  return PARAGRAFO_MAP.get(id);
}

export function getIncomingReferences(id: number): Paragrafo[] {
  const ids = INCOMING_REFERENCES_MAP.get(id) || [];
  return ids
    .map(pId => PARAGRAFO_MAP.get(pId))
    .filter((p): p is Paragrafo => p !== undefined)
    .sort((a, b) => a.id - b.id);
}

export function getOutgoingReferences(id: number): Paragrafo[] {
  const p = PARAGRAFO_MAP.get(id);
  if (!p) return [];
  return p.crossReferences
    .map(pId => PARAGRAFO_MAP.get(pId))
    .filter((p): p is Paragrafo => p !== undefined)
    .sort((a, b) => a.id - b.id);
}

export function getParagrafosByBloque(bloqueId: number): Paragrafo[] {
  return ALL_PARAGRAFOS.filter(p => p.bloqueId === bloqueId);
}

export function searchParagrafos(query: string): Paragrafo[] {
  if (!query.trim()) return ALL_PARAGRAFOS;
  const q = query.toLowerCase().trim();

  // If query is just a number or § followed by number
  const numMatch = q.match(/^§?\s*(\d+)$/);
  if (numMatch) {
    const id = parseInt(numMatch[1], 10);
    const found = PARAGRAFO_MAP.get(id);
    if (found) return [found];
  }

  return ALL_PARAGRAFOS.filter(p => {
    return (
      p.title.toLowerCase().includes(q) ||
      (p.latinTitle && p.latinTitle.toLowerCase().includes(q)) ||
      p.summary.toLowerCase().includes(q) ||
      p.content.some(c => c.toLowerCase().includes(q)) ||
      (p.keyFigures && p.keyFigures.some(kf => kf.toLowerCase().includes(q))) ||
      (p.latinCitations && p.latinCitations.some(lc => lc.toLowerCase().includes(q)))
    );
  });
}

export const BOOK_METADATA = {
  title: 'Prontuario de Jurisprudencia Romana',
  edition: '2.ª Edición',
  author: 'Bernardo Periñán Gómez',
  authorBio: 'Catedrático de Derecho Romano en la Universidad Pablo de Olavide, de Sevilla. Ha realizado estancias de investigación en Pavía, Padua, Harvard y Cambridge. Director de la Colección «Persona» de Editorial Comares.',
  publisher: 'Editorial Comares, Granada',
  totalParagrafos: ALL_PARAGRAFOS.length,
  totalBloques: BLOQUES.length,
};
