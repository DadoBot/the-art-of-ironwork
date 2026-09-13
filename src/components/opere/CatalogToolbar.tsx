import React from 'react';
import { CATEGORIES } from '../../data/opereData';
import { CategoryTab } from '../../types/opera';

interface CatalogToolbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
}

export const CatalogToolbar: React.FC<CatalogToolbarProps> = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  categoryCounts,
  totalCount,
}) => {
  return (
    <div className="space-y-6">
      {/* Search & Tabs Row */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
        {/* Search Box */}
        <div className="relative w-full lg:w-80">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Cerca opera, materiale, stile..."
            className="w-full bg-surface-container-low border border-outline-variant rounded pl-10 pr-10 py-2.5 text-sm text-primary placeholder:text-on-surface-variant focus:border-secondary focus:ring-0 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
              aria-label="Cancella ricerca"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 font-label-md text-xs sm:text-sm" role="tablist">
          {CATEGORIES.map((tab: CategoryTab) => {
            const count = tab.id === 'all' ? totalCount : categoryCounts[tab.id] || 0;
            const isSelected = activeCategory === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onCategoryChange(tab.id)}
                className={`px-4 py-2 rounded transition-colors border ${
                  isSelected
                    ? 'bg-primary text-on-primary border-primary shadow-xs'
                    : 'bg-surface text-on-surface-variant border-outline-variant hover:border-secondary hover:text-secondary'
                }`}
              >
                {tab.label} <span className="opacity-80 font-mono text-xs">({count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
