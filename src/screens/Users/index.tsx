import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {UserCard} from '../../components/cards';
import {Container} from '../../components/layout';
import {UserNavProps} from '../../navigation/UserNavigation';
import {MCIcon} from '../../utils/icons';

export default function Users(props: UserNavProps<'Users'>) {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <Container
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Button
          type="clear"
          onPress={() => {
            navigation.goBack();
          }}>
          <MCIcon name="keyboard-backspace" size={'xl'} />
        </Button>

        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Users</Text>

        <Button
          type="outline"
          onPress={() => navigation.navigate('AddUser')}
          icon={<MCIcon name="plus" />}
          iconRight
          size="sm">
          Add
        </Button>
      </Container>

      <View
        style={{
          flexDirection: 'column',
        }}>
        <UserCard firstName="Jhon" lastName="Doe" email="jhondoe@mail.com" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
