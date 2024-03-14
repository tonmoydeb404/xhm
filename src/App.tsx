import ThemeProvider from '@/providers/ThemeProvider';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MainNavigation from './navigation';
import NavigationProvider from './providers/NavigationProvider';

export default function App() {
  // hide splash screen
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <ThemeProvider>
      <NavigationProvider>
        <MainNavigation />
      </NavigationProvider>
    </ThemeProvider>
  );
}
