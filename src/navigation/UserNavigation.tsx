import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Users from '../screens/Users';

export type UserParamList = {
  Users: undefined;
};

const Stack = createStackNavigator<UserParamList>();

export type UserNavKeys = keyof UserParamList;
export type UserNavProps<k extends UserNavKeys> = StackScreenProps<
  UserParamList,
  k
>;

export default function UserNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
}
