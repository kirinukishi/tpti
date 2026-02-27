import { ja } from './ja';
import { en } from './en';

export type Locale = 'ja' | 'en';
export type Dictionary = typeof ja;

export const dictionaries = { ja, en } as const;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
