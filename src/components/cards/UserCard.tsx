import {Avatar, Card, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
};

export default function UserCard(props: Props) {
  const {avatar, email, firstName, lastName} = props;

  return (
    <Card wrapperStyle={styles.container}>
      <Avatar
        size={52}
        rounded
        source={avatar ? {uri: avatar} : undefined}
        icon={avatar ? undefined : {name: 'pencil', type: 'font-awesome'}}
        containerStyle={avatar ? undefined : {backgroundColor: 'blue'}}
      />
      <View>
        <Text style={styles.title}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.subtitle}>{email}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  subtitle: {
    color: '#333',
    fontSize: 14,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
