import {UserAddForm} from '@/components/forms/user';
import {Container, StackHeader} from '@/components/layout';
import {UserNavProps} from '@/navigation/app/UserNavigation';
import {Button} from '@/ui';
import {MCIcon} from '@/utils/icons';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function AddUser(props: UserNavProps<'AddUser'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <StackHeader
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
