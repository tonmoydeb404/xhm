import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {UserAddForm} from '../../components/forms/user';
import {Container} from '../../components/layout';
import {UserNavProps} from '../../navigation/UserNavigation';
import {MCIcon} from '../../utils/icons';

export default function AddUser(props: UserNavProps<'AddUser'>) {
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

        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Add User</Text>

        <Button type="clear" color={'warning'}>
          <MCIcon name="content-save-outline" size={'xl'} />
        </Button>
      </Container>

      <Container>
        <UserAddForm />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
