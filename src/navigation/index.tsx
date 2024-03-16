import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AppNavigation from './app';
import AuthNavigation from './auth';

export type MainParamList = {
  App: undefined;
  Auth: undefined;
};

const Stack = createStackNavigator<MainParamList>();

export type MainNavKeys = keyof MainParamList;
export type MainNavProps<k extends MainNavKeys> = StackScreenProps<
  MainParamList,
  k
>;

export default function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="App" component={AppNavigation} />
      <Stack.Screen name="Auth" component={AuthNavigation} />
    </Stack.Navigator>
  );
}
