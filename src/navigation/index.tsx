import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import ConnectHome from '../screens/Home/ConnectHome';
import AppNavigation from './AppNavigation';

export type MainParamList = {
  App: undefined;
  ConnectHome: undefined;
};

const Drawer = createDrawerNavigator<MainParamList>();

export type MainNavKeys = keyof MainParamList;
export type MainNavProps<k extends MainNavKeys> = DrawerScreenProps<
  MainParamList,
  k
>;

export default function MainNavigation() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="App" component={AppNavigation} />
      <Drawer.Screen name="ConnectHome" component={ConnectHome} />
    </Drawer.Navigator>
  );
}
