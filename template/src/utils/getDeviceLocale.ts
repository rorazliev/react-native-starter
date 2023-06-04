import { Platform, NativeModules } from 'react-native';
import type { Locale } from '@app/types';

export const getDeviceLocale = (): Locale => {
  let locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  locale = locale.split('_')[0];

  if (['en', 'ru'].includes(locale)) {
    return locale;
  }

  return 'en';
};
