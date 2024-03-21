import useHome from '@/hooks/contexts/useHome';
import {AppNavProps} from '@/navigation/app';
import {Button, Text, YStack} from '@/ui';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Camera,
  CodeScanner,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {Container} from '../../components/layout';
import {MCIcon} from '../../utils/icons';

export default function ConnectHome({navigation}: AppNavProps<'AppConnect'>) {
  // context state
  const {updateHomeId} = useHome();

  // app states
  const [active, setActive] = useState(true);
  const [torch, setTorch] = useState(false);

  // handle qr code scan
  const handleCodeScan: CodeScanner['onCodeScanned'] = useCallback(
    codes => {
      if (!active) return; // if camera not active then stop execution

      updateHomeId(codes[0].value);

      // reset state
      setTorch(false);
      setActive(false);
    },
    [active],
  );

  // camera states
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'code-128'],
    onCodeScanned: handleCodeScan,
  });

  // handle permission
  const handlePermission = async () => {
    const res = await requestPermission();

    console.log(res);
  };

  // reset state
  useEffect(() => {
    return () => {
      setActive(false);
      setTorch(false);
    };
  }, []);

  if (!hasPermission) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <YStack
          style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text
            variant="bodyLarge"
            style={{marginBottom: 25, textAlign: 'center'}}>
            No permission for camera to {'\n'} scan QR code
          </Text>

          <Button mode="contained" onPress={handlePermission}>
            Allow Permission
          </Button>
        </YStack>
      </SafeAreaView>
    );
  }

  if (!device) {
    return (
      <View>
        <Text>Camera not found</Text>
      </View>
    );
  }

  if (hasPermission && device) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Container style={{flexDirection: 'row', marginTop: 10}}>
          <Button onPress={() => navigation.goBack()}>
            <MCIcon name="keyboard-backspace" size={'xl'} />
          </Button>
        </Container>
        <View
          style={{
            marginTop: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>SCAN HOME</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 40}}>
            QR Code
          </Text>

          <View
            style={{
              width: 300,
              height: 300,
              position: 'relative',
            }}>
            <Camera
              style={StyleSheet.absoluteFillObject}
              device={device}
              isActive={active}
              codeScanner={codeScanner}
              onTouchEnd={() => setActive(true)}
              torch={torch ? 'on' : 'off'}
              resizeMode="cover"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
            }}>
            {active && (
              <Button onPress={() => setTorch(prev => !prev)}>Flash</Button>
            )}

            {!active && (
              <Button onPress={() => setActive(prev => !prev)}>Scan</Button>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
}
