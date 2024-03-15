import {Button} from '@/ui';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DeviceUpdateForm} from '../../components/forms/device';

import {AppHeader, Container} from '@/components/layout';
import {DeviceNavProps} from '../../navigation/DeviceNavigation';
import {MCIcon} from '../../utils/icons';

export default function UpdateDevice(props: DeviceNavProps<'UpdateDevice'>) {
  return (
    <SafeAreaView>
      <AppHeader
        title="Update Device"
        action={
          <Button
            onPress={() => {
              console.log('hello');
            }}>
            <MCIcon name="square-edit-outline" size={'xl'} />
          </Button>
        }
      />

      <Container>
        <DeviceUpdateForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
