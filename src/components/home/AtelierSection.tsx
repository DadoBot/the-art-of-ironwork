import React from 'react';

export const AtelierSection: React.FC = () => {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto" id="atelier">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-medium block mb-2">
            Visita in Officina
          </span>
          <h2 className="font-headline-md text-2xl md:text-3xl text-primary font-serif mb-4">
            La Nostra Bottega Artigiana
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
            L'odore del carbone, il calore dei forni e il suono del metallo battuto. Accogliamo architetti, designer e committenti per visionare i campioni di lavorazione e definire insieme i dettagli esecutivi di ogni opera.
          </p>
          <div className="space-y-3 text-sm text-on-surface">
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">location_on</span>
              <span>Via degli Artigiani, 14 · 25100 Brescia (BS)</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
              <span>Apertura: Lunedì – Venerdì 08:00 – 18:00 (Sabato su appuntamento)</span>
            </p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-lg p-8 border border-outline-variant/60 shadow-sm">
          <h3 className="font-title-lg text-title-lg text-primary font-serif mb-4">
            Garanzie &amp; Trattamenti
          </h3>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
              <span>Zincatura a caldo per immersione secondo norme UNI EN ISO 1461 per esterni esposti.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
              <span>Verniciature a polveri termoindurenti con finiture e patine antichizzate a mano.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
              <span>Certificati di conformità strutturale e marcatura CE per cancellate e ringhiere su misura.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
