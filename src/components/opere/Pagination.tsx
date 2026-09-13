import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}) => {
  if (totalPages <= 1 && totalItems <= pageSize) return null;

  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalItems);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Paginazione Archivio"
      className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/60 pt-8"
    >
      <div className="text-xs text-on-surface-variant font-label-md">
        Pagina <span className="font-bold text-primary font-mono">{currentPage}</span> di{' '}
        <span className="font-bold text-primary font-mono">{totalPages}</span> · ({startIndex}–{endIndex} di {totalItems} opere)
      </div>

      <div className="flex items-center gap-2 font-label-md text-sm">
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Vai alla pagina precedente"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-surface border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary disabled:opacity-40 disabled:pointer-events-none transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="hidden sm:inline">Precedente</span>
        </button>

        <div className="flex items-center gap-1.5">
          {pageNumbers.map(page => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`w-9 h-9 rounded font-mono text-xs transition-colors ${
                page === currentPage
                  ? 'bg-primary text-on-primary font-semibold border border-primary shadow-xs'
                  : 'bg-surface text-on-surface-variant border border-outline-variant hover:border-secondary hover:text-secondary'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Vai alla pagina successiva"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-surface border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary disabled:opacity-40 disabled:pointer-events-none transition-colors"
        >
          <span className="hidden sm:inline">Successiva</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </nav>
  );
};
