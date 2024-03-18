import {DrawerContent} from '@/components/layout';
import ConnectHome from '@/screens/Home/ConnectHome';
import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';
import React from 'react';
import {MainNavProps} from '..';
import BottomNavigation from './BottomNavigation';

export type ParamList = {
  AppHome: undefined;
  AppConnect: undefined;
};

const Drawer = createDrawerNavigator<ParamList>();

export type AppNavKeys = keyof ParamList;
export type AppNavProps<k extends AppNavKeys> = CompositeScreenProps<
  DrawerScreenProps<ParamList, k>,
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
