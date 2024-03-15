import {UserCard} from '@/components/cards';
import {AppHeader, Container} from '@/components/layout';
import {UserNavProps} from '@/navigation/UserNavigation';
import {Button} from '@/ui';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function Users(props: UserNavProps<'Users'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <AppHeader
        title={'Users'}
        action={
          <Button onPress={() => navigation.navigate('AddUser')}>Add</Button>
        }
      />

      <Container>
        <UserCard firstName="Jhon" lastName="Doe" email="jhondoe@mail.com" />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
