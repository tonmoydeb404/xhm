import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, H4} from 'tamagui';
import {RoomCreateForm} from '../../components/forms/room';
import {Container} from '../../components/layout';
import {RoomNavProps} from '../../navigation/RoomNavigation';
import {MCIcon} from '../../utils/icons';

export default function CreateRoom(props: RoomNavProps<'CreateRoom'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <Container
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 30,
        }}>
        <Button onPress={() => navigation.goBack()} size="$2.5">
          <MCIcon name="keyboard-backspace" />
        </Button>

        <H4 style={{fontSize: 16, fontWeight: 'bold'}}>Create Room</H4>

        <Button size="$2.5">
          <MCIcon name="content-save-outline" />
        </Button>
      </Container>

      <Container>
        <RoomCreateForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
