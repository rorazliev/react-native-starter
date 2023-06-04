import AsyncStorage from '@react-native-async-storage/async-storage';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Dispatch } from '@app/redux/store';
import { getDeviceLocale, getDeviceTheme } from '@app/utils';
import * as database from '@app/database';
import type { Locale, Status, Theme } from '@app/types';

type State = {
  launchedBefore: boolean;
  locale: Locale;
  status: Status;
  theme: Theme;
  themeFollowsSystem: boolean;
};

const initialState: State = {
  launchedBefore: false,
  locale: 'en',
  status: 'loading',
  theme: 'light',
  themeFollowsSystem: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLaunchedBefore: (state, action: PayloadAction<boolean>) => {
      state.launchedBefore = action.payload;
    },
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setThemeFollowsSystem: (state, action: PayloadAction<boolean>) => {
      state.themeFollowsSystem = action.payload;
    },
  },
});

const {
  setLaunchedBefore,
  setLocale,
  setStatus,
  setTheme,
  setThemeFollowsSystem,
} = appSlice.actions;

export const init = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatus('loading'));

    let locale = await AsyncStorage.getItem('LOCALE');
    if (!locale) {
      locale = getDeviceLocale();
    }
    dispatch(setLocale(locale as Locale));

    const theme = await AsyncStorage.getItem('THEME');
    if (!theme) {
      dispatch(setTheme(getDeviceTheme()));
      dispatch(setThemeFollowsSystem(true));
    } else {
      dispatch(setTheme(theme as Theme));
      dispatch(setThemeFollowsSystem(false));
    }

    const launchedBefore = await AsyncStorage.getItem('LAUNCHED_BEFORE');
    if (!launchedBefore) {
      dispatch(setLaunchedBefore(false));
    } else {
      dispatch(setLaunchedBefore(true));
    }

    await database.connect();

    const initialized = await AsyncStorage.getItem('DATABASE_INITIAZLIED');
    if (!initialized) {
      await database.migrate();
      await database.generate();
      await AsyncStorage.setItem('DATABASE_INITIAZLIED', '1');
    }

    dispatch(setStatus('ready'));
  } catch (error) {
    dispatch(setStatus('error'));
  }
};

export const updateLaunchedBefore = () => async (dispatch: Dispatch) => {
  await AsyncStorage.setItem('LAUNCHED_BEFORE', '1');
  dispatch(setLaunchedBefore(true));
};

export const updateLocale = (locale: Locale) => async (dispatch: Dispatch) => {
  await AsyncStorage.setItem('LOCALE', locale);
  dispatch(setLocale(locale));
};

export const updateTheme =
  (theme: Theme | 'auto') => async (dispatch: Dispatch) => {
    if (theme === 'auto') {
      await AsyncStorage.removeItem('THEME');
      dispatch(setTheme(getDeviceTheme()));
      dispatch(setThemeFollowsSystem(true));
    } else {
      await AsyncStorage.setItem('THEME', theme);
      dispatch(setTheme(theme));
      dispatch(setThemeFollowsSystem(false));
    }
  };

export default appSlice.reducer;
