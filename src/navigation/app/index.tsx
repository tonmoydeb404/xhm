import {DrawerContent} from '@/components/layout';
import ConnectHome from '@/screens/Home/ConnectHome';
import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import BottomNavigation from './BottomNavigation';

export type MainParamList = {
  AppHome: undefined;
  AppConnect: undefined;
};

const Drawer = createDrawerNavigator<MainParamList>();

export type AppNavKeys = keyof MainParamList;
export type AppNavProps<k extends AppNavKeys> = DrawerScreenProps<
  MainParamList,
  k
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
