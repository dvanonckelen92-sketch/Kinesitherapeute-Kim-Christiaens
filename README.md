# Kinesitherapie Kim Christiaens

Astro-website voor de kinesitherapiepraktijk van Kim Christiaens in Heers (regio Sint-Truiden), tweetalig NL/FR.

## Structuur

- `src/pages/*.astro` — Nederlandstalige pagina's (standaard, geen taalprefix)
- `src/pages/fr/*.astro` — Franstalige pagina's (`/fr/...`)
- `src/i18n/nl.ts`, `src/i18n/fr.ts` — alle site- en paginateksten per taal
- `src/components/` — herbruikbare UI-onderdelen (Header, Footer, ServiceCard, PelvicGroup, ...)
- `src/styles/global.css` — kleurenpalet, typografie en toegankelijkheidsstijlen (focus states, skip-link, ...)
- `src/consts.ts` — adres, telefoon, e-mail en coördinaten van de praktijk

## Content bijwerken

Alle teksten staan in `src/i18n/nl.ts` (Nederlands) en `src/i18n/fr.ts` (Frans). Pas een tekst aan in het juiste bestand — de pagina's halen alles uit deze bestanden, dus er hoeft nergens anders iets aangepast te worden.

Praktijkgegevens (adres, telefoon, e-mail) staan centraal in `src/consts.ts`.

## Commands

| Command           | Actie                                         |
| :----------------- | :--------------------------------------------- |
| `npm install`       | Installeert alle dependencies                   |
| `npm run dev`       | Start lokale dev-server op `localhost:4321`     |
| `npm run build`     | Bouwt de productiesite naar `./dist/`           |
| `npm run preview`   | Bekijk de build lokaal voor je publiceert       |
| `npx astro check`   | Controleert TypeScript/Astro types en fouten    |

## Toegankelijkheid

- Kleurenpalet is gebaseerd op de originele huisstijl (goud/amber + bordeaux), maar herwerkt naar AA-contrastwaarden voor tekst.
- Duidelijk zichtbare focus-indicatoren op elk interactief element (`:focus-visible`).
- Skip-link naar de hoofdinhoud, semantische landmarks (`header`, `nav`, `main`, `footer`).
- Toetsenbord-toegankelijk mobiel menu (`aria-expanded`, sluit met Escape).
- `prefers-reduced-motion` wordt gerespecteerd.
- Contactpagina bevat een routebeschrijving via een link (geen verplichte kaartinteractie) naast de ingesloten kaart.
