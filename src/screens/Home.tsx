import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import {Card, IconButton} from '@/ui';
import RoomCard from '../components/cards/RoomCard';
import StatCard from '../components/cards/StatCard';
import {Container} from '../components/layout';
import {AppNavProps} from '../navigation/AppNavigation';

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

const stats = [
  {
    title: '23C',
    subtitle: 'Temprature',
    iconName: 'thermometer',
  },
  {
    title: '35%',
    subtitle: 'Humidity',
    iconName: 'water-outline',
  },
  {
    title: '70',
    subtitle: 'Gas',
    iconName: 'gas-cylinder',
  },
  {
    title: 'Raining',
    subtitle: 'Weather',
    iconName: 'weather-cloudy',
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
          marginBottom: 10,
        }}>
        <IconButton
          icon={'view-grid'}
          onPress={navigation.toggleDrawer}
          size={28}
        />
      </Container>

      <Container>
        {/* Monitor Part */}
        <Card style={styles.statContainer}>
          <FlatGrid
            data={stats}
            fixed={false}
            renderItem={({item}) => (
              <StatCard
                key={item.title}
                iconName={item.iconName}
                subtitle={item.subtitle}
                title={item.title}
              />
            )}
            maxItemsPerRow={2}
            keyExtractor={item => item.title}
            spacing={10}
            style={{width: '100%'}}
          />
        </Card>

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
          spacing={10}
          style={{width: '100%'}}
        />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statContainer: {
    padding: 2,
    marginBottom: 10,
  },
});
