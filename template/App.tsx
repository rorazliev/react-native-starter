import React, { type FunctionComponent, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { defaultTheme, darkTheme } from '@app/identity/themes';
import { init } from '@app/redux/slices/appSlice';
import {
  type Dispatch,
  store,
  useDispatch,
  useSelector,
} from '@app/redux/store';
import Navigation from '@app/navigation';

const GestureHandlerProvider = styled(GestureHandlerRootView)`
  flex: 1;
`;

const App: FunctionComponent = () => {
  const { launchedBefore, status, theme } = useSelector((state) => state.app);
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
    <GestureHandlerProvider>
      <ThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>
        <SafeAreaProvider>
          <NavigationContainer
            theme={theme === 'light' ? defaultTheme : darkTheme}>
            <StatusBar
              barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
            />
            <Navigation initialRouteName={launchedBefore ? 'Home' : 'Home'} />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerProvider>
  );
};

const AppContainer: FunctionComponent = () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

export default AppContainer;
