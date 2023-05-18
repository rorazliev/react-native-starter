import { Appearance, ColorSchemeName } from 'react-native';

const getColorTheme = (): NonNullable<ColorSchemeName> => {
  return Appearance.getColorScheme() as NonNullable<ColorSchemeName>;
};

export default getColorTheme;
