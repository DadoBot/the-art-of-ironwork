import React, { useState, useEffect, useRef, DragEvent, ChangeEvent, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
}

export const QuoteSection: React.FC = () => {
  const [searchParams] = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    city: '',
    message: '',
  });

  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill opera or category if coming from catalog detail
  useEffect(() => {
    const operaId = searchParams.get('opera');
    if (operaId) {
      setFormData(prev => ({
        ...prev,
        message: prev.message || `Richiesta fattibilità per opera rif. ID ${operaId}`,
      }));
    }
  }, [searchParams]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const newFiles: UploadedFile[] = Array.from(fileList).map(file => ({
      id: `${file.name}-${file.size}-${Date.now()}`,
      name: file.name,
      size: Math.round(file.size / 1024), // in KB
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer && e.dataTransfer.files) {
      addFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 bg-surface-container-low border-y border-outline-variant/60 relative bg-dots" id="preventivo">
      <div className="max-w-3xl mx-auto relative z-10 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-lg border border-outline-variant/60">
        <div className="text-center mb-10">
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-medium block mb-1">
            Preventivo &amp; Consulenza
          </span>
          <h2 className="font-headline-md text-2xl md:text-3xl text-primary font-serif mb-2">
            Richiedi uno Studio di Fattibilità
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
            Raccontaci il tuo progetto. Riceverai un primo parere tecnico e una stima indicativa entro 48 ore lavorative.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-12 px-6 bg-surface-container-low rounded-lg border border-secondary/30">
            <span className="material-symbols-outlined text-5xl text-secondary mb-3">check_circle</span>
            <h3 className="font-headline-md text-2xl text-primary font-serif mb-2">
              Richiesta Inviata con Successo
            </h3>
            <p className="text-on-surface-variant text-sm max-w-md mx-auto mb-6">
              Grazie <strong>{formData.name}</strong>! Il nostro mastro forgiatore analizzerà i dettagli e i file allegati. Ti ricontatteremo al recapito <strong>{formData.phone}</strong>.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFiles([]);
                setFormData({ name: '', phone: '', type: '', city: '', message: '' });
              }}
              className="px-6 py-2.5 bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider rounded hover:bg-primary-container transition-colors"
            >
              Invia un'altra richiesta
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-sm text-primary font-medium block" htmlFor="name">
                  Nome e Cognome *
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="es. Arch. Mario Rossi"
                  required
                  type="text"
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-4 py-3 font-body-md text-sm text-primary transition-colors rounded-t"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-sm text-primary font-medium block" htmlFor="phone">
                  Telefono o Cellulare *
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+39 333 1234567"
                  required
                  type="tel"
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-4 py-3 font-body-md text-sm text-primary transition-colors rounded-t"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-sm text-primary font-medium block" htmlFor="type">
                  Tipologia di Opera *
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-4 py-3 font-body-md text-sm text-primary transition-colors rounded-t cursor-pointer"
                >
                  <option value="" disabled>Seleziona una categoria...</option>
                  <option value="cancello">Cancello Monumentale / Inferriata</option>
                  <option value="scala">Scala Elicoidale / Parapetto</option>
                  <option value="arredo">Letto a Baldacchino / Complemento d'Arredo</option>
                  <option value="struttura">Veranda / Serramento a Taglio Termico</option>
                  <option value="restauro">Restauro Storico / Altro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-sm text-primary font-medium block" htmlFor="city">
                  Comune o Luogo di Installazione
                </label>
                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="es. Brescia, Desenzano, Milano..."
                  type="text"
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-4 py-3 font-body-md text-sm text-primary transition-colors rounded-t"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label-md text-sm text-primary font-medium block" htmlFor="message">
                Descrizione del Progetto o Misure Indicative
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Descrivi stile desiderato, dimensioni approssimative, specifiche architettoniche o richieste speciali..."
                rows={4}
                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-4 py-3 font-body-md text-sm text-primary transition-colors resize-none rounded-t"
              />
            </div>

            {/* Accessible Drag & Drop File Upload */}
            <div className="space-y-2">
              <span className="font-label-md text-sm text-primary font-medium block">
                Allegati Tecnici (Disegni CAD, DWG, PDF o foto dello stato dei luoghi)
              </span>
              <label
                htmlFor="file-upload"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-6 flex flex-col justify-center items-center cursor-pointer transition-colors group ${
                  isDragging
                    ? 'border-secondary bg-surface-container-high'
                    : 'border-outline-variant bg-surface-container-low/60 hover:bg-surface-container-low hover:border-secondary'
                }`}
              >
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors text-4xl mb-2">
                  cloud_upload
                </span>
                <span className="font-body-md text-sm text-primary font-medium text-center">
                  Clicca qui per selezionare i file o trascinali in questa zona
                </span>
                <span className="text-xs text-on-surface-variant mt-1">
                  Formati accettati: PDF, DWG, DXF, JPG, PNG (Max 15MB totali)
                </span>
                <input
                  ref={fileInputRef}
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
                  onChange={handleFileInput}
                  className="sr-only"
                />
              </label>

              {/* Uploaded File Chips Preview */}
              {files.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {files.map(file => (
                    <div
                      key={file.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high border border-outline-variant rounded text-xs text-primary shadow-xs"
                    >
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        attach_file
                      </span>
                      <span>{file.name} ({file.size} KB)</span>
                      <button
                        type="button"
                        aria-label={`Rimuovi ${file.name}`}
                        onClick={() => removeFile(file.id)}
                        className="hover:text-error ml-1 transition-colors p-0.5 rounded-full hover:bg-surface"
                      >
                        <span className="material-symbols-outlined text-[14px]">close</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/40">
              <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  verified_user
                </span>
                <span>I tuoi dati verranno trattati unicamente per l'elaborazione del preventivo.</span>
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-md text-sm rounded hover:bg-primary-container transition-all duration-200 shadow-md w-full sm:w-auto"
              >
                <span>Invia Richiesta</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
