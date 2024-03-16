import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RoomCreateForm} from '../../components/forms/room';

import {Container} from '@/components/layout';
import {RoomNavProps} from '../../navigation/app/RoomNavigation';

export default function CreateRoom(props: RoomNavProps<'CreateRoom'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <Container>
        <RoomCreateForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
