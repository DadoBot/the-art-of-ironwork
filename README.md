# L'Arte del Ferro — Artelab Forge (React Front-End)

> **Forgiatura d'Arte e Carpenteria su Misura dal 1982.**  
> Unione di maestria tradizionale all'incudine, disegno architettonico e design contemporaneo.

---

## 🏛️ Panoramica del Progetto

Applicazione web Single Page (SPA) realizzata in **React + TypeScript + Vite** e **Tailwind CSS**, solo Front-End (client-side), progettata secondo i principi del design system **Forged Heritage** descritto in [`DESIGN.md`](./DESIGN.md).

### Pagine & Funzionalità:
- **Homepage (`/`)**:
  - Hero section con finiture artigianali ed evocative.
  - Bento grid delle creazioni in evidenza con filtri reattivi per categoria.
  - Presentazione del metodo in 3 fasi (*"Dalla Forgia alla Posa"*).
  - Modulo di preventivo interattivo con supporto al caricamento disegni CAD/DWG/PDF via drag-and-drop, anteprima chip e pre-selezione dell'opera.
  - Sezione storia dell'atelier e garanzie di forgiatura.
- **Catalogo Storico Completo (`/opere`)**:
  - Archivio con tutte le 12 opere d'autore dal 1982 ad oggi.
  - Ricerca full-text istantanea in tempo reale (titolo, materiali, stile, anno, codice opera).
  - Filtri per categoria (*Cancelli & Recinzioni*, *Scale & Parapetti*, *Letti & Arredo*, *Serramenti & Verande*, *Restauro Storico*) con conteggi dinamici.
  - Paginazione reattiva con scroll automatico.
  - Lightbox / Modal di dettaglio tecnico con scheda dettagliata e link diretto al preventivo per l'opera selezionata.
- **Layout & Accessibilità**:
  - Header fisso con effetto scroll e menu drawer laterale per dispositivi mobile.
  - Footer istituzionale con recapiti dell'officina di Brescia.

---

## 🛠️ Stack Tecnologico

- **Framework**: React 18 + TypeScript
- **Tooling**: Vite (HMR veloce, bundling ottimizzato in `/dist`)
- **Styling**: Tailwind CSS nativo (configurato con token da `DESIGN.md`)
- **Routing**: React Router DOM v6
- **Icone**: Material Symbols Outlined + Lucide React

---

## 🎨 Design System: Forged Heritage

- **Superficie di Base:** Pergamena calda (`#FBF9F5`) con texture micro-granulare SVG.
- **Inchiostro Primario:** Antracite battuto (`#161717` / `#2B2B2B`).
- **Accento Interattivo:** Bronzo Antico (`#8C4F10`).
- **Finiture Secondarie:** Noce Brunito (`#2E0C00` / `#360F00`) e dettagli metallici.
- **Tipografia:** *Libre Caslon Text* (serif ad alto contrasto) & *Work Sans* (chiarezza geometrica).

---

## 🚀 Avvio Rapido

1. **Installazione dipendenze:**
   ```bash
   npm install
   ```

2. **Avvio server di sviluppo:**
   ```bash
   npm run dev
   ```
   L'applicazione sarà attiva su `http://localhost:5173`.

3. **Compilazione per produzione:**
   ```bash
   npm run build
   ```
   Genera l'output statico nella cartella `/dist`, pronto per il deploy su Vercel, Netlify, Cloudflare Pages o qualsiasi hosting statico.

4. **Anteprima build di produzione:**
   ```bash
   npm run preview
   ```
