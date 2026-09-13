import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-20 overflow-hidden bg-surface-container-low">
      {/* Background Image & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Atmosfera della forgia con fuoco vivo e incudine"
          className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD24hyAZcM29U34NEHkWBCPL_2ozNXZnrczHLVV3fPAxCADfdsWFiRRMkSzRQYJbaVT-85noVm4jwrQu5eZZTbXWruQkp6Mw5qF1MVmC1aXFLXtLtDGBgw5_fIaqNLidU31eu4z5RC4cUUtOGTu5UqbdR_jpq8eJq7zqwqHJMKHJo3rfPVFlBz18BeXtXrRSVhMwuAKCvLON2SgYQRuHZupu1UNeSzNKczuQZUF_5vjudwSkgnKxqiG0w"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Badge Artigianale */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container-high border border-secondary/30 rounded text-secondary font-label-md text-xs tracking-widest uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span>Maestria nel Ferro Battuto dal 1982</span>
        </div>

        <h1 className="font-display-lg text-4xl sm:text-5xl md:text-display-lg leading-tight text-primary font-serif tracking-tight max-w-3xl">
          L'Arte del Ferro Battuto su Misura
        </h1>

        <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl bg-surface/90 border border-outline-variant/50 p-5 rounded leading-relaxed shadow-sm">
          Oltre 40 anni di forgiatura artigianale. Dalla nostra officina bresciana nascono opere monumentali, cancelli, scale e arredi che uniscono la possanza del metallo alla grazia del disegno d'autore.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
          <a
            href="#preventivo"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-md text-sm rounded hover:bg-primary-container transition-all duration-200 w-full sm:w-auto shadow-md"
          >
            <span>Richiedi Preventivo Gratuito</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <Link
            to="/opere"
            className="inline-flex items-center justify-center px-8 py-4 bg-surface border border-secondary text-primary font-label-md text-sm rounded uppercase tracking-wider hover:bg-secondary/10 transition-colors duration-200 w-full sm:w-auto"
          >
            Esplora il Catalogo Storico
          </Link>
        </div>
      </div>
    </section>
  );
};
