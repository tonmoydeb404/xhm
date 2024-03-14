import {RoomUpdateForm} from '@/components/forms/room';
import {AppBar, Container} from '@/components/layout';
import {RoomNavProps} from '@/navigation/RoomNavigation';
import {Button} from '@/ui';
import {MCIcon} from '@/utils/icons';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function UpdateRoom(props: RoomNavProps<'UpdateRoom'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <AppBar
        title={'Update Room'}
        action={
          <Button
            onPress={() => {
              console.log('hello');
            }}>
            <MCIcon name="square-edit-outline" size={'xl'} />
          </Button>
        }
      />

      <Container>
        <RoomUpdateForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
