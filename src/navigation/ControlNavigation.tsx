import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';

type ControlDrawerParamList = {
  Home: undefined;
};

const Stack = createDrawerNavigator<ControlDrawerParamList>();

export default function ControlNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
