import Auth from '@/screens/Auth';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

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
