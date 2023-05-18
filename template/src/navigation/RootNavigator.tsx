import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/Home';

export type RootStackParamList = {
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FunctionComponent = () => (
  <RootStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="Home" component={HomeScreen} />
  </RootStack.Navigator>
);

export default RootNavigator;
