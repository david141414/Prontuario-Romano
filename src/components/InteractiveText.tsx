import React, { useRef } from 'react';
import { getParagrafoById } from '../data/prontuarioData';

interface InteractiveTextProps {
  text: string;
  onNavigate: (id: number) => void;
  onHoverReference: (id: number, pos: { x: number; y: number }, sourceId?: number) => void;
  onLeaveReference: () => void;
  highlightQuery?: string;
  currentParagrafoId?: number;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({
  text,
  onNavigate,
  onHoverReference,
  onLeaveReference,
  highlightQuery,
  currentParagrafoId,
}) => {
  // Regex to match paragraph references like (§ 33), (§§ 56, 58), (§ 16, § 74), (v. § 33), etc.
  const referenceRegex = /\((?:(?:v\.|vid\.|véase|cfr\.)\s*)?§§?[\s\d,;yeo§.ss]+\)|(?:§§?\s*\d+)/gi;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const highlightText = (rawStr: string): React.ReactNode => {
    if (!highlightQuery || !highlightQuery.trim()) {
      return rawStr;
    }
    const escaped = highlightQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const qRegex = new RegExp(`(${escaped})`, 'gi');
    const subParts = rawStr.split(qRegex);
    return subParts.map((sub, idx) =>
      qRegex.test(sub) ? (
        <mark
          key={idx}
          className="bg-amber-200/90 text-amber-950 px-0.5 rounded font-medium"
        >
          {sub}
        </mark>
      ) : (
        sub
      )
    );
  };

  while ((match = referenceRegex.exec(text)) !== null) {
    const matchStart = match.index;
    const matchEnd = referenceRegex.lastIndex;
    const matchString = match[0];

    // Add preceding normal text
    if (matchStart > lastIndex) {
      parts.push(
        <span key={`text-${lastIndex}`}>
          {highlightText(text.slice(lastIndex, matchStart))}
        </span>
      );
    }

    // Extract numbers inside the reference
    const numbers = matchString
      .replace(/[^\d\s,]/g, ' ')
      .split(/[\s,]+/)
      .map(s => parseInt(s.trim(), 10))
      .filter(n => !isNaN(n) && n > 0);

    if (numbers.length === 0) {
      parts.push(<span key={`raw-${matchStart}`}>{matchString}</span>);
    } else if (numbers.length === 1) {
      const targetId = numbers[0];
      const targetP = getParagrafoById(targetId);
      const isSelf = currentParagrafoId === targetId;

      parts.push(
        <button
          key={`ref-${matchStart}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (targetP && !isSelf) {
              onNavigate(targetId);
            }
          }}
          onMouseEnter={(e) => {
            if (targetP) {
              const rect = e.currentTarget.getBoundingClientRect();
              onHoverReference(
                targetId,
                {
                  x: rect.left + rect.width / 2,
                  y: rect.bottom + 4,
                },
                currentParagrafoId
              );
            }
          }}
          onMouseLeave={onLeaveReference}
          title={
            targetP
              ? `§ ${targetP.id}. ${targetP.title} (${targetP.bloqueTitle.split(':')[0]})`
              : `Parágrafo ${targetId}`
          }
          className={`inline-flex items-center text-left font-serif font-semibold tracking-tight transition-all duration-150 cursor-pointer ${
            isSelf
              ? 'text-stone-500 cursor-default opacity-80'
              : 'text-amber-800 hover:text-amber-950 underline decoration-amber-400 hover:decoration-amber-700 decoration-1.5 underline-offset-3 hover:bg-amber-100/60 px-1 py-0.5 rounded'
          }`}
        >
          {matchString}
        </button>
      );
    } else {
      // Multiple references like (§§ 56, 58)
      // Render the container with individual clickable number spans inside
      parts.push(
        <span
          key={`multi-ref-${matchStart}`}
          className="inline-flex items-center gap-1 font-serif text-amber-900 bg-amber-50/70 border border-amber-200/80 px-1.5 py-0.5 rounded text-[14px]"
        >
          <span className="text-stone-500 font-normal">§§</span>
          {numbers.map((id, nIdx) => {
            const targetP = getParagrafoById(id);
            const isSelf = currentParagrafoId === id;
            return (
              <React.Fragment key={`multi-${id}-${nIdx}`}>
                {nIdx > 0 && <span className="text-stone-400">,</span>}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (targetP && !isSelf) onNavigate(id);
                  }}
                  onMouseEnter={(e) => {
                    if (targetP) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      onHoverReference(
                        id,
                        {
                          x: rect.left + rect.width / 2,
                          y: rect.bottom + 4,
                        },
                        currentParagrafoId
                      );
                    }
                  }}
                  onMouseLeave={onLeaveReference}
                  title={
                    targetP
                      ? `§ ${targetP.id}. ${targetP.title}`
                      : `Parágrafo ${id}`
                  }
                  className="font-bold underline decoration-amber-500 hover:decoration-amber-800 hover:text-amber-950 cursor-pointer"
                >
                  {id}
                </button>
              </React.Fragment>
            );
          })}
        </span>
      );
    }

    lastIndex = matchEnd;
  }

  // Add any trailing text
  if (lastIndex < text.length) {
    parts.push(
      <span key={`tail-${lastIndex}`}>
        {highlightText(text.slice(lastIndex))}
      </span>
    );
  }

  return <>{parts}</>;
};
