import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@rneui/themed';
import React from 'react';
import 'react-native-gesture-handler';
import MainNavigation from './navigation';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
