import {Avatar, Card} from '@/ui';
import React from 'react';
import {StyleSheet} from 'react-native';

type Props = {
  name: string;
  devices: number;
  color: string;
  containerProps?: Record<string, any>;
};

export default function RoomCard(props: Props) {
  const {name, devices, color, containerProps = {}} = props;

  return (
    <Card {...containerProps}>
      <Card.Content>
        <Avatar.Icon theme={{colors: {primary: color}}} icon="folder" />
      </Card.Content>
      <Card.Title
        title={name}
        subtitle={`${devices} ${devices > 1 ? 'devices' : 'device'}`}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
