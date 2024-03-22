import {UseMembers} from '@/types/profile.type';
import React from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {MemberCard} from '../cards';
import {EmptyState, ErrorState, LoadingState} from '../states';

type Props = {} & UseMembers;

const MemberList = (props: Props) => {
  const {isLoading, data, isError} = props;

  if (!isLoading && isError) return <ErrorState />;

  if (!isLoading && Array.isArray(data)) {
    if (data?.length === 0) {
      return <EmptyState />;
    } else {
      return (
        <FlatGrid
          data={data}
          fixed={false}
          renderItem={({item}) => <MemberCard {...item} />}
          maxItemsPerRow={1}
          keyExtractor={item => item.id}
          spacing={10}
          style={{width: '100%'}}
        />
      );
    }
  }

  return <LoadingState />;
};

export default MemberList;
