import {DeviceParamList} from '@/navigation/app/DeviceNavigation';
import {UseDevices} from '@/types/device.type';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {DeviceCard} from '../cards';
import {EmptyState, ErrorState, LoadingState} from '../states';

type Props = {} & UseDevices;

const DeviceList = (props: Props) => {
  const {isLoading, data, isError} = props;
  const navigation = useNavigation<NavigationProp<DeviceParamList>>();

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
            <DeviceCard
              name={item.title}
              status={item.status}
              type="SOUND_SYSTEM"
              onEdit={() => navigation.navigate('UpdateDevice', {id: 'test'})}
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

export default DeviceList;
