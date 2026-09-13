import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FeaturedItem {
  id: string;
  code: string;
  title: string;
  badge: string;
  category: string;
  description: string;
  imageUrl: string;
  cols: string;
  height: string;
  imgHeight: string;
}

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: 'CF-1984',
    code: 'CF-1984',
    title: 'Cancello Monumentale',
    badge: 'Forgiato a Caldo',
    category: 'cancelli',
    description: "Ferro pieno forgiato a caldo all'incudine, finitura anticata con fogliame sbalzato e dettagli in bronzo brunito.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPlxlC5nPiwE0VgTTYoffRFuvRZ19Cv9fROGZ-rcsrdFVKhQqUs5lOVSTbsu3X3m9m5ioylq52nRtC-Xg6gWxsEkJ-tQSn1pdj37_mU4iIXMoCQAFZEBqypYsC6e59LpoowDpnkWFxu3z3efcUjvsNocN2kCbF9vJ0ZMtg5IVm1e9AvMrXUVFTeCzzTvVbOn3eZaXVGOK-NsRFxWJVts0smGswkn5ICeh56PEs5azrUbi6tYpw5Wqk6Q',
    cols: 'col-span-1 md:col-span-8',
    height: 'h-[520px]',
    imgHeight: 'h-2/3',
  },
  {
    id: 'SC-2022',
    code: 'SC-2022',
    title: 'Scala a Chiocciola Elicoidale',
    badge: 'Architettura',
    category: 'scale',
    description: 'Struttura autoportante elicoidale in acciaio con ringhiera sagomata a mano e corrimano forgiato continuo.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrNEYoZKyLEz4cKV2wnHKxNe6W1gHSdrIe1s5eatR3f918BS8xcFcJL4sPTtX2J-kfXLnwL309A_TX9vWc1ws-L8TLXs1tZZQw7Txwq6_Z6bh23htdaNsC8wPmCMuZL48PYxHETGYzLsXP5HqoRGEGaBcOqHdijIRNJ48gYEq1jg0oryNkG-BSKDZUf7of03MY4Gkitu3XI7P8jEWB7Z4mi4k4ltglKx4RygUGwXhSrhkbRYQ22sX0UA',
    cols: 'col-span-1 md:col-span-4',
    height: 'h-[520px]',
    imgHeight: 'h-[60%]',
  },
  {
    id: 'LB-4011',
    code: 'LB-4011',
    title: 'Letto a Baldacchino San Felice',
    badge: 'Interior',
    category: 'arredo',
    description: "Profili sottili in ferro battuto con finitura a cera d'api naturale. Geometria senza tempo per ambienti storici o contemporanei.",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSC9SB4FWPWHm87mxklkUHJrOmHRyIfEHAKC9gHnKzLuKDM66ePQJtQ9EotJShT3E3TGdKqzTDAUxoQzetbO70IvqqFEysrJn0hqNa5DZvfqnTcWyPsXc2QCCAz49vzhPmWDa1fzLEGZ8plujUgGX-wcWmcrJtRbDYZEZHJ8IkcbZMaS7DIgN3Y0P9SZ148ZHAnO1RGGMTbHSNMUJznkCeABnegPrw3IWRyb195E4En_aKPFa6PsRb1w',
    cols: 'col-span-1 md:col-span-6',
    height: 'h-[440px]',
    imgHeight: 'h-[55%]',
  },
  {
    id: 'VI-8820',
    code: 'VI-8820',
    title: 'Veranda a Taglio Termico',
    badge: 'Strutture',
    category: 'strutture',
    description: 'Profili in ferro sottili a taglio termico per giardini d\'inverno e vetrate panoramiche in stile orangerie industriale.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9ubSGl3OT6DYe213DIIz3pQRoBoJ3Dyg6zzoehka3sSYeqJ97hVWwUI6Xvgjc9ZCnMQD5VytF2CZd89TK_jn8td0HKYNFRtiHklCv_7YT8IciEMQXfO6ZZCgqH-EbbJkuj--mgCMsx0gsGhORdxIGa8tgLAqj7xAMHvnIJeGr6SV_TX2HD8J2TZDRHN5VW9wJ1KNXHoFGAtOQdlqg0vW6caobDngEtUfhBWug7fjkFoh_tlbXnyYxBg',
    cols: 'col-span-1 md:col-span-6',
    height: 'h-[440px]',
    imgHeight: 'h-[55%]',
  },
];

const FILTER_TABS = [
  { id: 'all', label: 'Tutti i Lavori' },
  { id: 'cancelli', label: 'Cancelli & Ringhiere' },
  { id: 'scale', label: 'Scale & Corrimano' },
  { id: 'arredo', label: 'Letti & Arredamento' },
  { id: 'strutture', label: 'Telai & Strutture' },
];

export const FeaturedWorks: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = FEATURED_ITEMS.filter(
    item => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-12 md:py-20 max-w-container-max mx-auto" id="galleria">
      <div className="text-center mb-12">
        <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-primary mb-3 font-serif">
          Opere Selezionate
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
          Ogni opera è un pezzo unico forgiato a mano su commessa di architetti, restauratori e privati.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12 font-label-md text-sm" role="tablist">
        {FILTER_TABS.map(tab => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-5 py-2.5 rounded text-sm transition-all duration-200 border ${
              activeFilter === tab.id
                ? 'bg-primary text-on-primary shadow-sm border-primary'
                : 'bg-surface text-on-surface-variant border-outline-variant hover:border-secondary hover:text-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {filteredItems.map(item => (
          <article
            key={item.id}
            className={`${item.cols} group relative rounded-lg overflow-hidden border border-outline-variant/70 bg-surface-container-lowest flex flex-col ${item.height} transition-all duration-300 hover:shadow-md`}
          >
            <div className={`${item.imgHeight} overflow-hidden bg-primary/10 relative`}>
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={item.imageUrl}
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-title-lg text-lg text-on-tertiary-fixed font-serif">
                    {item.title}
                  </h3>
                  <span className="bg-secondary/10 text-secondary px-2.5 py-0.5 rounded text-xs uppercase tracking-wider font-medium border border-secondary/20">
                    {item.badge}
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="text-xs text-on-surface-variant font-mono">
                  ID: {item.code} · Su Misura
                </span>
                <a
                  href="#preventivo"
                  className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-sm text-secondary hover:text-primary font-medium transition-colors"
                >
                  <span>Richiedi fattibilità</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Catalogo Completo Link Banner */}
      <div className="mt-12 text-center">
        <Link
          to="/opere"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface border border-secondary text-primary font-label-md text-sm rounded uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-all duration-200 shadow-sm"
        >
          <span>Visualizza Tutte le 12 Creazioni d'Autore nel Catalogo</span>
          <span className="material-symbols-outlined text-[18px]">menu_book</span>
        </Link>
      </div>
    </section>
  );
};
