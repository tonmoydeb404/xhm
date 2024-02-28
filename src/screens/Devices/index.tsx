import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DeviceCard from '../../components/cards/DeviceCard';
import {Container} from '../../components/layout';
import {DeviceNavProps} from '../../navigation/DeviceNavigation';
import {MCIcon} from '../../utils/icons';

export default function Devices(props: DeviceNavProps<'Devices'>) {
  const {navigation, route} = props;

  return (
    <SafeAreaView>
      <Container
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
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

        <Button type="clear">
          <MCIcon name="information-outline" size={'xl'} />
        </Button>
      </Container>

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
