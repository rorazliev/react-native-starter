import { Appearance } from 'react-native';
import type { Theme } from '@app/types';

export const getDeviceTheme = (): Theme => {
  return Appearance.getColorScheme() as Theme;
};
