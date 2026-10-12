import type { Locale } from '../consts';

/**
 * Elke pagina bestaat in beide talen. Deze tabel koppelt de NL- en FR-URL van
 * dezelfde pagina: ze voedt de navigatie, de taalkeuze en de hreflang-tags.
 * Wijzigt een URL, voeg dan een 301-redirect toe in netlify.toml.
 */
export const ROUTES = {
  home: { nl: '/', fr: '/fr/' },
  about: { nl: '/over-kim/', fr: '/fr/a-propos/' },
  pelvic: { nl: '/pelvic-health/', fr: '/fr/sante-pelvienne/' },
  pelvicWomen: { nl: '/pelvic-health-vrouwen/', fr: '/fr/sante-pelvienne-femmes/' },
  pelvicMen: { nl: '/pelvic-health-mannen/', fr: '/fr/sante-pelvienne-hommes/' },
  pelvicChildren: { nl: '/pelvic-health-kinderen/', fr: '/fr/sante-pelvienne-enfants/' },
  hormones: { nl: '/hormonen-en-levensfasen/', fr: '/fr/hormones-et-etapes-de-la-vie/' },
  movement: { nl: '/bewegen-en-sport/', fr: '/fr/mouvement-et-sport/' },
  lectures: { nl: '/lezingen-en-workshops/', fr: '/fr/conferences-et-ateliers/' },
  practical: { nl: '/praktische-info/', fr: '/fr/informations-pratiques/' },
  contact: { nl: '/contact/', fr: '/fr/contact/' },
  thanks: { nl: '/contact/bedankt/', fr: '/fr/contact/merci/' },
  privacy: { nl: '/privacybeleid/', fr: '/fr/politique-de-confidentialite/' },
  legal: { nl: '/wettelijke-vermeldingen/', fr: '/fr/mentions-legales/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

export function route(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale];
}
