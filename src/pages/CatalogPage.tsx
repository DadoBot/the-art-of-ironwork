import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { OPERE_DATA } from '../data/opereData';
import { OperaItem } from '../types/opera';
import { CatalogToolbar } from '../components/opere/CatalogToolbar';
import { WorkCard } from '../components/opere/WorkCard';
import { WorkDetailModal } from '../components/opere/WorkDetailModal';
import { Pagination } from '../components/opere/Pagination';
import { ForcedBreak } from '../components/ui/ForcedBreak';

const ITEMS_PER_PAGE = 6;

export const CatalogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOpera, setSelectedOpera] = useState<OperaItem | null>(null);

  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll to top of page on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Category counts based on the whole dataset
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    OPERE_DATA.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered dataset based on category & search term
  const filteredOpere = useMemo(() => {
    return OPERE_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inCode = item.code.toLowerCase().includes(q);
      const inYear = item.year.toString().includes(q);
      const inMaterials = item.materials.some(m => m.toLowerCase().includes(q));

      return inTitle || inDesc || inCode || inYear || inMaterials;
    });
  }, [activeCategory, searchQuery]);

  // Total pages
  const totalPages = Math.ceil(filteredOpere.length / ITEMS_PER_PAGE) || 1;

  // Current page items
  const paginatedOpere = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredOpere.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredOpere, currentPage]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridRef.current) {
      const topPos = gridRef.current.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-grow pt-24 pb-20">
      {/* Header & Breadcrumb */}
      <section className="px-margin-mobile md:px-margin-desktop pt-8 pb-12 max-w-container-max mx-auto">
        <nav aria-label="Percorso di navigazione" className="flex items-center gap-2 text-xs text-on-surface-variant font-label-md mb-6">
          <Link to="/" className="hover:text-secondary transition-colors">Home Atelier</Link>
          <span className="text-outline">/</span>
          <span aria-current="page" className="text-primary font-medium">Archivio Completo delle Opere</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-outline-variant/60">
          <div>
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-medium block mb-2">
              Catalogo Storico · Dal 1982 ad Oggi
            </span>
            <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl text-primary font-serif tracking-tight">
              Tutte le Opere Forgiate
            </h1>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
            Un registro visivo di quarant'anni di battitura manuale all'incudine. Ogni pezzo racchiude disegno esecutivo dedicato, ferro massiccio e trattamenti protettivi d'eccellenza.
          </p>
        </div>

        {/* Toolbar with Search & Categories */}
        <div className="mt-8">
          <CatalogToolbar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            categoryCounts={categoryCounts}
            totalCount={OPERE_DATA.length}
          />
        </div>

        {/* Active Result Summary */}
        <div className="mt-6 flex items-center justify-between text-xs text-on-surface-variant border-b border-outline-variant/30 pb-4">
          <span>
            Visualizzando <strong className="text-primary">{filteredOpere.length}</strong>{' '}
            {filteredOpere.length === 1 ? "creazione d'autore" : "creazioni d'autore"}
          </span>
          <span className="font-mono hidden sm:inline">Atelier Brescia · Opere su Commissione</span>
        </div>
      </section>

      {/* Grid of Artworks */}
      <section ref={gridRef} className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {paginatedOpere.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {paginatedOpere.map(opera => (
                <WorkCard
                  key={opera.id}
                  opera={opera}
                  onSelect={setSelectedOpera}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredOpere.length}
              pageSize={ITEMS_PER_PAGE}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-surface-container-lowest rounded-lg border border-outline-variant/60">
            <span className="material-symbols-outlined text-5xl text-secondary mb-3">
              search_off
            </span>
            <h3 className="font-headline-md text-xl text-primary font-serif mb-2">
              Nessuna opera corrisponde ai criteri
            </h3>
            <p className="text-on-surface-variant text-sm max-w-md mx-auto mb-6">
              Prova a modificare i termini di ricerca oppure contattaci per commissionare un'opera interamente su misura.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-surface border border-secondary text-primary font-label-md text-sm rounded uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-colors"
            >
              Reimposta Tutti i Filtri
            </button>
          </div>
        )}
      </section>

      <ForcedBreak className="py-12" />

      {/* Custom Commission CTA Banner */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-primary text-on-primary rounded-xl p-8 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary-fixed font-medium block mb-2">
              Lavorazioni Speciali
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl text-on-primary font-serif mb-3">
              Hai un progetto architettonico o un'idea unica?
            </h2>
            <p className="font-body-md text-primary-fixed-dim text-sm md:text-base leading-relaxed">
              Forgiamo elementi personalizzati partendo da disegni CAD, bozzetti d'artista o rilievi diretti in cantiere.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Link
              to="/#preventivo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-on-secondary font-label-md text-sm rounded hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-200 shadow-sm text-center"
            >
              <span>Richiedi Studio di Fattibilità</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox / Technical Spec Modal */}
      <WorkDetailModal
        opera={selectedOpera}
        onClose={() => setSelectedOpera(null)}
      />
    </main>
  );
};
