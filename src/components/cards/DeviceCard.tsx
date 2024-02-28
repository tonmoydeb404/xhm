import {Button, Switch} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DeviceIcon, DeviceIconType, MCIcon} from '../../utils/icons';

type Props = {
  name: string;
  status: 'ON' | 'OFF';
  type: DeviceIconType;
  onEdit?: () => any;
};

export default function DeviceCard(props: Props) {
  const {name, status, type, onEdit} = props;
  const [isOn, setIsOn] = useState(status === 'ON');

  return (
    <View style={styles.container}>
      <View style={[styles.icon, isOn ? styles.iconOn : {}]}>
        <DeviceIcon type={type} size={40} color={isOn ? '#fff' : '#000'} />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {name}
      </Text>
      <View style={styles.control}>
        {!!onEdit && (
          <Button onPress={onEdit}>
            <MCIcon name="cog-outline" />
          </Button>
        )}
        <Text style={styles.controlText}>{isOn ? 'ON' : 'OFF'}</Text>
        <Switch
          value={isOn}
          trackColor={{false: '#ddd'}}
          onValueChange={setIsOn}
        />
      </View>
    </View>
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
