import { nl } from './nl';
import { fr } from './fr';
import type { UiDictionary } from './types';
import type { Locale } from '../consts';

export const dictionaries: Record<Locale, UiDictionary> = { nl, fr };

export function getDictionary(locale: Locale): UiDictionary {
  return dictionaries[locale];
}

export type { UiDictionary };
