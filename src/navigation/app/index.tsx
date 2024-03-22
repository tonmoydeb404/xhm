import {DrawerContent} from '@/components/layout';
import ConnectHome from '@/screens/Connect/ConnectHome';
import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';
import React from 'react';
import {MainNavProps} from '..';
import BottomNavigation from './BottomNavigation';

export type AppParamList = {
  AppHome: undefined;
  AppConnect: undefined;
};

const Drawer = createDrawerNavigator<AppParamList>();

export type AppNavKeys = keyof AppParamList;
export type AppNavProps<k extends AppNavKeys> = CompositeScreenProps<
  DrawerScreenProps<AppParamList, k>,
  MainNavProps<'App'>
>;

export default function AppNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="AppHome"
        component={BottomNavigation}
        options={{
          drawerLabel: 'App',
        }}
      />
      <Drawer.Screen
        name="AppConnect"
        component={ConnectHome}
        options={{
          drawerLabel: 'Connect Home',
        }}
      />
    </Drawer.Navigator>
  );
}
