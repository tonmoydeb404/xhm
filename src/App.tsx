import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {TamaguiProvider} from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import MainNavigation from './navigation';
import NavigationProvider from './providers/NavigationProvider';

export default function App() {
  const scheme = useColorScheme();

  // hide splash screen
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <TamaguiProvider
      config={tamaguiConfig}
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}>
      <NavigationProvider>
        <MainNavigation />
      </NavigationProvider>
    </TamaguiProvider>
  );
}
