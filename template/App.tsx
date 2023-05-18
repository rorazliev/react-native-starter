import React, { FunctionComponent, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '@navigation/RootNavigator';
import { defaultTheme, darkTheme } from '@identity/themes';
import { init } from '@redux/slices/appSlice';
import { useDispatch, useSelector } from '@redux/hooks';
import { Dispatch, store } from '@redux/store';

const App: FunctionComponent = () => {
  const { theme, status } = useSelector((state) => state.app);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'loading') {
    return <></>;
  }

  if (status === 'error') {
    return <></>;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={theme === 'light' ? defaultTheme : darkTheme}>
          <StatusBar
            barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
          />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const AppContainer: FunctionComponent = () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

export default AppContainer;
