import {Button} from '@rneui/themed';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DeviceCard from '../../components/cards/DeviceCard';
import {DeviceNavProps} from '../../navigation/DeviceNavigation';
import {MCIcon} from '../../utils/icons';

export default function Devices(props: DeviceNavProps<'Devices'>) {
  const {navigation, route} = props;

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <Button
          type="clear"
          onPress={() => {
            navigation.goBack();
          }}>
          <MCIcon name="keyboard-backspace" size={'xl'} />
        </Button>

        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Devices</Text>

        <Button
          type="clear"
          onPress={() => {
            navigation.goBack();
          }}>
          <MCIcon name="keyboard-backspace" size={'xl'} />
        </Button>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 20,
          marginTop: 30,
        }}>
        <DeviceCard
          name="Light"
          status="OFF"
          type="LIGHT"
          onEdit={() => navigation.navigate('UpdateDevice', {id: 'test'})}
        />
        <DeviceCard
          name="Fan"
          status="ON"
          type="FAN"
          onEdit={() => navigation.navigate('UpdateDevice', {id: 'test'})}
        />
        <DeviceCard
          name="Ac"
          status="OFF"
          type="AC"
          onEdit={() => navigation.navigate('UpdateDevice', {id: 'test'})}
        />
        <DeviceCard
          name="TV"
          status="OFF"
          type="TV"
          onEdit={() => navigation.navigate('UpdateDevice', {id: 'test'})}
        />
        <DeviceCard
          name="Speaker"
          status="OFF"
          type="SOUND_SYSTEM"
          onEdit={() => navigation.navigate('UpdateDevice', {id: 'test'})}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
