import {StackHeader} from '@/components/layout';
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
    <Stack.Navigator
      screenOptions={{header: props => <StackHeader {...props} />}}
      initialRouteName="Rooms">
      <Stack.Screen name="Rooms" options={{title: 'Rooms'}} component={Rooms} />
      <Stack.Screen name="Room" component={Room} />
      <Stack.Screen
        name="CreateRoom"
        options={{title: 'Create Room'}}
        component={CreateRoom}
      />
      <Stack.Screen
        name="UpdateRoom"
        options={{title: 'Update Room'}}
        component={UpdateRoom}
      />
    </Stack.Navigator>
  );
}
