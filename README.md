# L'Arte del Ferro — Artelab Forge

> **Forgiatura d'Arte e Carpenteria su Misura dal 1982.**  
> Unione di maestria tradizionale all'incudine, disegno architettonico e design contemporaneo.

---

## 🏛️ Panoramica del Progetto

Sito web istituzionale e catalogo completo delle opere per l'atelier artigianale di ferro battuto **L'Arte del Ferro** (Brescia, Italia).

Il progetto è realizzato in HTML5 e Tailwind CSS, strutturato secondo i principi del design system **Forged Heritage** descritto in [`DESIGN.md`](./DESIGN.md).

### Pagine Principali:
- **`index.html` / `code.html`:** Homepage dell'atelier con sezione Hero d'impatto, presentazione del metodo artigianale in 3 fasi (*"Dalla Forgia alla Posa"*), anteprima bento grid delle opere recenti e modulo preventivi accessibile con supporto al caricamento disegni CAD/PDF via drag-and-drop.
- **`opere.html`:** Catalogo storico completo (1982 — Oggi) con 12 creazioni d'autore, filtri interattivi per categoria (*Cancelli & Recinzioni*, *Scale & Parapetti*, *Letti & Arredo*, *Serramenti & Verande*, *Restauro Storico*), ricerca full-text istantanea, paginazione dinamica e lightbox di dettaglio tecnico.

---

## 🎨 Design System: Forged Heritage

- **Materialità & Filosofia:** Ispirato al calore della forgia, all'incudine e alla pergamena antica. Elimina gli anti-pattern da template generico a favore di una sobria eleganza artigianale.
- **Palette Colori:**
  - **Superficie di Base:** Pergamena calda (`#FBF9F5`) con texture micro-granulare SVG.
  - **Inchiostro Primario:** Antracite battuto (`#161717` / `#2B2B2B`).
  - **Accento Interattivo:** Bronzo Antico (`#8C4F10`).
  - **Finiture Secondarie:** Noce Brunito (`#2E0C00` / `#360F00`) e dettagli metallici.
- **Tipografia:**
  - **Titoli & Intestazioni:** *Libre Caslon Text* (serif ad alto contrasto per un'aura da registro storico d'epoca).
  - **Corpo & Schede Tecniche:** *Work Sans* (chiarezza geometrica, eccellente leggibilità a ogni risoluzione).

---

## 🚀 Avvio Rapido

Non sono richiesti framework di compilazione o dipendenze backend:

1. Clona il repository:
   ```bash
   git clone https://github.com/DadoBot/the-art-of-ironwork.git
   ```
2. Apri `index.html` o `opere.html` con qualsiasi browser web moderno.
