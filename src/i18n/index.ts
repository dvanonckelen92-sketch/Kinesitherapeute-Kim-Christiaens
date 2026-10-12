import { nl } from './nl';
import { fr } from './fr';
import type { Dictionary } from './types';
import type { Locale } from '../consts';

export function getDictionary(locale: Locale): Dictionary {
  return locale === 'nl' ? nl : fr;
}

export type { Dictionary };
export { ROUTES, route } from './routes';
export type { RouteKey } from './routes';
