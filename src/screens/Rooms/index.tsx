import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import {RoomCard} from '@/components/cards';
import {Container} from '@/components/layout';
import {RoomNavProps} from '@/navigation/RoomNavigation';

const rooms = [
  {
    id: '1',
    title: 'Living Room',
    devices: 6,
  },
  {
    id: '2',
    title: 'Living Room',
    devices: 6,
  },
  {
    id: '3',
    title: 'Living Room',
    devices: 6,
  },
  {
    id: '4',
    title: 'Living Room',
    devices: 6,
  },
];

export default function Rooms({navigation}: RoomNavProps<'Rooms'>) {
  return (
    <SafeAreaView>
      <Container>
        <FlatGrid
          data={rooms}
          fixed={false}
          renderItem={({item}) => (
            <RoomCard
              name={item.title}
              devices={item.devices}
              key={item.id}
              color={'#2F52E0'}
              containerProps={{
                onPress: () =>
                  navigation.navigate('Room', {
                    title: item.title,
                  }),
              }}
            />
          )}
          maxItemsPerRow={2}
          keyExtractor={item => item.id}
          spacing={8}
          style={{width: '100%'}}
        />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
