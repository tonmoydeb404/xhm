import {getTheme} from '@/config/theme.config';
import React from 'react';
import {useColorScheme} from 'react-native';
import {PaperProvider, ProviderProps} from 'react-native-paper';

const ThemeProvider = (props: ProviderProps) => {
  const {children, ...other} = props;

  const scheme = useColorScheme();
  const theme = getTheme(scheme as string);

  return (
    <PaperProvider theme={theme} {...other}>
      {children}
    </PaperProvider>
  );
};

export default ThemeProvider;
