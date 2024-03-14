import {Avatar, Card} from '@/ui';
import React from 'react';
import {ColorValue, StyleSheet, Text} from 'react-native';

type Props = {
  name: string;
  devices: number;
  color: ColorValue;
  containerProps?: Record<string, any>;
};

export default function RoomCard(props: Props) {
  const {name, devices, color, containerProps = {}} = props;

  return (
    <Card style={{flex: 1}} {...containerProps}>
      <Card.Content>
        <Avatar.Text label="XD"></Avatar.Text>
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.subtitle}>
          {devices} {devices > 1 ? 'devices' : 'device'}
        </Text>
      </Card.Content>
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
