import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {DeviceUpdateForm} from '../../components/forms/device';
import {Container} from '../../components/layout';
import {DeviceNavProps} from '../../navigation/DeviceNavigation';
import {MCIcon} from '../../utils/icons';

export default function UpdateDevice(props: DeviceNavProps<'Devices'>) {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <Container
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 30,
        }}>
        <Button type="clear" onPress={() => navigation.goBack()}>
          <MCIcon name="keyboard-backspace" size={'xl'} />
        </Button>

        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Update Device</Text>

        <Button
          type="clear"
          color={'secondary'}
          onPress={() => {
            console.log('hello');
          }}>
          <MCIcon name="square-edit-outline" size={'xl'} />
        </Button>
      </Container>

      <Container>
        <DeviceUpdateForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
