import {Text} from '@rneui/base';
import {Button} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import DeviceCard from '../../components/cards/DeviceCard';
import {RoomNavProps} from '../../navigation/RoomNavigation';
import {MCIcon} from '../../utils/icons';

export default function Room({navigation, route}: RoomNavProps<'Room'>) {
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

        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {route.params.title}
        </Text>

        <Button
          type="clear"
          color={'warning'}
          onPress={() => navigation.navigate('UpdateRoom')}>
          <MCIcon name="square-edit-outline" size={'xl'} />
        </Button>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 20,
          marginTop: 30,
        }}>
        <DeviceCard name="Light" status="OFF" type="LIGHT" />
        <DeviceCard name="Fan" status="ON" type="FAN" />
        <DeviceCard name="Ac" status="OFF" type="AC" />
        <DeviceCard name="TV" status="OFF" type="TV" />
        <DeviceCard name="Speaker" status="OFF" type="SOUND_SYSTEM" />
      </View>
    </>
  );
}
