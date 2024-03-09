import {Avatar} from '@rneui/themed';
import React from 'react';
import {ColorValue, StyleSheet} from 'react-native';
import {Card, CardProps, Text} from 'tamagui';

type Props = {
  name: string;
  devices: number;
  color: ColorValue;
  containerProps?: CardProps;
};

export default function RoomCard(props: Props) {
  const {name, devices, color, containerProps = {}} = props;

  return (
    <Card style={{flex: 1}} {...containerProps}>
      <Card.Header alignItems="center">
        <Avatar
          size={50}
          icon={{type: 'font-awesome-5', name: 'door-open'}}
          containerStyle={{backgroundColor: color}}
          rounded
        />
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.subtitle} color={'$gray11'}>
          {devices} {devices > 1 ? 'devices' : 'device'}
        </Text>
      </Card.Header>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 1,
  },
  subtitle: {
    fontSize: 13,
  },
});
