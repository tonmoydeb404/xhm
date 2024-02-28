import {Button, Text} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import RoomCard from '../../components/cards/RoomCard';
import {RoomNavProps} from '../../navigation/RoomNavigation';
import {Icon} from '../../utils/icons';

export default function Rooms({navigation}: RoomNavProps<'Rooms'>) {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <Text h4>Rooms</Text>
        <Button
          type="outline"
          size="sm"
          onPress={() => navigation.navigate('CreateRoom')}>
          Add New&nbsp;
          <Icon type="MaterialCommunity" name="plus" size={'md'} />
        </Button>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 16,
          marginTop: 30,
        }}>
        <RoomCard
          name="Living Room"
          devices={6}
          color={'#2F52E0'}
          onPress={() => navigation.navigate('Room', {title: 'Living Room'})}
        />
        <RoomCard
          name="Bed Room"
          devices={2}
          color={'#F3A712'}
          onPress={() => navigation.navigate('Room', {title: 'Bed Room'})}
        />
        <RoomCard
          name="Dining Room"
          devices={1}
          color={'#E9190F'}
          onPress={() => navigation.navigate('Room', {title: 'Dining Room'})}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
