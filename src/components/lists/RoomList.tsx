import {RoomParamList} from '@/navigation/app/RoomNavigation';
import {UseRooms} from '@/types/room.type';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {RoomCard} from '../cards';
import {EmptyState, ErrorState, LoadingState} from '../states';

type Props = {} & UseRooms;

const RoomList = (props: Props) => {
  const {isLoading, data, isError} = props;
  const navigation = useNavigation<NavigationProp<RoomParamList>>();

  if (!isLoading && isError) return <ErrorState />;

  if (!isLoading && Array.isArray(data)) {
    if (data?.length === 0) {
      return <EmptyState />;
    } else {
      return (
        <FlatGrid
          data={data}
          fixed={false}
          renderItem={({item}) => (
            <RoomCard
              name={item.title}
              devices={0}
              key={item.id}
              color={'#2F52E0'}
              containerProps={{
                onPress: () => navigation.navigate('Room', {title: item.title}),
              }}
            />
          )}
          maxItemsPerRow={2}
          keyExtractor={item => item.id}
          spacing={10}
          style={{width: '100%'}}
        />
      );
    }
  }

  return <LoadingState />;
};

export default RoomList;
