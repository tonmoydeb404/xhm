import {Button} from '@/ui';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RoomCreateForm} from '../../components/forms/room';

import {AppBar, Container} from '@/components/layout';
import {RoomNavProps} from '../../navigation/RoomNavigation';
import {MCIcon} from '../../utils/icons';

export default function CreateRoom(props: RoomNavProps<'CreateRoom'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <AppBar
        title="Create Room"
        action={
          <Button>
            <MCIcon name="content-save-outline" />
          </Button>
        }
      />

      <Container>
        <RoomCreateForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
