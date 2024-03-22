import {Container} from '@/components/layout';
import {DeviceList} from '@/components/lists';
import useHome from '@/hooks/contexts/useHome';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DeviceNavProps} from '../../navigation/app/DeviceNavigation';

export default function Devices(props: DeviceNavProps<'Devices'>) {
  const {devices} = useHome();

  return (
    <SafeAreaView>
      <Container>
        <DeviceList {...devices} />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
