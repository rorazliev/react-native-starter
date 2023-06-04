import React, { type FunctionComponent } from 'react';
import { useNavigation as useDefaultNavigation } from '@react-navigation/native';
import {
  type NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '@app/screens/Home';
import type { StackParamList } from '@app/types';

export const useNavigation = () =>
  useDefaultNavigation<NativeStackNavigationProp<StackParamList>>();

const Stack = createNativeStackNavigator<StackParamList>();

const Navigation: FunctionComponent = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default Navigation;
