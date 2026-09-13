import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="flex-grow flex items-center justify-center py-24 px-margin-mobile">
      <div className="text-center max-w-md mx-auto">
        <span className="font-mono text-secondary text-5xl font-bold block mb-4">404</span>
        <h1 className="font-headline-md text-2xl text-primary font-serif mb-3">
          Pagina Non Trovata
        </h1>
        <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
          L'opera o la sezione cercata non esiste o è stata spostata nell'archivio storico dell'atelier.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-label-md text-sm rounded hover:bg-primary-container transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
          <span>Torna alla Home</span>
        </Link>
      </div>
    </main>
  );
};
