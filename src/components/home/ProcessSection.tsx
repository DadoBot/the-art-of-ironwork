import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto" id="processo">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-medium block mb-2">
            Metodo Artigianale
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-primary mb-4 font-serif">
            Dalla Forgia alla Posa
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Un percorso rigoroso che preserva la tecnica di forgia manuale perfezionata in decenni di attività. Seguiamo ogni commessa con cura meticolosa, dal rilievo iniziale all'ancoraggio definitivo.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-surface-container-low border-2 border-primary rounded-full flex items-center justify-center mb-5 text-primary shadow-sm">
              <span className="material-symbols-outlined text-[28px]">design_services</span>
            </div>
            <h3 className="font-title-lg text-lg text-primary mb-2 font-serif">1. Rilievo &amp; Disegno</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Sopralluogo tecnico sul posto, studio delle proporzioni architettoniche e bozzetti in scala.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mb-5 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">outdoor_grill</span>
            </div>
            <h3 className="font-title-lg text-lg text-primary mb-2 font-serif">2. Forgiatura a Caldo</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Formatura manuale all'incudine con maglio e fuoco. Trattamenti antiruggine e patine a cera.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-surface-container-low border-2 border-primary rounded-full flex items-center justify-center mb-5 text-primary shadow-sm">
              <span className="material-symbols-outlined text-[28px]">construction</span>
            </div>
            <h3 className="font-title-lg text-lg text-primary mb-2 font-serif">3. Posa a Regola d'Arte</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Installazione diretta e collaudo strutturale eseguito dai nostri maestri fabbri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
