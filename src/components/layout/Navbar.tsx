import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MobileDrawer } from './MobileDrawer';

export const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 transition-all duration-300 border-b border-outline-variant/60 ${
          isScrolled
            ? 'bg-background/98 shadow-md h-20'
            : 'bg-background/95 h-20'
        } flex justify-between items-center px-margin-mobile md:px-margin-desktop backdrop-blur-sm`}
      >
        <div className="flex items-center gap-3">
          <button
            aria-label="Apri menu di navigazione"
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-[26px]">menu</span>
          </button>
          <Link to="/" className="group flex flex-col">
            <span className="font-headline-md text-xl md:text-2xl tracking-tight text-primary font-serif">
              L'ARTE DEL FERRO
            </span>
            <span className="font-label-md text-xs tracking-widest uppercase text-secondary font-medium">
              Atelier &amp; Forgia · Brescia
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-label-md text-sm">
          <Link
            to="/"
            className={`pb-1 transition-colors ${
              location.pathname === '/' && !location.hash
                ? 'text-secondary font-semibold border-b-2 border-secondary'
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            Home Atelier
          </Link>
          <Link
            to="/opere"
            className={`pb-1 transition-colors ${
              location.pathname === '/opere'
                ? 'text-secondary font-semibold border-b-2 border-secondary'
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            Archivio Opere
          </Link>
          <a
            href="/#processo"
            className="text-on-surface-variant hover:text-secondary transition-colors pb-1"
          >
            Processo
          </a>
          <a
            href="/#atelier"
            className="text-on-surface-variant hover:text-secondary transition-colors pb-1"
          >
            Atelier
          </a>
          <a
            href="/#contatti"
            className="text-on-surface-variant hover:text-secondary transition-colors pb-1"
          >
            Contatti
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/#preventivo"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary font-label-md text-xs sm:text-sm rounded hover:bg-primary-container transition-colors duration-200 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">edit_note</span>
            <span>Richiedi Preventivo</span>
          </a>
        </div>
      </header>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
