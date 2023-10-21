import {Avatar, Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import RoomCard from '../common/components/RoomCard';
import StatCard from '../common/components/StatCard';
import {MCIcon} from '../utils/Icons';

export default function Home() {
  return (
    <SafeAreaView>
      {/* Header Part */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <Button type="clear">
          <MCIcon name="view-grid" size={'xl'} />
        </Button>
        <Avatar
          size={35}
          icon={{type: 'material-icons', name: 'person'}}
          containerStyle={{backgroundColor: '#9700b9'}}
          rounded
        />
      </View>

      {/* Monitor Part */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 20,
          padding: 20,
          backgroundColor: '#fff',
          borderRadius: 10,
          marginTop: 30,
          rowGap: 20,

          elevation: 2,
          shadowColor: '#333',
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
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 20,
          marginTop: 30,
        }}>
        <RoomCard name="Living Room" devices={6} color={'#2F52E0'} />
        <RoomCard name="Bed Room" devices={2} color={'#F3A712'} />
        <RoomCard name="Dining Room" devices={1} color={'#E9190F'} />
      </View>
    </SafeAreaView>
  );
}
