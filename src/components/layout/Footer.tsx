import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-on-primary w-full" id="contatti">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-16 w-full max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="space-y-4">
          <span className="font-headline-md text-2xl text-on-primary block tracking-tight font-serif">
            L'ARTE DEL FERRO
          </span>
          <p className="font-body-md text-body-md text-primary-fixed-dim max-w-xs leading-relaxed">
            Artelab Forge · Maestria nella Forgiatura dal 1982.<br />
            Forgiamo il ferro e diamo forma alla materia per creare opere destinate a durare nel tempo.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              aria-label="LinkedIn"
              className="w-10 h-10 rounded border border-outline-variant/30 flex items-center justify-center text-primary-fixed hover:bg-secondary hover:text-on-secondary hover:border-transparent transition-all"
              href="#linkedin"
            >
              <span className="text-xs font-bold font-mono">IN</span>
            </a>
            <a
              aria-label="Facebook"
              className="w-10 h-10 rounded border border-outline-variant/30 flex items-center justify-center text-primary-fixed hover:bg-secondary hover:text-on-secondary hover:border-transparent transition-all"
              href="#facebook"
            >
              <span className="text-xs font-bold font-mono">FB</span>
            </a>
            <a
              aria-label="Instagram"
              className="w-10 h-10 rounded border border-outline-variant/30 flex items-center justify-center text-primary-fixed hover:bg-secondary hover:text-on-secondary hover:border-transparent transition-all"
              href="#instagram"
            >
              <span className="text-xs font-bold font-mono">IG</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-title-lg text-title-lg text-primary-fixed font-serif">
            Atelier &amp; Forgia
          </h3>
          <address className="font-body-md text-body-md text-primary-fixed-dim not-italic space-y-2.5 font-sans">
            <p>Via degli Artigiani, 14</p>
            <p>25100 Brescia (BS) · Italia</p>
            <p className="pt-1">
              <a
                className="hover:text-secondary-fixed transition-colors inline-flex items-center gap-2"
                href="tel:+390301234567"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                <span>+39 030 1234567</span>
              </a>
            </p>
            <p>
              <a
                className="hover:text-secondary-fixed transition-colors inline-flex items-center gap-2"
                href="mailto:info@artelabforge.it"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
                <span>info@artelabforge.it</span>
              </a>
            </p>
          </address>
          <div className="pt-1 text-xs text-primary-fixed-dim">
            <p>P.IVA: IT01234567890 · C.F. 01234567890</p>
          </div>
        </div>

        <div className="space-y-4 flex flex-col md:items-end">
          <div className="space-y-2.5 flex flex-col md:items-end text-sm">
            <Link to="/opere" className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors">
              Catalogo Completo Opere
            </Link>
            <a className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors" href="/#preventivo">
              Richiedi Preventivo Gratuito
            </a>
            <a className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors" href="#privacy">
              Privacy &amp; Cookie Policy
            </a>
            <a className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors" href="#condizioni">
              Condizioni di Fornitura
            </a>
          </div>
          <div className="mt-auto pt-6 text-xs text-primary-fixed-dim font-mono">
            © 1982 - {new Date().getFullYear()} L'Arte del Ferro · Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
};
