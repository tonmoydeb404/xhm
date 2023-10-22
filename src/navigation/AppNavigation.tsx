import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import React from 'react';
import Home from '../screens/Home';
import {Icon} from '../utils/Icons';
import DeviceNavigation, {DeviceParamList} from './DeviceNavigation';
import RoomNavigation, {RoomParamList} from './RoomNavigation';
import UserNavigation, {UserParamList} from './UserNavigation';

type ParamList = {
  Home: undefined;
  AppRooms: NavigatorScreenParams<RoomParamList>;
  AppDevices: NavigatorScreenParams<DeviceParamList>;
  AppUsers: NavigatorScreenParams<UserParamList>;
};

const Tab = createBottomTabNavigator<ParamList>();

export type AppNavKeys = keyof ParamList;
export type AppNavProps<k extends AppNavKeys> = BottomTabScreenProps<
  ParamList,
  k
>;

export default function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => (
            <Icon type="Ion" name="home-outline" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="AppRooms"
        component={RoomNavigation}
        options={{
          tabBarIcon: props => (
            <Icon type="FontAwesome" name="door-open" {...props} />
          ),
          tabBarLabel: 'Rooms',
        }}
      />
      <Tab.Screen
        name="AppDevices"
        component={DeviceNavigation}
        options={{
          tabBarIcon: props => (
            <Icon type="Material" name="devices" {...props} />
          ),
          tabBarLabel: 'Devices',
        }}
      />
      <Tab.Screen
        name="AppUsers"
        component={UserNavigation}
        options={{
          tabBarIcon: props => (
            <Icon type="FontAwesome" name="users" {...props} />
          ),
          tabBarLabel: 'Users',
        }}
      />
    </Tab.Navigator>
  );
}
