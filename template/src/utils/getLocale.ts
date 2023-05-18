import { Platform, NativeModules } from 'react-native';

const getLocale = (): string => {
  let locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  locale = locale.split('_')[0];

  if (['en'].includes(locale)) {
    return locale;
  }

  return 'en';
};

export default getLocale;
