import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OperaItem } from '../../types/opera';

interface WorkDetailModalProps {
  opera: OperaItem | null;
  onClose: () => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({ opera, onClose }) => {
  const navigate = useNavigate();

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (opera) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [opera, onClose]);

  if (!opera) return null;

  const handleQuoteClick = () => {
    onClose();
    navigate(`/?opera=${opera.code}#preventivo`);
  };

  return (
    <div
      aria-modal="true"
      role="dialog"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-xs transition-opacity duration-200"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-surface-container-lowest max-w-2xl w-full rounded-xl border border-outline-variant/80 shadow-2xl overflow-hidden transform transition-all duration-200 animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-outline-variant/60 flex justify-between items-center bg-surface-container-low shrink-0">
          <div>
            <span className="text-xs font-mono text-secondary tracking-wider block font-semibold">
              ID OPERA: {opera.code}
            </span>
            <h2 className="font-headline-md text-xl sm:text-2xl text-primary font-serif">
              {opera.title}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Chiudi finestra dettagli"
            onClick={onClose}
            className="p-2 text-on-surface-variant hover:text-primary rounded hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Content with Scroll */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* High-res Image Preview */}
          <div className="w-full h-64 rounded-lg overflow-hidden border border-outline-variant/50 relative bg-primary/5">
            <img
              src={opera.imageUrl}
              alt={opera.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            {opera.fullDescription || opera.description}
          </p>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-outline-variant/40 text-xs">
            <div>
              <span className="text-outline block mb-0.5 uppercase tracking-wider font-mono">Anno Esecuzione</span>
              <strong className="text-primary font-mono text-sm">{opera.year}</strong>
            </div>
            <div>
              <span className="text-outline block mb-0.5 uppercase tracking-wider font-mono">Tipologia</span>
              <strong className="text-primary">{opera.categoryName}</strong>
            </div>
            <div>
              <span className="text-outline block mb-0.5 uppercase tracking-wider font-mono">Tempo di Forgiatura</span>
              <strong className="text-primary font-mono">3 — 6 Settimane</strong>
            </div>
            {opera.dimensions && (
              <div>
                <span className="text-outline block mb-0.5 uppercase tracking-wider font-mono">Dimensioni</span>
                <strong className="text-primary font-mono">{opera.dimensions}</strong>
              </div>
            )}
            {opera.finish && (
              <div className="sm:col-span-2">
                <span className="text-outline block mb-0.5 uppercase tracking-wider font-mono">Trattamento Finitura</span>
                <strong className="text-primary">{opera.finish}</strong>
              </div>
            )}
          </div>

          {/* Materials Tag List */}
          <div className="flex flex-wrap gap-2 pt-2">
            {opera.materials.map((mat, i) => (
              <span key={i} className="bg-surface-container-high px-2.5 py-1 rounded text-xs font-mono text-secondary border border-secondary/20">
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-3 pb-6 border-t border-outline-variant/40 flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-container-low/40 shrink-0">
          <span className="text-xs text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
            <span>100% Forgiato a Mano in Bottega (Brescia)</span>
          </span>
          <button
            type="button"
            onClick={handleQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-on-primary font-label-md text-sm rounded hover:bg-primary-container transition-colors shadow-sm"
          >
            <span>Richiedi Opera Simile</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
