import {Avatar} from '@rneui/themed';
import React from 'react';
import {ColorValue, StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  name: string;
  devices: number;
  color: ColorValue;
};

export default function RoomCard({name, devices, color}: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Avatar
        size={50}
        icon={{type: 'font-awesome-5', name: 'door-open'}}
        containerStyle={{backgroundColor: color}}
        rounded
      />
      <Text style={styles.title} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.subtitle}>
        {devices} {devices > 1 ? 'devices' : 'device'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 1,
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
  },
  container: {
    width: '47%',
    marginHorizontal: '1.5%',
    marginBottom: 10,

    paddingVertical: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,

    elevation: 2,
    shadowColor: '#333',
  },
});
