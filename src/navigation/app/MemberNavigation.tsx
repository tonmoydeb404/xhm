import {StackHeader} from '@/components/layout';
import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Members from '../../screens/Members';
import AddMembers from '../../screens/Members/AddMember';

export type MemberParamList = {
  Members: undefined;
  AddMember: undefined;
};

const Stack = createStackNavigator<MemberParamList>();

export type MemberNavKeys = keyof MemberParamList;
export type MemberNavProps<k extends MemberNavKeys> = StackScreenProps<
  MemberParamList,
  k
>;

export default function MemberNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: props => <StackHeader {...props} />}}>
      <Stack.Screen
        options={{title: 'Members'}}
        name="Members"
        component={Members}
      />
      <Stack.Screen
        options={{title: 'Add Member'}}
        name="AddMember"
        component={AddMembers}
      />
    </Stack.Navigator>
  );
}
