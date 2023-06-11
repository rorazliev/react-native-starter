import type { ColorSchemeName } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type Locale = 'en';

export type Screen = keyof StackParamList;

export type ScreenProps<RouteName extends Screen> = NativeStackScreenProps<
  StackParamList,
  RouteName
>;

export type StackParamList = {
  Home: undefined;
};

export type Status = 'error' | 'loading' | 'ready';

export type Theme = NonNullable<ColorSchemeName>;
