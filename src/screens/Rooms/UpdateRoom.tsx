import {RoomUpdateForm} from '@/components/forms/room';
import {Container} from '@/components/layout';
import useHome from '@/hooks/contexts/useHome';
import {RoomNavProps} from '@/navigation/app/RoomNavigation';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function UpdateRoom(props: RoomNavProps<'UpdateRoom'>) {
  const {navigation, route} = props;
  const {getRoom} = useHome();
  const room = getRoom(route.params.id);

  return (
    <SafeAreaView style={{marginTop: 20}}>
      <Container>
        {room && (
          <RoomUpdateForm
            room={room}
            onSuccess={() => navigation.navigate('Rooms')}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
