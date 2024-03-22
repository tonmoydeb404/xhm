import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Container} from '@/components/layout';
import {RoomList} from '@/components/lists';
import useHome from '@/hooks/contexts/useHome';
import {RoomNavProps} from '@/navigation/app/RoomNavigation';

export default function Rooms({navigation}: RoomNavProps<'Rooms'>) {
  const {rooms} = useHome();

  return (
    <SafeAreaView>
      <Container>
        <RoomList {...rooms} />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
