import {AppHeader} from '@/components/layout';
import {Button} from '@/ui';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import DeviceCard from '../../components/cards/DeviceCard';
import {DeviceNavProps} from '../../navigation/DeviceNavigation';
import {MCIcon} from '../../utils/icons';

export default function Devices(props: DeviceNavProps<'Devices'>) {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <AppHeader
        title="Devices"
        action={
          <Button>
            <MCIcon name="information-outline" size={'xl'} />
          </Button>
        }
      />

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
