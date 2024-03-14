import {Button} from '@/ui';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {Container} from '../../components/layout';
import {MainNavProps} from '../../navigation';
import {MCIcon} from '../../utils/icons';

export default function ConnectHome({navigation}: MainNavProps<'ConnectHome'>) {
  // app states
  const [active, setActive] = useState(true);
  const [torch, setTorch] = useState(false);

  // camera states
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'code-128'],
    onCodeScanned: codes => {
      if (active) {
        Alert.alert(`Scanned codes!`, `${codes[0].value}`);
        setTorch(false);
        setActive(false);
      }
    },
  });

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }

    return () => {
      setActive(false);
      setTorch(false);
    };
  }, [hasPermission]);

  if (!hasPermission) {
    return (
      <View>
        <Text>No permission for camera</Text>
      </View>
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
