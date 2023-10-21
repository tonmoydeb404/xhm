import {Switch} from '@rneui/themed';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {Icon} from '../../utils/Icons';

type Props = {
  name: string;
  status: 'ON' | 'OFF';
} & Omit<TouchableOpacityProps, 'style' | 'activeOpacity'>;

export default function DeviceCard({name, status, ...rest}: Props) {
  const [isOn, setIsOn] = useState(status === 'ON');

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
      <View style={[styles.icon, isOn ? styles.iconOn : {}]}>
        <Icon
          name="bulb-outline"
          type="Ion"
          size={40}
          color={isOn ? '#fff' : '#000'}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {name}
      </Text>
      <View style={styles.control}>
        <Text style={styles.controlText}>{status}</Text>
        <Switch
          value={isOn}
          trackColor={{false: '#ddd'}}
          onValueChange={setIsOn}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 8,
  },
  iconOn: {
    backgroundColor: '#2F52E0',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 15,
  },
  container: {
    width: '47%',
    marginHorizontal: '1.5%',
    marginBottom: 10,

    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,

    elevation: 2,
    shadowColor: '#333',
  },

  control: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlText: {
    fontSize: 12,
    color: '#666',
  },
});
