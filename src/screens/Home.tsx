import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import useAuth from '@/hooks/contexts/useAuth';
import useHome from '@/hooks/contexts/useHome';
import {Avatar, Card, IconButton, Text} from '@/ui';

import {RoomList} from '@/components/lists';
import StatCard from '../components/cards/StatCard';
import {Container} from '../components/layout';
import {BottomNavProps} from '../navigation/app/BottomNavigation';

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

export default function Home({navigation}: BottomNavProps<'Home'>) {
  const {profile} = useAuth();
  const {rooms, home} = useHome();

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
        <Text variant="titleMedium">{home.data?.title}</Text>
        {profile?.avatar && (
          <Avatar.Image size={40} source={{uri: profile?.avatar}} />
        )}
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

        <RoomList {...rooms} />
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
