import {UserAddForm} from '@/components/forms/user';
import {AppBar, Container} from '@/components/layout';
import {UserNavProps} from '@/navigation/UserNavigation';
import {Button} from '@/ui';
import {MCIcon} from '@/utils/icons';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function AddUser(props: UserNavProps<'AddUser'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <AppBar
        title={'Add User'}
        action={
          <Button>
            <MCIcon name="content-save-outline" size={'xl'} />
          </Button>
        }
      />

      <Container>
        <UserAddForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
