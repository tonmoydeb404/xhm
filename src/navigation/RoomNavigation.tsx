import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Rooms from '../screens/Rooms';
import CreateRoom from '../screens/Rooms/CreateRoom';
import Room from '../screens/Rooms/Room';
import UpdateRoom from '../screens/Rooms/UpdateRoom';

export type RoomParamList = {
  Room: {title: string};
  Rooms: undefined;
  CreateRoom: undefined;
  UpdateRoom: undefined;
};

const Stack = createStackNavigator<RoomParamList>();

export type RoomNavKeys = keyof RoomParamList;
export type RoomNavProps<k extends RoomNavKeys> = StackScreenProps<
  RoomParamList,
  k
>;

export default function RoomNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen name="Room" component={Room} />
      <Stack.Screen name="CreateRoom" component={CreateRoom} />
      <Stack.Screen name="UpdateRoom" component={UpdateRoom} />
    </Stack.Navigator>
  );
}
