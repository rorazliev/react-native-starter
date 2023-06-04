import React, { type FunctionComponent } from 'react';
import { useNavigation as useDefaultNavigation } from '@react-navigation/native';
import {
  type NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '@app/screens/Home';
import type { Screen, StackParamList } from '@app/types';

export const useNavigation = () =>
  useDefaultNavigation<NativeStackNavigationProp<StackParamList>>();

const Stack = createNativeStackNavigator<StackParamList>();

type PropsType = {
  initialRouteName?: Screen;
};

const Navigation: FunctionComponent<PropsType> = ({
  initialRouteName = 'Home',
}) => (
  <Stack.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default Navigation;
