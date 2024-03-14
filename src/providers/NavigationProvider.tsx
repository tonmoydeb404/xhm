import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {adaptNavigationTheme, useTheme} from 'react-native-paper';

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

type Props = {
  children: ReactNode;
};

const NavigationProvider = (props: Props) => {
  const {children} = props;
  const theme = useTheme();

  return (
    <NavigationContainer theme={theme.dark ? DarkTheme : LightTheme}>
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
