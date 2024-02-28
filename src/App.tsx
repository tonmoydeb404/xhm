import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider, createTheme} from '@rneui/themed';
import React from 'react';
import 'react-native-gesture-handler';
import MainNavigation from './navigation';

const theme = createTheme({mode: 'light'});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
