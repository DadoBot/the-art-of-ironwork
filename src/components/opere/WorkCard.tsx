import React from 'react';
import { OperaItem } from '../../types/opera';

interface WorkCardProps {
  opera: OperaItem;
  onSelect: (opera: OperaItem) => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({ opera, onSelect }) => {
  return (
    <article className="archive-card group bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/70 flex flex-col transition-all duration-300 hover:shadow-md hover:border-outline">
      {/* Image & Year Badge */}
      <div className="h-64 overflow-hidden bg-primary/10 relative">
        <img
          alt={opera.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={opera.imageUrl}
          loading="lazy"
        />
        <span className="absolute top-3 right-3 bg-surface/90 backdrop-blur-xs text-secondary px-2.5 py-1 rounded text-xs font-mono font-medium border border-secondary/30 shadow-xs">
          {opera.year}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="font-title-lg text-lg text-on-tertiary-fixed font-serif leading-snug">
              {opera.title}
            </h2>
          </div>
          <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 mb-4">
            {opera.description}
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-on-surface-variant mb-4">
            {opera.materials.map((mat, i) => (
              <span key={i} className="bg-surface-container-low px-2 py-1 rounded border border-outline-variant/40">
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-outline-variant/40 flex justify-between items-center">
          <span className="text-xs font-mono text-outline font-semibold">
            {opera.code}
          </span>
          <button
            type="button"
            onClick={() => onSelect(opera)}
            className="inline-flex items-center gap-1 text-xs font-label-md uppercase tracking-wider text-secondary hover:text-primary font-medium transition-colors"
          >
            <span>Dettagli Scheda</span>
            <span className="material-symbols-outlined text-[16px]">visibility</span>
          </button>
        </div>
      </div>
    </article>
  );
};
