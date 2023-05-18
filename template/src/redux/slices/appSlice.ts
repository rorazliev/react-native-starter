import { ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Dispatch } from '@redux/store';
import { connect } from '@utils/database';
import getLocale from '@utils/getLocale';
import getColorTheme from '@utils/getColorTheme';

type Locale = 'en';
type Status = 'error' | 'loading' | 'ready';
type Theme = NonNullable<ColorSchemeName>;

type State = {
  locale: Locale;
  status: Status;
  theme: Theme;
};

const initialState: State = {
  locale: 'en',
  status: 'loading',
  theme: 'light',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setLocale, setStatus, setTheme } = appSlice.actions;

export const init = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatus('loading'));
    // Connect to the database
    await connect();
    // Load and set locale preference
    let locale = await AsyncStorage.getItem('LOCALE');
    if (!locale) {
      locale = getLocale();
    }
    dispatch(setLocale(locale as Locale));
    // Load and set theme preference
    let theme = await AsyncStorage.getItem('THEME');
    if (!theme) {
      theme = getColorTheme();
    }
    dispatch(setTheme(theme as Theme));

    dispatch(setStatus('ready'));
  } catch (error) {
    dispatch(setStatus('error'));
  }
};

export const updateLocale =
  (locale: Locale & 'auto') => async (dispatch: Dispatch) => {
    try {
      if (locale === 'auto') {
        await AsyncStorage.removeItem('LOCALE');
        dispatch(setLocale(getLocale() as Locale));
      } else {
        await AsyncStorage.setItem('LOCALE', locale);
        dispatch(setLocale(locale));
      }
    } catch (error) {
      dispatch(setStatus('error'));
    }
  };

export const updateTheme =
  (theme: Theme & 'auto') => async (dispatch: Dispatch) => {
    try {
      if (theme === 'auto') {
        await AsyncStorage.removeItem('THEME');
        dispatch(setTheme(getColorTheme()));
      } else {
        await AsyncStorage.setItem('THEME', theme);
        dispatch(setTheme(theme));
      }
    } catch (error) {
      dispatch(setStatus('error'));
    }
  };

export const appReducer = appSlice.reducer;
