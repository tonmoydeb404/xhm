import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Room from '../screens/Room';

type AppStackParamList = {
  Home: undefined;
  Room: {title: string};
};

const Stack = createStackNavigator<AppStackParamList>();

export type AppNavigationProps<k extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, k>;

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}
