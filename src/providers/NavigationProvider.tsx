import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {useThemeName} from 'tamagui';

type Props = {
  children: ReactNode;
};

const NavigationProvider = (props: Props) => {
  const {children} = props;
  const theme = useThemeName();
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
