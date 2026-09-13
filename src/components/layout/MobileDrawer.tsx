import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, location.hash]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 bg-primary/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        aria-label="Menu Mobile"
        className={`fixed inset-y-0 left-0 z-50 flex flex-col p-6 bg-surface-container-low text-primary w-80 border-r border-outline-variant shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant/60">
          <div>
            <span className="font-headline-md text-xl text-primary tracking-tight block font-serif">
              L'Arte del Ferro
            </span>
            <span className="font-label-md text-xs text-secondary tracking-widest uppercase font-medium">
              Atelier &amp; Forgia
            </span>
          </div>
          <button
            aria-label="Chiudi menu"
            onClick={onClose}
            className="p-2 text-primary hover:bg-surface-variant rounded transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-2 font-body-md text-sm">
          <Link
            to="/opere"
            className={`flex items-center gap-3 px-4 py-3 rounded transition-colors ${
              location.pathname === '/opere'
                ? 'bg-surface-container-high text-secondary border-l-2 border-secondary font-medium'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-secondary'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span>Archivio Opere</span>
          </Link>

          <Link
            to="/#processo"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-secondary transition-colors rounded"
          >
            <span className="material-symbols-outlined text-[20px]">auto_fix</span>
            <span>Il Metodo Artigianale</span>
          </Link>

          <Link
            to="/#preventivo"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-secondary transition-colors rounded"
          >
            <span className="material-symbols-outlined text-[20px]">description</span>
            <span>Richiedi Preventivo</span>
          </Link>

          <Link
            to="/#atelier"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-secondary transition-colors rounded"
          >
            <span className="material-symbols-outlined text-[20px]">store</span>
            <span>L'Atelier &amp; Storia</span>
          </Link>

          <Link
            to="/#contatti"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-secondary transition-colors rounded"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span>Contatti &amp; Posizione</span>
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-outline-variant/40 text-xs text-on-surface-variant space-y-2 font-sans">
          <p className="font-medium text-primary">Brescia (BS) · Dal 1982</p>
          <p>
            <a className="hover:text-secondary transition-colors" href="tel:+390301234567">
              +39 030 1234567
            </a>
          </p>
          <p>
            <a className="hover:text-secondary transition-colors" href="mailto:info@artedelferro-brescia.it">
              info@artedelferro-brescia.it
            </a>
          </p>
        </div>
      </aside>
    </>
  );
};
