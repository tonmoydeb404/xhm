import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Auth from '../screens/Auth';

type AuthStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Auth} />
    </Stack.Navigator>
  );
}
