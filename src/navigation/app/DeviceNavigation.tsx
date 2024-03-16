import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Devices from '../../screens/Devices';
import UpdateDevice from '../../screens/Devices/UpdateDevice';

export type DeviceParamList = {
  Devices: undefined;
  UpdateDevice: {id: string};
};

const Stack = createStackNavigator<DeviceParamList>();

export type DeviceNavKeys = keyof DeviceParamList;
export type DeviceNavProps<k extends DeviceNavKeys> = StackScreenProps<
  DeviceParamList,
  k
>;

export default function DeviceNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Devices" component={Devices} />
      <Stack.Screen name="UpdateDevice" component={UpdateDevice} />
    </Stack.Navigator>
  );
}
