import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {RoomCreateForm} from '../../components/forms/room';

import {Container} from '@/components/layout';
import {RoomNavProps} from '../../navigation/app/RoomNavigation';

export default function CreateRoom(props: RoomNavProps<'CreateRoom'>) {
  const {navigation} = props;

  return (
    <ScrollView>
      <SafeAreaView style={{marginTop: 20, marginBottom: 20}}>
        <Container>
          <RoomCreateForm onSuccess={() => navigation.navigate('Rooms')} />
        </Container>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
