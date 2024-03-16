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
import {MainNavProps} from '.';
import Home from '../screens/Home';
import {Icon} from '../utils/icons';
import DeviceNavigation, {DeviceParamList} from './DeviceNavigation';
import RoomNavigation, {RoomParamList} from './RoomNavigation';
import UserNavigation, {UserParamList} from './UserNavigation';

type ParamList = {
  Home: undefined;
  AppRooms: NavigatorScreenParams<RoomParamList>;
  AppDevices: NavigatorScreenParams<DeviceParamList>;
  AppUsers: NavigatorScreenParams<UserParamList>;
};

const Tab = createMaterialBottomTabNavigator<ParamList>();

export type AppNavKeys = keyof ParamList;
export type AppNavProps<k extends AppNavKeys> = CompositeScreenProps<
  MaterialBottomTabScreenProps<ParamList, k>,
  MainNavProps<'App'>
>;

export default function AppNavigation() {
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
        name="AppUsers"
        component={UserNavigation}
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
