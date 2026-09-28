export const SITE = {
  name: 'Kinesitherapie Kim Christiaens',
  /** Korte merknaam, gebruikt als suffix in <title>-tags (binnen het tekenbudget van 50-60 tekens). */
  brandName: 'The Happy Floor',
  /** Volledige merknaam zoals op het logo: alt-tekst van het logo, og:site_name, schema.org. */
  brandFull: 'The Happy Floor by Kim Christiaens',
  /** Descriptor onder het logo. */
  descriptor: 'Pelvic Health · Hormonen · Bewegen',
  /** Juridische naam voor wettelijke vermeldingen, privacybeleid en copyright. */
  legalName: 'The Happy Floor VOF',
  /** Instagram en domeinnaam behouden bewust "and more"; ze hoeven niet gelijk te zijn aan de merknaam. */
  instagram: '@thehappyfloorandmore',
  instagramUrl: 'https://www.instagram.com/thehappyfloorandmore/',
  phone: '+32 498 41 14 41',
  phoneHref: 'tel:+32498411441',
  email: 'info@kimchristiaens.be',
  address: {
    street: 'Bovelingenstraat 387',
    postal: '3870 Heers (Rukkelingen-Loon)',
    full: 'Bovelingenstraat 387, 3870 Heers (Rukkelingen-Loon)',
  },
  coords: {
    lat: 50.7260243,
    lon: 5.2554878,
  },
  /**
   * Required for the legal-notice page under Belgian law (WER Boek XII, art. XII.6-XII.7)
   * for any professional/commercial website, and for the RIZIV/INAMI disclosure required
   * of a regulated healthcare profession. Fill in with the real registered values before
   * the legal-notice page can be considered accurate — placeholders are intentionally
   * left empty rather than guessed.
   */
  companyNumber: 'BE 0801.798.436', // KBO/BCE ondernemingsnummer
  rizivNumber: '', // RIZIV/INAMI-nummer — not legally required for the WER Book XII notice, add if/when handy
} as const;

export type Locale = 'nl' | 'fr';
export const LOCALES: Locale[] = ['nl', 'fr'];
export const DEFAULT_LOCALE: Locale = 'nl';
