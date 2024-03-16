import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import {DeviceCard} from '@/components/cards';
import {Container} from '@/components/layout';
import {RoomNavProps} from '@/navigation/app/RoomNavigation';

const devices = [
  {
    id: '1',
    title: 'Light',
    type: 'LIGHT',
    status: 'ON',
  },
  {
    id: '2',
    title: 'Fan',
    type: 'FAN',
    status: 'OFF',
  },
  {
    id: '3',
    title: 'AC',
    type: 'AC',
    status: 'ON',
  },
  {
    id: '4',
    title: 'TV',
    type: 'TV',
    status: 'ON',
  },
];

export default function Room({navigation, route}: RoomNavProps<'Room'>) {
  return (
    <SafeAreaView>
      <Container>
        <FlatGrid
          data={devices}
          fixed={false}
          renderItem={({item}) => (
            <DeviceCard
              name={item.title}
              status={item.status as any}
              key={item.id}
              type={item.type as any}
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
