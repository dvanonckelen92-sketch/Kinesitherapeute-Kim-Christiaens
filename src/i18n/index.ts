import { nl } from './nl';
import { fr } from './fr';
import type { NlDictionary, FrDictionary, UiDictionary } from './types';
import type { Locale } from '../consts';

export function getDictionary(locale: 'nl'): NlDictionary;
export function getDictionary(locale: 'fr'): FrDictionary;
export function getDictionary(locale: Locale): UiDictionary {
  return locale === 'nl' ? nl : fr;
}

export type { UiDictionary, NlDictionary, FrDictionary };
