import {RoomUpdateForm} from '@/components/forms/room';
import {Container} from '@/components/layout';
import {RoomNavProps} from '@/navigation/app/RoomNavigation';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function UpdateRoom(props: RoomNavProps<'UpdateRoom'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <Container>
        <RoomUpdateForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
