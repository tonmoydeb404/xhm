import React, {ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import {TamaguiProvider} from 'tamagui';
import tamaguiConfig from '../../tamagui.config';

type Props = {
  children: ReactNode;
};

const ThemeProvider = (props: Props) => {
  const {children} = props;
  const scheme = useColorScheme();

  return (
    <TamaguiProvider
      config={tamaguiConfig}
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}>
      {children}
    </TamaguiProvider>
  );
};

export default ThemeProvider;
