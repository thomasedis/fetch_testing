import i18n from 'i18n-js';
import en from './en.json';
import vi from './vi.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

i18n.fallbacks = true;
i18n.translations = { en, vi };

const language = async () => {
  const lan = await AsyncStorage.getItem('@language');
  if (lan !== null) {
    return lan;
  }
  return 'en';
};
language().then((r) => (i18n.locale = r));

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];
