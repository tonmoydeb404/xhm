import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import {Button, Card} from '@/ui';
import RoomCard from '../components/cards/RoomCard';
import StatCard from '../components/cards/StatCard';
import {Container} from '../components/layout';
import {AppNavProps} from '../navigation/AppNavigation';
import {MCIcon} from '../utils/icons';

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

export default function Home({navigation}: AppNavProps<'Home'>) {
  return (
    <SafeAreaView>
      {/* Header Part */}
      <Container
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Button onPress={navigation.toggleDrawer}>
          <MCIcon name="view-grid" size={'xl'} />
        </Button>
      </Container>

      {/* Monitor Part */}
      <Card
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 20,
          padding: 20,

          borderRadius: 10,
          marginTop: 30,
          rowGap: 20,
        }}>
        <StatCard
          title="23 C"
          subtitle="Temprature"
          iconName="temperature-three-quarters"
          iconType="FontAwesome"
        />
        <StatCard
          title="35%"
          subtitle="Humidity"
          iconName="water-outline"
          iconType="Ion"
        />
        <StatCard
          title="70"
          subtitle="Gas"
          iconName="gas-meter"
          iconType="Material"
        />
        <StatCard
          title="Raining"
          subtitle="Weather"
          iconName="weather-rainy"
          iconType="MaterialCommunity"
        />
      </Card>

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
                  navigation.navigate('AppRooms', {
                    screen: 'Room',
                    params: {title: item.title},
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
