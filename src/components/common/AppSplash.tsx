import {ProgressBar, YStack, useTheme} from '@/ui';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView} from 'react-native';

const AppSplash = () => {
  const theme = useTheme();
  const [progress, setProgress] = useState(0.1);

  // update the progress value
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 1) {
          return 0.1;
        }

        return prevProgress + 0.1;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      setProgress(0.1);
    };
  }, []);

  return (
    <SafeAreaView style={{minHeight: '100%'}}>
      <YStack
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={{width: 70, height: 70, marginBottom: 30}}
        />
        <ProgressBar
          animatedValue={progress}
          color={theme.colors.primary}
          indeterminate
          fillStyle={{borderRadius: 10}}
          style={{width: 200, height: 6, borderRadius: 10}}
        />
      </YStack>
    </SafeAreaView>
  );
};

export default AppSplash;
