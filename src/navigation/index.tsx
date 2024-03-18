import useAuth from '@/hooks/contexts/useAuth';
import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import AppNavigation from './app';
import AuthNavigation from './auth';

export type MainParamList = {
  App: undefined;
  Auth: undefined;
};

const Stack = createStackNavigator<MainParamList>();

export type MainNavKeys = keyof MainParamList;
export type MainNavProps<k extends MainNavKeys> = StackScreenProps<
  MainParamList,
  k
>;

export default function MainNavigation() {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="App" component={AppNavigation} />
        </>
      ) : (
        <>
          <Stack.Screen name="Auth" component={AuthNavigation} />
        </>
      )}
    </Stack.Navigator>
  );
}
