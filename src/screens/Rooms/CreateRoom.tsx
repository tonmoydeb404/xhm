import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
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
        <Button
          type="clear"
          onPress={() => {
            navigation.goBack();
          }}>
          <MCIcon name="keyboard-backspace" size={'xl'} />
        </Button>

        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Create Room</Text>

        <Button type="clear" color={'warning'}>
          <MCIcon name="square-edit-outline" size={'xl'} />
        </Button>
      </Container>

      <Container>
        <RoomCreateForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
