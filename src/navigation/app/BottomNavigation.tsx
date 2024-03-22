import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {
  MaterialBottomTabScreenProps,
  createMaterialBottomTabNavigator,
} from 'react-native-paper/react-navigation';
import {AppNavProps} from '.';
import Home from '../../screens/Home';
import {Icon} from '../../utils/icons';
import DeviceNavigation, {DeviceParamList} from './DeviceNavigation';
import MemberNavigation, {MemberParamList} from './MemberNavigation';
import RoomNavigation, {RoomParamList} from './RoomNavigation';

export type BottomNavParamList = {
  Home: undefined;
  AppRooms: NavigatorScreenParams<RoomParamList>;
  AppDevices: NavigatorScreenParams<DeviceParamList>;
  AppMembers: NavigatorScreenParams<MemberParamList>;
};

const Tab = createMaterialBottomTabNavigator<BottomNavParamList>();

export type BottomNavKeys = keyof BottomNavParamList;
export type BottomNavProps<k extends BottomNavKeys> = CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomNavParamList, k>,
  AppNavProps<'AppHome'>
>;

export default function BottomNavigation() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={theme.colors.onPrimaryContainer}
      activeIndicatorStyle={{backgroundColor: theme.colors.primaryContainer}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => (
            <Icon type="MaterialCommunity" name="home" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="AppRooms"
        component={RoomNavigation}
        options={{
          tabBarIcon: props => (
            <Icon type="MaterialCommunity" name="door-open" {...props} />
          ),
          tabBarLabel: 'Rooms',
        }}
      />
      <Tab.Screen
        name="AppDevices"
        component={DeviceNavigation}
        options={{
          tabBarIcon: props => (
            <Icon type="MaterialCommunity" name="devices" {...props} />
          ),
          tabBarLabel: 'Devices',
        }}
      />
      <Tab.Screen
        name="AppMembers"
        component={MemberNavigation}
        options={{
          tabBarIcon: props => (
            <Icon type="MaterialCommunity" name="account-group" {...props} />
          ),
          tabBarLabel: 'Users',
        }}
      />
    </Tab.Navigator>
  );
}
