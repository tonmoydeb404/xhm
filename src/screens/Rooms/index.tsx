import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Button, H4, XStack} from 'tamagui';
import RoomCard from '../../components/cards/RoomCard';
import {Container} from '../../components/layout';
import {RoomNavProps} from '../../navigation/RoomNavigation';
import {Icon} from '../../utils/icons';

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
      <XStack
        mt={10}
        mb={10}
        alignItems="center"
        justifyContent="space-between"
        px={20}>
        <H4 fontWeight={'bold'}>Rooms</H4>
        <Button
          size={'$2.5'}
          onPress={() => navigation.navigate('CreateRoom')}
          iconAfter={<Icon type="MaterialCommunity" name="plus" />}>
          Add New
        </Button>
      </XStack>

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
